"use server";

import { fetchAndExtractText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openAi";

export const generatePdfSummary = async (resp) => {
  if (!resp) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  const userId = resp[0].serverData.userId;
  const pdfUrl = resp[0].serverData.file;
  const fileName = resp[0].name;

  if (!pdfUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  let summary;
  try {
    const pdfText = await fetchAndExtractText(pdfUrl);
    try {
      summary = await generateSummaryFromOpenAI(pdfText);
      console.log("Summary: ", summary);
    } catch (error) {
      console.log("Error: ", error.message);
      // call gemini api
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }

    return {
      success: true,
      message: "Summary generated successfully",
      data: summary,
    };
  } catch (error) {
    return {
      success: false,
      message: "File upload failed",
      error: error.message,
    };
  }
};
