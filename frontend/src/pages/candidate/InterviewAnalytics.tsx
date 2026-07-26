import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AnalyticsCards from "../../components/interview/AnalyticsCards";
import ScoreChart from "../../components/interview/ScoreChart";
import EyeContactChart from "../../components/interview/EyeContactChart";
import EmotionChart from "../../components/interview/EmotionChart";
import FillerChart from "../../components/interview/FillerChart";
import TranscriptHistory from "../../components/interview/TranscriptHistory";

export default function InterviewAnalytics() {

    const { sessionId } = useParams();

    const navigate = useNavigate();

    const token =
        localStorage.getItem("token");

    const [analytics, setAnalytics] =
        useState<any>(null);

    useEffect(() => {

        loadAnalytics();

    }, []);

    async function loadAnalytics() {

        const response =
            await axios.get(

                `http://127.0.0.1:8000/api/v1/interview-monitor/analytics/${sessionId}`,

                {

                    headers: {

                        Authorization:
                            `Bearer ${token}`,

                    },

                }

            );

        setAnalytics(
            response.data
        );

    }

    if (!analytics) {

        return (

            <div className="p-10">

                Loading...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Interview Analytics

                </h1>

                <div className="flex gap-4">

                    <button

                        onClick={() => navigate(`/progress/${sessionId}`)}

                        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold"

                    >

                        Progress Dashboard

                    </button>

                    <button

                        onClick={() => navigate("/interview-history")}

                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold"

                    >

                        Interview History

                    </button>

                    <button

                        onClick={() =>
                            window.open(
                                `http://127.0.0.1:8000/api/v1/report/${sessionId}`,
                                "_blank"
                            )
                        }

                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold"

                    >

                        Download PDF

                    </button>

                </div>

            </div>

            <AnalyticsCards

                overallScore={
                    analytics.overall_score
                }

                recommendation={
                    analytics.recommendation
                }

                eyeContact={
                    analytics.average_eye_contact
                }

                fluency={
                    analytics.average_fluency
                }

                fillers={
                    analytics.average_fillers
                }

                emotion={
                    analytics.average_emotion
                }

            />

            <div className="grid lg:grid-cols-2 gap-6 mt-8">

                <ScoreChart
                    data={analytics.timeline}
                />

                <EyeContactChart
                    data={analytics.timeline}
                />

                <FillerChart
                    data={analytics.timeline}
                />

                <EmotionChart
                    emotion={
                        analytics.average_emotion
                    }
                />

            </div>

            <div className="mt-8">

                <TranscriptHistory

                    transcripts={
                        analytics.timeline.map(
                            (item: any) =>
                                item.transcript ?? ""
                        )
                    }

                />

            </div>

        </div>

    );

}