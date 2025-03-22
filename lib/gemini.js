// const { GoogleGenerativeAI } = require("@google/generative-ai");
import {
  SUMMARY_SYSTEM_PROMPT,
  SUMMARY_SYSTEM_PROMPT_2,
} from "@/utils/prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  //   model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const generateSummaryFromGemini = async (text) => {
  const prompt = SUMMARY_SYSTEM_PROMPT + "\n\n" + text;
  const result = await model.generateContent(prompt, generationConfig);
  return result.response.text();
};
