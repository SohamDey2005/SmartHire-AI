import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

type Props = {
    data: any[];
};

export default function ScoreChart({
    data,
}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Overall Score Timeline
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart
                    data={data}
                >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="time"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="score"
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}