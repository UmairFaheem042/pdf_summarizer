import { getData } from "./db"

export const getSummaries = async (userId) => {
    const sql = await getData();
    const summaries = await sql`
        SELECT * FROM pdf_summaries 
        WHERE user_id = ${userId} 
        ORDER BY created_at DESC;
    `;
    return summaries;
}

export const getSummary = async (summaryId) => {
    const sql = await getData();
    const summary = await sql`
        SELECT * FROM pdf_summaries
        WHERE id = ${summaryId};
    `;
    return summary;
}