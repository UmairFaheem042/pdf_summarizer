import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API,
});



export const generateSummaryFromOpenAI = async (text) => {
  console.log("Text: ", text);
  try {
    const completion = openai.chat.completions.create({
      //   model: "gpt-o3-mini",
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: SUMMARY_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000, // 1500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log(error);
    if (error?.status === 429) {
      return {
        success: false,
        message: "Rate limit exceeded",
        error: error.message,
      };
    } else {
      return {
        success: false,
        message: "Failed to generate summary",
        error: error.message,
      };
    }
  }
};
