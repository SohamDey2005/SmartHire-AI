type Props = {
    overallScore: number;
    recommendation: string;
    eyeContact: number;
    fluency: number;
    fillers: number;
    emotion: string;
};

export default function AnalyticsCards({
    overallScore,
    recommendation,
    eyeContact,
    fluency,
    fillers,
    emotion,
}: Props) {

    const cards = [

        {
            title: "Overall Score",
            value: overallScore.toFixed(1),
        },

        {
            title: "Eye Contact",
            value: eyeContact.toFixed(1) + "%",
        },

        {
            title: "Fluency",
            value: fluency.toFixed(1),
        },

        {
            title: "Fillers",
            value: fillers,
        },

        {
            title: "Emotion",
            value: emotion,
        },

        {
            title: "Recommendation",
            value: recommendation,
        },

    ];

    return (

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="bg-white rounded-xl shadow p-6"
                >

                    <p className="text-gray-500">
                        {card.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {card.value}
                    </h2>

                </div>

            ))}

        </div>

    );

}