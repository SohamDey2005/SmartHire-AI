import api from "../api/axios";

export interface InterviewQuestion {

    id: number;

    question: string;

    category: string;

    difficulty: string;
}

export interface InterviewSession {

    id: number;

    resume_id: number;

    user_id: number;

    status: string;

    started_at: string;

    completed_at: string | null;
}

export interface InterviewAnswer {

    session_id: number;

    question_id: number;

    candidate_answer: string;
}

export async function startInterview(
    resumeId: number,
    token: string,
): Promise<InterviewSession> {

    const response = await api.post(
        `/interview/start/${resumeId}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return response.data;
}

export async function generateQuestions(
    resumeId: number,
    token: string,
): Promise<InterviewQuestion[]> {

    const response = await api.get(
        `/interview/generate/${resumeId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return response.data;
}

export async function saveAnswer(
    answer: InterviewAnswer,
    token: string,
) {

    const response = await api.post(
        "/interview/answer",
        answer,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return response.data;
}

export async function finishInterview(
    sessionId: number,
    token: string,
): Promise<InterviewSession> {

    const response = await api.post(
        `/interview/finish/${sessionId}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return response.data;
}

export interface QuestionReport {

    question: string;

    candidate_answer: string;

    score: number;

    strengths: string[];

    weaknesses: string[];

    ideal_answer: string;

    feedback: string;
}

export interface InterviewReport {

    overall_score: number;

    questions: QuestionReport[];
}

export async function getInterviewReport(
    sessionId: number,
    token: string,
): Promise<InterviewReport> {

    const response = await api.get(
        `/interview/report/${sessionId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return response.data;
}