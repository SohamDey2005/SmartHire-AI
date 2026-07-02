import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import ResumeUpload from "../../components/resume/ResumeUpload";
import ResumeList from "../../components/resume/ResumeList";

export default function Dashboard() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [refreshKey, setRefreshKey] = useState(0);

    // LIVE CLOCK STATE (IST)
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        })
    );

    // UPDATE CLOCK EVERY SECOND
    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentTime(
                new Date().toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            );

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    useEffect(() => {
        document.title = "Candidate Dashboard | SmartHire AI";
    }, []);

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">

            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-10">

                    <div>

                        <h1 className="text-5xl font-bold">
                            SmartHire AI
                        </h1>

                        <p className="text-gray-500 mt-2 text-lg">
                            Resume Management Portal
                        </p>

                        {/* LIVE CLOCK */}
                        <p className="text-gray-600 mt-3 font-medium">
                            🕒 {currentTime}
                        </p>

                        <h2 className="text-2xl mt-6">

                            Welcome back,
                            <span className="font-semibold">
                                {" "}{user?.full_name}
                            </span>
                            👋

                        </h2>

                        <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">

                            {user?.role?.toUpperCase()}

                        </span>

                    </div>

                    <button
                        onClick={() => {
                            logout();
                            navigate("/login");
                        }}
                        className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg shadow-md"
                    >
                        Logout
                    </button>

                </div>

                {/* UPLOAD */}
                <ResumeUpload
                    onUploadSuccess={() =>
                        setRefreshKey((k) => k + 1)
                    }
                />

                {/* LIST */}
                <div className="mt-8" key={refreshKey}>
                    <ResumeList />
                </div>

                {/* FOOTER */}
                <footer className="mt-12 text-center text-gray-500 text-sm">
                    © 2026 SmartHire AI • Resume Management Portal
                </footer>

            </div>

        </div>

    );

}