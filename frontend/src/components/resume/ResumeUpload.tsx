import { useState } from "react";

import { uploadResume } from "../../services/resumeService";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

interface ResumeUploadProps {
    onUploadSuccess: () => void;
}

export default function ResumeUpload({
    onUploadSuccess,
}: ResumeUploadProps) {

    const { token } = useAuth();

    const [file, setFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    async function handleUpload() {

        if (!file || !token) {
            toast.error("Please select a PDF file.");
            return;
        }

        try {

            setLoading(true);

            await uploadResume(
                file,
                token
            );

            toast.success("Resume uploaded successfully!");

            setFile(null);

            onUploadSuccess();

        }

        catch (error) {

            console.error(error);

            toast.error("Upload failed.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="bg-white shadow-lg rounded-2xl p-8">

            <h2 className="text-2xl font-semibold mb-2">
                Upload Resume
            </h2>

            <p className="text-gray-500 mb-6">
                Upload your latest resume in PDF format.
            </p>

            <input
                type="file"
                accept=".pdf"
                className="block w-full text-sm text-gray-700
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-lg file:border-0
                           file:bg-blue-100 file:text-blue-700
                           hover:file:bg-blue-200"
                onChange={(e) => {
                    const selected = e.target.files?.[0];
                    if (!selected) return;
                    if (selected.type !== "application/pdf") {
                        toast.error("Only PDF files are allowed.");
                        return;
                    }
                    if (selected.size > 5 * 1024 * 1024) {
                        toast.error("Maximum file size is 5 MB.");
                        return;
                    }
                    setFile(selected);
                }}
            />

            <p className="text-sm text-gray-400 mt-2">
                Only PDF files are allowed.
            </p>

            {
                file && (

                    <p className="mt-3 text-green-600 font-medium">

                        Selected:
                        {" "}
                        {file.name}

                    </p>

                )
            }

            <button
                onClick={handleUpload}
                disabled={loading || !file}
                className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition text-white px-6 py-3 rounded-lg"
            >

                {
                    loading
                        ? "Uploading..."
                        : "Upload Resume"
                }

            </button>

        </div>

    );

}