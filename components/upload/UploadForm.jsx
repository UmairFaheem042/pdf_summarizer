"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./UploadFormInput";
import UploadedFile from "./UploadedFile";
import { toast } from "react-hot-toast";
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "@/actions/uploadAction";
import { MotionDiv } from "../common/motion-wrapper";

// ! schema validation using ZOD
const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 24MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "file must be a pdf"
    ),
});

const UploadForm = ({ limit }) => {
  const router = useRouter();

  const [isUploaded, setIsUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (data) => {
      console.log("Uploaded successfully", data);
    },
    onUploadError: (error) => {
      console.log(`Error while uploading! ${error.message}`);
    },
    onUploadBegin: () => {
      console.log("Uploading...");
    },
    onUploadComplete: () => {
      console.log("Uploaded successfully");
    },
  });

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const file = formData.get("file");

  //   // ! validating the fields
  //   const validFile = schema.safeParse({ file });
  //   if (!validFile.success) {
  //     console.log(
  //       validFile.error.flatten().fieldErrors?.file?.[0] ?? "Invalid File"
  //     );
  //     toast.error("Invalid File");
  //     return;
  //   }

  //   // ! upload file to uploadThing
  //   setUploading(true);
  //   const resp = await startUpload([file]);

  //   if (!resp) {
  //     toast.error("Failed to upload file");
  //     setUploading(false);
  //     return;
  //   }

  //   // ! parse the PDF using LangChain
  //   const summary = await generatePdfSummary(resp);

  //   if (!summary.success) {
  //     toast.error("Failed to generate summary");
  //     setUploading(false);
  //     return;
  //   }

  //   const { data = null } = summary || {};
  //   let result;

  //   // ! save the summary to tht DB
  //   if (data) {
  //     if (data.summary) {
  //       result = await storePdfSummaryAction({
  //         fileUrl: data.pdfUrl,
  //         summary: data.summary,
  //         title: data.fileName,
  //         fileName: data.fileName,
  //       });
  //     }
  //   }
  //   // ! redirect to summary page `dashboard/file/[id]`

  //   setIsUploaded(true);
  //   setUploading(false);
  //   toast.success("Summary generated successfully");

  //   router.push(`/dashboard/file/${result.id}`);
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file");

    // Validate the file
    const validFile = schema.safeParse({ file });
    if (!validFile.success) {
      toast.error(
        validFile.error.flatten().fieldErrors?.file?.[0] ?? "Invalid File"
      );
      return;
    }

    setUploading(true);
    const resp = await startUpload([file]);
    console.log("response from uploadthing", resp);
    if (!resp) {
      toast.error("Failed to upload file");
      setUploading(false);
      return;
    }

    const summary = await generatePdfSummary(resp);
    console.log("Summary from uploadForm", summary);

    if (!summary.success) {
      toast.error(summary.message || "Failed to generate summary");
      setUploading(false);
      return;
    }

    const { data = null } = summary || {};
    let result;

    if (data) {
      if (data.summary) {
        result = await storePdfSummaryAction({
          fileUrl: data.pdfUrl,
          summary: data.summary,
          title: data.fileName,
          fileName: data.fileName,
        });

        if (!result.success) {
          toast.error(result.message || "Failed to save summary");
          setUploading(false);
          return;
        }
      }
    }

    setIsUploaded(true);
    setUploading(false);
    toast.success("Summary generated successfully");

    router.push(`/dashboard/file/${result.id}`);
  }

  return (
    <MotionDiv className="max-w-[450px] w-full flex flex-col gap-4 mt-6">
      {limit && (
        <div className="mt-4 mb-4 rounded-md p-2 border border-red-300 bg-red-100">
          <p className="text-sm text-red-500 text-center">
            You have reached your upload limit! Get premium for more uploads
          </p>
        </div>
      )}
      {!isUploaded && (
        <UploadFormInput
          limit={limit}
          onSubmit={handleSubmit}
          uploading={uploading}
        />
      )}

      {uploading && (
        <div className="mt-2 text-sm">
          <p className="text-emerald-500 font-thin text-center">
            Hold tight we are summarizing your file...
          </p>
        </div>
      )}

      {isUploaded && (
        <p className="text-center">Redirecting to the summary page</p>
      )}
    </MotionDiv>
  );
};

export default UploadForm;
