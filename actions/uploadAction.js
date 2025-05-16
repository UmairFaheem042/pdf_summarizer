"use server";

import { getData } from "@/lib/db";
import { generateSummaryFromDeepSeek } from "@/lib/deepseek";
import { generateSummaryFromGemini } from "@/lib/gemini";
import { fetchAndExtractText } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const getUserPdfCount = async (userId) => {
  try {
    const sql = await getData();
    const result = await sql`
      SELECT COUNT(*) AS count 
      FROM pdf_summaries 
      WHERE user_id = ${userId};
    `;
    return Number(result[0]?.count ?? 0);
  } catch (error) {
    console.error("Error fetching user PDF count", error);
    return 0;
  }
}

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

  console.log(userId)
  console.log(pdfUrl)
  console.log(fileName)
  
  if (!pdfUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractText(pdfUrl);
    console.log("PDF Text: ", pdfText);
    const summary = await generateSummaryFromGemini(pdfText);
    // const summary = await generateSummaryFromDeepSeek(pdfText);
    console.log("Summary from generatePdfSummary: ", summary);
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

async function savePdfSummary({ userId, fileUrl, summary, title, fileName }) {
  try {
    console.log("Summary from savePdfSummary", summary)
    const sql = await getData();
    const response = await sql`INSERT INTO pdf_summaries (
      user_id, 
      original_file_url, 
      summary_text, 
      title, 
      file_name
    ) VALUES (
     ${userId},
     ${fileUrl},
     ${summary},
     ${title},
     ${fileName}
    ) RETURNING id;`;
    return {
      success: true,
      message: "Saved PDF successfully",
      data: response[0]?.id
    }
  } catch (error) {
    return {
      success: false,
      message: "Error saving PDF Summary"

    }
  }
}

// export const storePdfSummaryAction = async ({ fileUrl, summary, title, fileName }) => {
//   let savedSummary;
//   try {
//     const { userId } = await auth();
//     if (!userId) return {
//       success: false,
//       message: 'User not found'
//     }

//     savedSummary = await savePdfSummary({
//       userId, fileUrl, summary, title, fileName
//     });

//     if (!savedSummary) {
//       return {
//         success: false,
//         message: "Failed to save PDF summary"
//       }
//     }

//     // revalidate cache => tell browser that there's something new in the cache because something new is added
//     revalidatePath(`/dashboard/file/${savedSummary.data}`);

//   } catch (error) {
//     return {
//       success: false,
//       message: error instanceof Error ? error.message : 'Error saving PDF summary'
//     }
//   }
//   return {
//     success: true,
//     message: "PDF Summary saved successfully",
//     id: savedSummary.data
//   }
// }


export const storePdfSummaryAction = async ({ fileUrl, summary, title, fileName }) => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }

    // Check how many PDFs the user has uploaded
    const pdfCount = await getUserPdfCount(userId);
    console.log("PDF Count = ", pdfCount);
    if (pdfCount >= 5) {
      return {
        success: false,
        message: "Upload limit reached. You can only upload up to 5 PDFs.",
      };
    }

    const savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary.success) {
      return {
        success: false,
        message: "Failed to save PDF summary",
      };
    }

    revalidatePath(`/dashboard/file/${savedSummary.data}`);

    return {
      success: true,
      message: "PDF Summary saved successfully",
      id: savedSummary.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error saving PDF summary",
    };
  }
};


// export const saveUser = async (user) => {
//   try {
//     // const { userId, user } = auth();
//     console.log("User:", user)
//     if (!user)
//       throw new Error("User not authenticated");

//     const sql = await getData();

//     const existingUser = await sql`
//     SELECT id FROM users WHERE user_id = ${user.id};
//   `;

//     if (existingUser.length > 0)
//       return;
//     // ${user.emailAddresses[0]?.emailAddress},

//     const response = await sql`
//     INSERT INTO users (user_id, email, first_name, last_name)
//     VALUES (
//       ${user.id},
//       ${user.emailAddresses[0]?.emailAddress},
//       ${user.firstName},
//       ${user.lastName}
//     )`;

//     return {
//       success: true,
//       message: "Created User successfully",
//       data: response[0]?.id
//     }
//   } catch (error) {
//     console.error("Error creating user ", error);
//     return {
//       success: false,
//       message: "Error creating user"
//     }
//   }
// }