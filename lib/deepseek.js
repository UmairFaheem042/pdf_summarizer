import OpenAI from "openai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API,
});

export const generateSummaryFromDeepSeek = async (text) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SUMMARY_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: `Please summarize the following text: ${text}`,
      },
    ],
    model: "deepseek-chat",
  });

  console.log("Completion: ", completion);
  // Return the generated summary
  return completion.choices[0].message.content;
};
