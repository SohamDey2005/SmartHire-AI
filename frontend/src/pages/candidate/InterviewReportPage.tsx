import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { useAuth } from "../../contexts/AuthContext";

import {
    getInterviewReport,
    type InterviewReport,
} from "../../services/interviewService";

export default function InterviewReportPage() {

    const { token } = useAuth();

    const location = useLocation();

    const sessionId = location.state?.sessionId;

    const [report, setReport] =
        useState<InterviewReport | null>(null);

    useEffect(() => {

        async function loadReport() {

            if (!token) return;

            const data =
                await getInterviewReport(
                    sessionId,
                    token,
                );

            setReport(data);
        }

        loadReport();

    }, []);

    if (!report) {

        return (

            <div className="text-center p-20">

                Loading Report...

            </div>

        );
    }

    const recommendation =

        report.overall_score >= 8.5
            ? "⭐ Strong Hire"

            : report.overall_score >= 7
                ? "👍 Hire"

                : report.overall_score >= 5.5
                    ? "🤔 Consider"

                    : "❌ Needs Improvement";

    return (

        <div className="max-w-6xl mx-auto p-10">

            <h1 className="text-4xl font-bold mb-10">

                AI Interview Report

            </h1>

            <div className="grid md:grid-cols-2 gap-10">

                <div className="w-60 h-60 mx-auto">

                    <CircularProgressbar

                        value={
                            report.overall_score * 10
                        }

                        text={
                            `${report.overall_score}/10`
                        }

                        styles={buildStyles({

                            textSize: "12px",

                        })}
                    />

                </div>

                <div className="flex flex-col justify-center">

                    <h2 className="text-3xl font-bold">

                        {recommendation}

                    </h2>

                    <p className="mt-4 text-gray-600">

                        Overall Performance Score

                    </p>

                    <p className="text-5xl font-bold mt-2">

                        {report.overall_score}

                    </p>

                </div>

            </div>

            <div className="mt-14 space-y-8">

                {report.questions.map((q, index) => (

                    <div

                        key={index}

                        className="bg-white rounded-xl shadow-lg p-8"

                    >

                        <h2 className="text-xl font-bold">

                            Question {index + 1}

                        </h2>

                        <p className="mt-4">

                            {q.question}

                        </p>

                        <div className="mt-6">

                            <h3 className="font-semibold">

                                Your Answer

                            </h3>

                            <p className="mt-2">

                                {q.candidate_answer}

                            </p>

                        </div>

                        <div className="mt-6">

                            <h3 className="font-semibold">

                                Score

                            </h3>

                            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">

                                <div

                                    className="bg-blue-600 h-4 rounded-full"

                                    style={{
                                        width: `${q.score * 10}%`,
                                    }}

                                />

                            </div>

                            <p className="mt-2">

                                {q.score}/10

                            </p>

                        </div>

                        <div className="mt-6">

                            <h3 className="font-semibold text-green-600">

                                Strengths

                            </h3>

                            <ul className="list-disc ml-6 mt-2">

                                {q.strengths.map((item, i) => (

                                    <li key={i}>

                                        {item}

                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="mt-6">

                            <h3 className="font-semibold text-red-600">

                                Weaknesses

                            </h3>

                            <ul className="list-disc ml-6 mt-2">

                                {q.weaknesses.map((item, i) => (

                                    <li key={i}>

                                        {item}

                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="mt-6">

                            <h3 className="font-semibold text-blue-700">

                                Ideal Answer

                            </h3>

                            <p className="mt-2">

                                {q.ideal_answer}

                            </p>

                        </div>

                        <div className="mt-6">

                            <h3 className="font-semibold text-yellow-600">

                                AI Feedback

                            </h3>

                            <p className="mt-2">

                                {q.feedback}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}