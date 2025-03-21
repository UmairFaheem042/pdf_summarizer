"use server";

import { fetchAndExtractText } from "@/lib/langchain";

export const generatePdfSummary = async (resp) => {
  console.log("resp from uploadAction: ", resp[0]);

  if (!resp) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

//   const {
//     serverData: {
//       userId,
//       file: { url: pdfUrl, name: fileName },
//     },
//   } = resp[0];

  const userId = resp[0].serverData.userId;
  const pdfUrl = resp[0].serverData.file;
  const fileName = resp[0].name;

  console.log("pdfUrl: ", pdfUrl);
  console.log("fileName: ", fileName);
  if (!pdfUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    console.log("pdfUrl just before fetchAndExtractText(): ", pdfUrl);
    const pdfText = await fetchAndExtractText(pdfUrl);
    console.log("PDF Text: ", pdfText);

    return {
      success: true,
      message: "Summary generated successfully",
      data: pdfText,
    };
  } catch (error) {
    return {
      success: false,
      message: "File upload failed",
      error: error.message,
    };
  }
};
