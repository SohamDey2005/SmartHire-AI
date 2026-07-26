import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import {

    LineChart,

    Line,

    XAxis,

    YAxis,

    CartesianGrid,

    Tooltip,

    ResponsiveContainer,

    Legend,

    BarChart,

    Bar,

} from "recharts";

interface Snapshot {

    id: number;

    second: number;

    emotion: string;

    eye_contact_score: number;

    fluency_score: number;

    filler_count: number;

    overall_score: number;

}

export default function ProgressDashboard() {

    const { sessionId } = useParams();

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [history, setHistory] = useState<Snapshot[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        try {

            const response = await axios.get(

                `http://127.0.0.1:8000/api/v1/monitor-history/${sessionId}`,

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`,

                    },

                }

            );

            setHistory(response.data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    //-----------------------------------

    if (loading) {

        return (

            <div className="p-8">

                Loading Progress Dashboard...

            </div>

        );

    }

    //-----------------------------------

    const averageScore =

        history.length > 0

            ?

            (

                history.reduce(

                    (sum, item) =>

                        sum + item.overall_score,

                    0

                ) / history.length

            ).toFixed(1)

            : "0";

    const averageEye =

        history.length > 0

            ?

            (

                history.reduce(

                    (sum, item) =>

                        sum +

                        item.eye_contact_score,

                    0

                ) / history.length

            ).toFixed(1)

            : "0";

    const averageFluency =

        history.length > 0

            ?

            (

                history.reduce(

                    (sum, item) =>

                        sum +

                        item.fluency_score,

                    0

                ) / history.length

            ).toFixed(1)

            : "0";

    const totalFillers =

        history.reduce(

            (sum, item) =>

                sum + item.filler_count,

            0

        );
        //-----------------------------------

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Interview Progress Dashboard

                </h1>

                <button

                    onClick={() => navigate(-1)}

                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"

                >

                    Back

                </button>

            </div>

            {/* Summary Cards */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Average Score

                    </p>

                    <h2 className="text-4xl font-bold text-blue-600">

                        {averageScore}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Average Eye Contact

                    </p>

                    <h2 className="text-4xl font-bold text-green-600">

                        {averageEye}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Average Fluency

                    </p>

                    <h2 className="text-4xl font-bold text-purple-600">

                        {averageFluency}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Total Fillers

                    </p>

                    <h2 className="text-4xl font-bold text-red-600">

                        {totalFillers}

                    </h2>

                </div>

            </div>

            {/* Overall Score */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Overall Score Trend

                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <LineChart data={history}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="second" />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Legend />

                        <Line

                            type="monotone"

                            dataKey="overall_score"

                            name="Overall Score"

                            stroke="#2563eb"

                            strokeWidth={3}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

            {/* Eye Contact */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Eye Contact Trend

                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <LineChart data={history}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="second" />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Legend />

                        <Line

                            type="monotone"

                            dataKey="eye_contact_score"

                            name="Eye Contact"

                            stroke="#16a34a"

                            strokeWidth={3}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

            {/* Fluency */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Fluency Trend

                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <LineChart data={history}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="second" />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Legend />

                        <Line

                            type="monotone"

                            dataKey="fluency_score"

                            name="Fluency"

                            stroke="#9333ea"

                            strokeWidth={3}

                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>
                        {/* Filler Words */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Filler Words Trend

                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >

                    <BarChart data={history}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="second" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar

                            dataKey="filler_count"

                            name="Filler Words"

                            fill="#ef4444"

                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            {/* Emotion Timeline */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Emotion Timeline

                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-100">

                                <th className="border p-3">

                                    Time (sec)

                                </th>

                                <th className="border p-3">

                                    Emotion

                                </th>

                                <th className="border p-3">

                                    Score

                                </th>

                                <th className="border p-3">

                                    Eye Contact

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {history.map((item) => (

                                <tr
                                    key={item.id}
                                    className="text-center"
                                >

                                    <td className="border p-3">

                                        {item.second}

                                    </td>

                                    <td className="border p-3 capitalize">

                                        {item.emotion}

                                    </td>

                                    <td className="border p-3">

                                        {item.overall_score}

                                    </td>

                                    <td className="border p-3">

                                        {item.eye_contact_score}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Interview Statistics */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-6">

                    Interview Statistics

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <div>

                        <p className="text-gray-500">

                            Snapshots

                        </p>

                        <h2 className="text-3xl font-bold">

                            {history.length}

                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-500">

                            Highest Score

                        </p>

                        <h2 className="text-3xl font-bold text-green-600">

                            {

                                history.length

                                    ? Math.max(

                                        ...history.map(

                                            item =>

                                                item.overall_score

                                        )

                                    )

                                    : 0

                            }

                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-500">

                            Lowest Score

                        </p>

                        <h2 className="text-3xl font-bold text-red-600">

                            {

                                history.length

                                    ? Math.min(

                                        ...history.map(

                                            item =>

                                                item.overall_score

                                        )

                                    )

                                    : 0

                            }

                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-500">

                            Interview Duration

                        </p>

                        <h2 className="text-3xl font-bold">

                            {

                                history.length

                                    ? history[history.length - 1].second

                                    : 0

                            } sec

                        </h2>

                    </div>

                </div>

            </div>

        </div>

    );

}