import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

type Props = {
    data: any[];
};

export default function FillerChart({
    data,
}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Filler Words
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart
                    data={data}
                >

                    <XAxis dataKey="time" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="fillers"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}