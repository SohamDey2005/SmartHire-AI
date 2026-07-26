import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

type FeedbackData = {
    overall_score: number;
    recommendation: string;
    transcript: string;
    word_count: number;
    fluency_score: number;
    filler_count: number;
    dominant_emotion: string;
    eye_contact_score: number;
    feedback: {
        summary: string;
        strengths: string[];
        weaknesses: string[];
        suggestions: string[];
    };
};

export default function FeedbackDashboard() {

    const { sessionId } = useParams();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [data, setData] =
        useState<FeedbackData | null>(null);

    useEffect(() => {

        loadFeedback();

    }, []);

    const loadFeedback = async () => {

        try {

            const response =
                await axios.get(

                    `http://127.0.0.1:8000/api/v1/feedback/${sessionId}`,

                    {

                        headers: {

                            Authorization:
                                `Bearer ${token}`,

                        },

                    }

                );

            setData(response.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!data) {

        return (

            <div className="p-8">

                Loading...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    AI Feedback Dashboard

                </h1>

                <div className="flex gap-4">

                    <button

                        onClick={() =>
                            navigate(`/progress/${sessionId}`)
                        }

                        className="bg-indigo-600 text-white px-5 py-3 rounded-lg"

                    >

                        Progress Dashboard

                    </button>

                    <button

                        onClick={() =>
                            navigate(`/recruiter-playback/${sessionId}`)
                        }

                        className="bg-purple-600 text-white px-5 py-3 rounded-lg"

                    >

                        Recruiter Playback

                    </button>

                </div>

            </div>
            
            {/* Score */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold">

                    Overall Score

                </h2>

                <div className="text-6xl font-bold text-blue-600 mt-4">

                    {data.overall_score}

                </div>

                <p className="text-xl text-gray-600 mt-2">

                    {data.feedback.summary}

                </p>

            </div>

            <div className="grid grid-cols-3 gap-6">

                {/* Strengths */}

                <div className="bg-green-50 rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold text-green-700 mb-4">

                        Strengths

                    </h2>

                    <ul className="space-y-2 list-disc ml-5">

                        {data.feedback.strengths.map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

                {/* Weaknesses */}

                <div className="bg-red-50 rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold text-red-700 mb-4">

                        Weaknesses

                    </h2>

                    <ul className="space-y-2 list-disc ml-5">

                        {data.feedback.weaknesses.map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

                {/* Suggestions */}

                <div className="bg-yellow-50 rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold text-yellow-700 mb-4">

                        Suggestions

                    </h2>

                    <ul className="space-y-2 list-disc ml-5">

                        {data.feedback.suggestions.map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

            </div>

            {/* Metrics */}

            <div className="grid grid-cols-4 gap-6 mt-8">

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Fluency</p>

                    <h2 className="text-3xl font-bold">

                        {data.fluency_score}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Eye Contact</p>

                    <h2 className="text-3xl font-bold">

                        {data.eye_contact_score}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Filler Words</p>

                    <h2 className="text-3xl font-bold">

                        {data.filler_count}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Emotion</p>

                    <h2 className="text-3xl font-bold">

                        {data.dominant_emotion}

                    </h2>

                </div>

            </div>

            {/* Transcript */}

            <div className="bg-white rounded-xl shadow p-6 mt-8">

                <h2 className="text-2xl font-bold mb-4">

                    Transcript

                </h2>

                <div className="bg-gray-100 rounded-lg p-4">

                    {data.transcript}

                </div>

            </div>

        </div>

    );

}