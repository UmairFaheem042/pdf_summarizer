"use server";

import { generateSummaryFromGemini } from "@/lib/gemini";
import { fetchAndExtractText } from "@/lib/langchain";

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

  try {
    const pdfText = await fetchAndExtractText(pdfUrl);
    const summary = await generateSummaryFromGemini(pdfText);
    if (!summary) {
      // ! TODO: delete the file from the uploadThing in case of error
      return {
        success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        summary,
        userId,
        fileName,
        pdfUrl,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "File upload failed",
      error: error.message,
    };
  }
};
