import {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

import Webcam from "react-webcam";
import axios from "axios";

import MonitoringPanel from "./MonitoringPanel";

export type InterviewMonitorHandle = {

    startRecording: () => Promise<void>;

    stopRecording: () => Promise<void>;

    resetMonitoring: () => void;

    startAnalyzing: () => void;

};

type InterviewMonitorProps = {

    sessionId: number;

};

const InterviewMonitor = forwardRef<
    InterviewMonitorHandle,
    InterviewMonitorProps
>(
    (
        {
            sessionId,
        },
        ref
    ) => {

        const webcamRef =
            useRef<Webcam>(null);

        const mediaRecorderRef =
            useRef<MediaRecorder | null>(null);

        const streamRef =
            useRef<MediaStream | null>(null);

        const audioChunksRef =
            useRef<Blob[]>([]);

        const recordingRef =
            useRef(false);

        const token =
            localStorage.getItem("token");

        //-----------------------------------------
        // UI State
        //-----------------------------------------

        const [emotion, setEmotion] =
            useState("--");

        const [eyeContact, setEyeContact] =
            useState("--");

        const [transcript, setTranscript] =
            useState("Waiting...");

        const [fillerWords, setFillerWords] =
            useState(0);

        const [fluency, setFluency] =
            useState(0);

        const [overallScore, setOverallScore] =
            useState(0);

        const [recommendation, setRecommendation] =
            useState("--");

        //-----------------------------------------
        // Reset Monitoring UI
        //-----------------------------------------

        const resetMonitoring = () => {

            setTranscript("Waiting...");

            setEmotion("--");

            setEyeContact("--");

            setFillerWords(0);

            setFluency(0);

            setOverallScore(0);

            setRecommendation("--");

        };

        //-----------------------------------------
        // Show Analyzing State
        //-----------------------------------------

        const startAnalyzing = () => {

            setTranscript("Analyzing your answer...");

            setEmotion("Analyzing...");

            setEyeContact("Analyzing...");

            setFillerWords(0);
            
            setFluency(-1);
            
            setOverallScore(0);

            setRecommendation("Generating AI feedback...");

        };

        //-----------------------------------------
        // Capture Webcam Image
        //-----------------------------------------

        const captureImage = (): Blob | null => {

            const screenshot =
                webcamRef.current?.getScreenshot();

            if (!screenshot)
                return null;

            const arr =
                screenshot.split(",");

            const mime =
                arr[0].match(/:(.*?);/)?.[1]
                || "image/jpeg";

            const bstr =
                atob(arr[1]);

            const u8arr =
                new Uint8Array(bstr.length);

            for (
                let i = 0;
                i < bstr.length;
                i++
            ) {

                u8arr[i] =
                    bstr.charCodeAt(i);

            }

            return new Blob(
                [u8arr],
                {
                    type: mime,
                }
            );

        };

        //-----------------------------------------
        // Start Recording
        //-----------------------------------------

        const startRecording =
            async () => {

                if (
                    recordingRef.current
                ) {

                    return;

                }

                recordingRef.current = true;

                audioChunksRef.current = [];

                const stream =
                    await navigator.mediaDevices.getUserMedia({

                        audio: true,

                    });

                streamRef.current =
                    stream;

                let options = {};

                if (

                    MediaRecorder.isTypeSupported(

                        "audio/webm;codecs=opus"

                    )

                ) {

                    options = {

                        mimeType:

                            "audio/webm;codecs=opus",

                    };

                }

                const recorder =
                    new MediaRecorder(

                        stream,

                        options

                    );

                mediaRecorderRef.current =
                    recorder;

                recorder.ondataavailable = (
                    event
                ) => {

                    if (
                        event.data.size > 0
                    ) {

                        audioChunksRef.current.push(
                            event.data
                        );

                        console.log(
                            "Chunk:",
                            event.data.size
                        );

                    }

                };

                audioChunksRef.current = [];

                recorder.start(1000);

                console.log(
                    "Recording Started"
                );

            };

        //-----------------------------------------
        // Stop Recording
        //-----------------------------------------

        const stopRecording =
            async () => {

                return new Promise<void>(

                    (
                        resolve
                    ) => {

                        const recorder =
                            mediaRecorderRef.current;

                        if (

                            !recorder ||

                            recorder.state !==
                            "recording"

                        ) {

                            recordingRef.current = false;

                            resolve();

                            return;

                        }

                        recorder.onstop = async () => {

                            streamRef.current
                                ?.getTracks()
                                .forEach(track =>
                                    track.stop()
                                );

                            recordingRef.current =
                                false;

                            console.log(
                                "Recording Stopped"
                            );

                            console.log(
                                "Chunks:",
                                audioChunksRef.current.length
                            );

                            resolve();

                        };

                        recorder.stop();

                    }

                );

            };

        //-----------------------------------------
        // Analyze Recording
        //-----------------------------------------

        const analyze = async () => {

            const image = captureImage();

            if (!image) {

                console.log("Image not captured.");

                return;

            }

            const audioBlob = new Blob(

                audioChunksRef.current,

                {

                    type: "audio/webm",

                }

            );

            console.log(
                "Audio Blob Size:",
                audioBlob.size
            );

            console.log(
                "Chunks:",
                audioChunksRef.current.length
            );

            if (audioBlob.size < 1000) {

                console.log("Audio too small.");

                return;

            }

            const form = new FormData();

            form.append(

                "audio",

                audioBlob,

                "speech.webm"

            );

            form.append(

                "image",

                image,

                "frame.jpg"

            );

            form.append(

                "session_id",

                sessionId.toString()

            );

            try {

                const response =

                    await axios.post(

                        "http://127.0.0.1:8000/api/v1/interview-monitor/analyze",

                        form,

                        {

                            headers: {

                                Authorization:

                                    `Bearer ${token}`,

                            },

                        }

                    );

                const data =

                    response.data;

                setTranscript(

                    data.speech.text

                );

                setEmotion(

                    data.emotion.dominant_emotion

                );

                setEyeContact(

                    data.eye_contact.eye_contact

                        ? "Detected"

                        : "Looking Away"

                );

                setFillerWords(

                    data.filler_words.total_fillers

                );

                setFluency(

                    data.filler_words.fluency_score

                );

                setOverallScore(

                    data.score.overall_score

                );

                setRecommendation(

                    data.score.recommendation

                );

                console.log(

                    "Analysis Completed"

                );
                audioChunksRef.current = [];
            }

            catch (err) {

                console.error(err);

            }

        };

        //-----------------------------------------
        // Expose Functions
        //-----------------------------------------

        useImperativeHandle(

            ref,

            () => ({

                startRecording,

                stopRecording: async () => {

                    await stopRecording();

                    await analyze();

                },

                resetMonitoring,

                startAnalyzing,

            })

        );

        //-----------------------------------------

        return (

            <div className="space-y-6">

                <div className="bg-white rounded-xl shadow p-4">

                    <Webcam

                        ref={webcamRef}

                        audio={false}

                        mirrored

                        screenshotFormat="image/jpeg"

                        className="rounded-xl"

                        width="100%"

                    />

                </div>

                <MonitoringPanel

                    transcript={transcript}

                    emotion={emotion}

                    eyeContact={eyeContact}

                    fillerWords={fillerWords}

                    fluency={fluency}

                    overallScore={overallScore}

                    recommendation={recommendation}

                />

            </div>

        );

    }

);

export default InterviewMonitor;