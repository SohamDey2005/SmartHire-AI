import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import {
    startInterview,
    generateQuestions,
    saveAnswer,
    finishInterview,
    type InterviewQuestion,
    type InterviewSession,
} from "../../services/interviewService";

export default function InterviewPage() {

    const { token } = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    const resumeId = location.state?.resumeId;

    const [session, setSession] =
        useState<InterviewSession | null>(null);

    const [questions, setQuestions] =
        useState<InterviewQuestion[]>([]);

    const [index, setIndex] =
        useState(0);

    const [answer, setAnswer] =
        useState("");

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    useEffect(() => {

        async function initialize() {

            if (!token || !resumeId)
                return;

            try {

                const interviewSession =
                    await startInterview(
                        resumeId,
                        token,
                    );

                setSession(
                    interviewSession
                );

                const generatedQuestions =
                    await generateQuestions(
                        resumeId,
                        token,
                    );

                setQuestions(
                    generatedQuestions
                );

            } catch (error) {

                console.error(error);

                alert(
                    "Unable to start interview."
                );

            } finally {

                setLoading(false);

            }

        }

        initialize();

    }, []);

    async function nextQuestion() {

        if (
            !session ||
            !questions[index] ||
            !token
        ) {
            return;
        }

        try {

            setSaving(true);

            await saveAnswer(
                {
                    session_id: session.id,
                    question_id: questions[index].id,
                    candidate_answer: answer,
                },
                token,
            );

            setAnswer("");

            if (
                index ===
                questions.length - 1
            ) {

                await finishInterview(
                    session.id,
                    token,
                );

                navigate(
                    "/interview/report",
                    {
                        state: {
                            sessionId:
                                session.id,
                        },
                    }
                );

            } else {

                setIndex(
                    (prev) => prev + 1
                );

            }

        } catch (error) {

            console.error(error);

            alert(
                "Failed to save answer."
            );

        } finally {

            setSaving(false);

        }

    }

    if (loading) {

        return (

            <div className="p-10 text-center text-xl">

                Loading interview...

            </div>

        );

    }

    if (questions.length === 0) {

        return (

            <div className="p-10 text-center">

                No interview questions found.

            </div>

        );

    }

    const question =
        questions[index];

    return (

        <div className="max-w-5xl mx-auto py-10 px-4">

            <h1 className="text-3xl font-bold mb-8">

                AI Interview

            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-xl font-semibold">

                        Question {index + 1}

                    </h2>

                    <span className="text-gray-500">

                        {index + 1} / {questions.length}

                    </span>

                </div>

                <p className="text-blue-600 font-semibold mb-2">

                    {question.category}

                </p>

                <p className="text-lg mb-8">

                    {question.question}

                </p>

                <textarea

                    value={answer}

                    onChange={(e) =>
                        setAnswer(
                            e.target.value
                        )
                    }

                    rows={8}

                    className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    placeholder="Type your answer here..."

                />

                <div className="mt-8 flex justify-end">

                    <button

                        onClick={nextQuestion}

                        disabled={saving}

                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg"

                    >

                        {

                            saving

                                ? "Saving..."

                                : index === questions.length - 1

                                    ? "Finish Interview"

                                    : "Next Question"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}