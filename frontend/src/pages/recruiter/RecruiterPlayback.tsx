import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Snapshot {

    id: number;

    second: number;

    emotion: string;

    eye_contact_score: number;

    fluency_score: number;

    filler_count: number;

    overall_score: number;

}

export default function RecruiterPlayback() {

    const { sessionId } = useParams();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [history, setHistory] = useState<Snapshot[]>([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [playing, setPlaying] = useState(false);

    const timer = useRef<number>();

    useEffect(() => {

        loadPlayback();

        return () => {

            if (timer.current) {

                clearInterval(timer.current);

            }

        };

    }, []);

    //------------------------------------------------

    const loadPlayback = async () => {

        try {

            const response = await axios.get(

                `http://127.0.0.1:8000/api/v1/recruiter-playback/${sessionId}`,

                {

                    headers: {

                        Authorization: `Bearer ${token}`,

                    },

                }

            );

            setHistory(response.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    //------------------------------------------------

    const play = () => {

        if (playing) return;

        setPlaying(true);

        timer.current = window.setInterval(() => {

            setCurrentIndex((prev) => {

                if (prev >= history.length - 1) {

                    clearInterval(timer.current);

                    setPlaying(false);

                    return prev;

                }

                return prev + 1;

            });

        }, 1000);

    };

    //------------------------------------------------

    const pause = () => {

        if (timer.current) {

            clearInterval(timer.current);

        }

        setPlaying(false);

    };

    //------------------------------------------------

    const previous = () => {

        if (currentIndex > 0) {

            setCurrentIndex(currentIndex - 1);

        }

    };

    //------------------------------------------------

    const next = () => {

        if (currentIndex < history.length - 1) {

            setCurrentIndex(currentIndex + 1);

        }

    };

    //------------------------------------------------

    if (history.length === 0) {

        return (

            <div className="p-8">

                Loading playback...

            </div>

        );

    }

    const frame = history[currentIndex];

    //------------------------------------------------

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="flex justify-between mb-8">

                <h1 className="text-4xl font-bold">

                    Recruiter Playback

                </h1>

                <button

                    onClick={() => navigate(-1)}

                    className="bg-blue-600 text-white px-5 py-3 rounded-lg"

                >

                    Back

                </button>

            </div>

            {/* Timeline */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <div className="flex justify-between mb-4">

                    <span>

                        Time

                    </span>

                    <span>

                        {frame.second} sec

                    </span>

                </div>

                <input

                    type="range"

                    min={0}

                    max={history.length - 1}

                    value={currentIndex}

                    onChange={(e) =>

                        setCurrentIndex(

                            Number(e.target.value)

                        )

                    }

                    className="w-full"

                />

            </div>

            {/* Controls */}

            <div className="flex gap-4 mb-8">

                <button

                    onClick={previous}

                    className="bg-gray-600 text-white px-5 py-3 rounded"

                >

                    Previous

                </button>

                <button

                    onClick={play}

                    className="bg-green-600 text-white px-5 py-3 rounded"

                >

                    Play

                </button>

                <button

                    onClick={pause}

                    className="bg-yellow-500 text-white px-5 py-3 rounded"

                >

                    Pause

                </button>

                <button

                    onClick={next}

                    className="bg-blue-600 text-white px-5 py-3 rounded"

                >

                    Next

                </button>

            </div>

            {/* Current Snapshot */}

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Emotion</p>

                    <h2 className="text-3xl font-bold">

                        {frame.emotion}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Eye Contact</p>

                    <h2 className="text-3xl font-bold">

                        {frame.eye_contact_score}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Fluency</p>

                    <h2 className="text-3xl font-bold">

                        {frame.fluency_score}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Filler Words</p>

                    <h2 className="text-3xl font-bold">

                        {frame.filler_count}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p>Overall Score</p>

                    <h2 className="text-3xl font-bold text-blue-600">

                        {frame.overall_score}

                    </h2>

                </div>

            </div>

        </div>

    );

}