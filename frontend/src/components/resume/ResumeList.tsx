import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

import {
    getResumes,
    deleteResume,
    downloadResume,
    analyzeResume,
} from "../../services/resumeService";

import type {
    Resume,
    ResumeAnalysis,
} from "../../services/resumeService";

import ResumeAnalysisCard from "./ResumeAnalysisCard";

export default function ResumeList() {

    const { token } = useAuth();

    const navigate = useNavigate();

    const [resumes, setResumes] = useState<Resume[]>([]);

    const [loading, setLoading] = useState(true);

    const [analysis, setAnalysis] =
        useState<ResumeAnalysis | null>(null);
    
    const [analyzingId, setAnalyzingId] =
        useState<number | null>(null);

    async function loadResumes() {

        if (!token) return;

        try {

            const data = await getResumes(token);

            setResumes(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id: number) {

        if (!token) return;

        const confirmed = window.confirm(
            "Delete this resume?"
        );

        if (!confirmed) return;

        try {

            await deleteResume(id, token);
            toast.success("Resume deleted.");

            loadResumes();

        }

        catch (error) {

            console.error(error);

            toast.error("Delete failed.");

        }

    }

    async function handleAnalyze(
        resumeId: number,
    ) {
        
        if (!token) return;

        try {

            setAnalyzingId(resumeId);

            const result =
            
                await analyzeResume(
                    resumeId,
                    token,
                );

            setAnalysis(
                result.analysis
            );
        
        }

        catch (error) {

            console.error(error);

            alert(
                "Resume analysis failed."
            );
        }

        finally {

            setAnalyzingId(null);
        
        }
    }

    useEffect(() => {

        loadResumes();

    }, []);

    if (loading) {

        return (

            <div className="bg-white rounded-xl shadow p-6 mt-6 text-center">

                <p className="text-gray-500">
                    Loading resumes...
                </p>

            </div>

        );

    }

    if (resumes.length === 0) {

        return (

            <div className="bg-white rounded-xl shadow p-10 mt-6 text-center">

                <div className="text-6xl">
                    📄
                </div>

                <h2 className="text-2xl font-semibold mt-4">
                    No resumes uploaded yet
                </h2>

                <p className="text-gray-500 mt-2">
                    Upload your first resume to get started.
                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

            <h2 className="text-2xl font-semibold mb-6">

                My Resumes

                <span className="ml-2 text-base font-normal text-gray-500">

                    ({resumes.length})
                
                </span>
                
            </h2>

            <div className="space-y-4">

                {resumes.map((resume) => (

                    <div
                        key={resume.id}
                        className="border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
                    >

                        <div>

                            <h3 className="text-xl font-semibold">

                                📄 {resume.filename}

                            </h3>

                            <p className="text-gray-500 mt-2">

                                Uploaded on

                                <br />

                                {new Date(
                                    resume.uploaded_at
                                ).toLocaleString(
                                    "en-IN",
                                    {
                                        timeZone: "Asia/Kolkata",
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: true,
                                    }
                                )}

                            </p>

                        </div>

                        <div className="flex gap-3">

                            <button
                                onClick={() =>
                                    downloadResume(
                                        resume.id,
                                        token!
                                    )
                                }
                                className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-lg"
                            >

                                Download

                            </button>

                            <button
                                onClick={() =>
                                    handleAnalyze(
                                        resume.id
                                    )
                                }
                                disabled={
                                    analyzingId ===
                                    resume.id
                                }
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition text-white px-5 py-2 rounded-lg"
                            >
                                {
                                    analyzingId ===
                                    resume.id
                                        ? "Analyzing..."
                                        : "Analyze"
                                }

                            </button>

                            <button
                                onClick={() =>
                                    navigate(
                                        "/interview",
                                        {
                                            state: {
                                                resumeId: resume.id,
                                            },
                                        }
                                    )
                                }
                                className="bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-2 rounded-lg"
                            >

                                Interview

                            </button>

                            <button
                                onClick={() =>
                                    handleDelete(
                                        resume.id
                                    )
                                }
                                className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-lg"
                            >

                                Delete

                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {
                analysis && (
                    <ResumeAnalysisCard
                        analysis={analysis}
                    />
                )
            }

        </div>

    );

}