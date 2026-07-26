import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

type Props = {
    data: any[];
};

export default function EyeContactChart({
    data,
}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Eye Contact
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <AreaChart
                    data={data}
                >

                    <XAxis dataKey="time" />

                    <YAxis />

                    <Tooltip />

                    <Area
                        dataKey="eye_contact"
                        type="monotone"
                    />

                </AreaChart>

            </ResponsiveContainer>

        </div>

    );

}