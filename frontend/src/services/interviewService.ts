import api from "../api/axios";

export interface InterviewQuestionReport {
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
    questions: InterviewQuestionReport[];
}

export async function generateQuestions(
    resumeId: number,
    token?: string,
) {
    const response = await api.get(
        `/interview/generate/${resumeId}`,
        {
            headers: token
                ? {
                      Authorization: `Bearer ${token}`,
                  }
                : {},
        }
    );

    return response.data;
}

export async function startInterview(
    resumeId: number,
    token?: string,
) {
    const response = await api.post(
        `/interview/start/${resumeId}`,
        {},
        {
            headers: token
                ? {
                      Authorization: `Bearer ${token}`,
                  }
                : {},
        }
    );

    return response.data;
}

export async function finishInterview(
    sessionId: number,
    token?: string,
) {
    const response = await api.post(
        `/interview/finish/${sessionId}`,
        {},
        {
            headers: token
                ? {
                      Authorization: `Bearer ${token}`,
                  }
                : {},
        }
    );

    return response.data;
}

export async function getInterviewReport(
    sessionId: number,
    token?: string,
): Promise<InterviewReport> {

    const response = await api.get(
        `/interview/report/${sessionId}`,
        {
            headers: token
                ? {
                      Authorization: `Bearer ${token}`,
                  }
                : {},
        }
    );

    return response.data;
}