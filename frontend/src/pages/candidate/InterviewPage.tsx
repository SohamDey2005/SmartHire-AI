import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import InterviewMonitor from "../../components/interview/InterviewMonitor";
import type { InterviewMonitorHandle } from "../../components/interview/InterviewMonitor";
import QuestionPanel from "../../components/interview/QuestionPanel";
import AnswerPanel from "../../components/interview/AnswerPanel";
import EvaluationPanel from "../../components/interview/EvaluationPanel";

export default function InterviewPage() {

    const location = useLocation();

    const navigate = useNavigate();

    const resumeId = location.state?.resumeId;

    const token = localStorage.getItem("token");

    //------------------------------------
    // Interview Monitor Ref
    //------------------------------------

    const monitorRef =
        useRef<InterviewMonitorHandle>(null);

    //------------------------------------
    // Interview States
    //------------------------------------

    const [questions, setQuestions] =
        useState<any[]>([]);

    const [currentQuestion, setCurrentQuestion] =
        useState(0);

    const [sessionId, setSessionId] =
        useState<number | null>(null);

    const [answer, setAnswer] =
        useState("");

    const [answers, setAnswers] =
        useState<any[]>([]);

    const [evaluation, setEvaluation] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(false);

    //------------------------------------
    // Start Interview
    //------------------------------------

    useEffect(() => {

        if (!resumeId) {

            return;

        }

        startInterview();

    }, []);

    //------------------------------------
    // Start Interview API
    //------------------------------------

    const startInterview = async () => {

        try {

            const session =
                await axios.post(

                    `http://127.0.0.1:8000/api/v1/interview/start/${resumeId}`,

                    {},

                    {

                        headers: {

                            Authorization:
                                `Bearer ${token}`,

                        },

                    }

                );

            console.log(session.data);

            setSessionId(
                session.data.id
            );

            const response =
                await axios.get(

                    `http://127.0.0.1:8000/api/v1/interview/generate/${resumeId}`,

                    {

                        headers: {

                            Authorization:
                                `Bearer ${token}`,

                        },

                    }

                );

            setQuestions(
                response.data
            );

            // Start monitoring after first question loads

            setTimeout(() => {

                monitorRef.current?.startRecording();

            }, 500);

        }

        catch (error) {

            console.log(error);

        }

    };

    //------------------------------------
    // Submit Answer
    //------------------------------------

    const submitAnswer = async () => {

        if (!answer.trim()) {

            alert(
                "Please write an answer."
            );

            return;

        }

        // Stop recording and analyze this answer

        if (monitorRef.current) {

            monitorRef.current.startAnalyzing();

            await monitorRef.current.stopRecording();

        }

        setLoading(true);

        try {

            const response =
                await axios.post(

                    "http://127.0.0.1:8000/api/v1/interview/evaluate",

                    {

                        question:

                            questions[currentQuestion]
                                .question,

                        answer,

                    },

                    {

                        headers: {

                            Authorization:
                                `Bearer ${token}`,

                        },

                    }

                );

            const result =
                response.data;

            setEvaluation(
                result
            );

            setAnswers([

                ...answers,

                {

                    question:

                        questions[currentQuestion]
                            .question,

                    answer,

                    evaluation: result,

                },

            ]);

            setAnswer("");

        }

        catch (err) {

            console.log(err);

        }

        setLoading(false);

        if (

            currentQuestion <

            questions.length - 1

        ) {

            setTimeout(async () => {

                monitorRef.current?.resetMonitoring();

                setCurrentQuestion(

                    prev => prev + 1

                );

                setEvaluation(null);

                setAnswer("");

                await monitorRef.current?.startRecording();

            }, 2000);

        }

    };

    //------------------------------------
    // Finish Interview
    //------------------------------------

    const finishInterview = async () => {

        if (monitorRef.current) {

            await monitorRef.current.stopRecording();

        }

        if (!sessionId) {

            return;

        }

        try {

            await axios.post(

                `http://127.0.0.1:8000/api/v1/interview/finish/${sessionId}`,

                {},

                {

                    headers: {

                        Authorization:
                            `Bearer ${token}`,

                    },

                }

            );

            alert(
                "Interview Completed Successfully."
            );

            navigate(
                `/interview-analytics/${sessionId}`
            );

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-3xl font-bold mb-8">
                SmartHire AI Mock Interview
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Side */}

                <div className="lg:col-span-2 space-y-6">

                    {/* Session */}

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-semibold">
                            Resume ID : {resumeId}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Session ID : {sessionId ?? "Starting..."}
                        </p>

                    </div>

                    {/* Question */}

                    <QuestionPanel

                        question={
                            questions.length > 0
                                ? questions[currentQuestion].question
                                : "Loading Interview Questions..."
                        }

                        currentQuestion={currentQuestion}

                        totalQuestions={questions.length}

                    />

                    {/* Answer */}

                    <AnswerPanel

                        answer={answer}

                        loading={loading}

                        onChange={setAnswer}

                        onSubmit={submitAnswer}

                        onFinish={finishInterview}

                    />

                </div>

                {/* Right Side */}

                <div className="space-y-6">

                    {sessionId ? (

                        <InterviewMonitor

                            ref={monitorRef}

                            sessionId={sessionId}

                        />

                    ) : (

                        <div className="bg-white rounded-xl shadow p-6 text-center">

                            <p className="text-gray-500">
                                Initializing AI Monitoring...
                            </p>

                        </div>

                    )}

                    <EvaluationPanel

                        evaluation={evaluation}

                    />

                </div>

            </div>

        </div>

    );

}