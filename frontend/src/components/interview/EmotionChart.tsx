import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Legend,
} from "recharts";

type Props = {
    emotion: string;
};

export default function EmotionChart({
    emotion,
}: Props) {

    const data = [
        {
            name: emotion,
            value: 100,
        },
    ];

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Dominant Emotion
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        label
                    />

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}