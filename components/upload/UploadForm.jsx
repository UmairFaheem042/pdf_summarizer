"use client";

import { useState } from "react";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./UploadFormInput";
import UploadedFile from "./UploadedFile";
import { toast } from "react-hot-toast";
import { generatePdfSummary } from "@/actions/uploadAction";

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

const UploadForm = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [uploadedFile, setUploadedFile] = useState({
    name: "",
    url: "",
  });

  // `pdfUploader` => name matches with the name in the core.js file
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

  async function handleDeleteUploadedFile(url) {
    try {
      console.log(url);

      // await fetch(`/api/uploadthing?key=${encodeURIComponent(url)}`, {
      //   method: "DELETE",
      // });
      setIsUploaded(false);
      setUploadedFile({
        name: "",
        url: "",
        key: "",
      });
      console.log("deleted");
      toast.success("File deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete file");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file");

    // ! validating the fields
    const validFile = schema.safeParse({ file });
    if (!validFile.success) {
      console.log(
        validFile.error.flatten().fieldErrors?.file?.[0] ?? "Invalid File"
      );
      toast.error("Invalid File");
      return;
    }

    // ! upload file to uploadThing
    setUploading(true);
    const resp = await startUpload([file]);
    setUploading(false);

    if (!resp) {
      toast.error("Failed to upload file");
      return;
    }

    setUploadedFile({
      name: resp[0].name,
      url: resp[0].ufsUrl,
      key: resp[0].key,
    });

    setIsUploaded(true);
    toast.success("File uploaded successfully");

    console.log(resp[0]);
    // ! parse the PDF using LangChain
    const summary = await generatePdfSummary(resp);

    console.log("Summary: ", summary.data);

    // ! save the summary to tht DB
    // ! redirect to summary page `dashboard/file/[id]`
  }

  async function handleAiMagic() {
    console.log("AI Magic");
  }

  return (
    <div className="max-w-[450px] w-full flex flex-col gap-4 mt-6">
      {!isUploaded && <UploadFormInput onSubmit={handleSubmit} />}

      {uploading && (
        <div className="mt-2 text-sm">
          <p className="text-emerald-500 font-thin text-center">
            Hold tight we are uploading your file...
          </p>
        </div>
      )}

      {isUploaded && (
        <UploadedFile
          data={uploadedFile}
          onDelete={handleDeleteUploadedFile}
          handleAiMagic={handleAiMagic}
        />
      )}
    </div>
  );
};

export default UploadForm;
