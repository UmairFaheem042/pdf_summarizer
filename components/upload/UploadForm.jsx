"use client";

import { Button } from "../ui/button";
import { FileText, Trash } from "lucide-react";
import UploadFormInput from "./UploadFormInput";
import { z } from "zod";

// schema validation using ZOD
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
  const isUploaded = false;

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file");

    // validating the fields
    const validFile = schema.safeParse({ file });
    if (!validFile.success) {
      console.log(
        validFile.error.flatten().fieldErrors?.file?.[0] ?? "Invalid File"
      );
      return;
    }

    // upload file to uploadThing
    
    // parse the PDF using LangChain
    // save the summary to tht DB
    // redirect to summary page `dashboard/file/[id]`
  }

  return (
    <div className="max-w-[450px] w-full flex flex-col gap-4 mt-6">
      {!isUploaded && <UploadFormInput onSubmit={handleSubmit} />}

      {isUploaded && (
        <div className="border p-4 rounded-md text-sm  ">
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex items-center gap-2">
              <FileText />
              <span className="line-clamp-1">
                Next.js Documentation for Beginners
              </span>
            </div>

            <Trash className="w-4 h-4 cursor-pointer" />
          </div>

          <Button className="mt-4 w-full cursor-pointer">
            Do the AI Magic
          </Button>
          {/* After i click on it the animation will happen like typewrite effect from top to down text coming and completing the animation*/}
        </div>
      )}
    </div>
  );
};

export default UploadForm;
