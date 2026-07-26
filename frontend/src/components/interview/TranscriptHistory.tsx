type Props = {
    transcripts: string[];
};

export default function TranscriptHistory({
    transcripts,
}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Transcript History
            </h2>

            <div className="space-y-5 max-h-96 overflow-y-auto">

                {

                    transcripts.map(

                        (
                            text,
                            index,
                        ) => (

                            <div
                                key={index}
                                className="border rounded-lg p-4"
                            >

                                <h3 className="font-semibold mb-2">

                                    Recording {index + 1}

                                </h3>

                                <p>

                                    {text}

                                </p>

                            </div>

                        )

                    )

                }

            </div>

        </div>

    );

}