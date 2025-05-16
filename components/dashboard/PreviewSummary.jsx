import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  formatRelativeTime,
  removeFileExtension,
  removeTripleBackticks,
} from "@/utils/formatText";
import SummaryActions from "./SummaryActions";
import { redirect } from "next/navigation";
import { MotionDiv, MotionSection } from "../common/motion-wrapper";
import { containerVariants } from "@/utils/constants";

const PreviewSummary = ({ summary }) => {
  if (!summary || !summary.summary_text) redirect("/dashboard");
  const cleanText = removeTripleBackticks(summary.summary_text);

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-60px)] max-w-[800px] mx-auto p-6 my-8"
    >
      <header className="flex justify-between items-center mb-10">
        <MotionDiv whileTap={{ scale: 0.9 }}>
          <Link href="/dashboard">
            <Button className="cursor-pointer">Back</Button>
          </Link>
        </MotionDiv>
        <MotionDiv whileTap={{ scale: 0.9 }}>
          <Button variant="destructive" className="cursor-pointer">
            Delete
          </Button>
        </MotionDiv>
      </header>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-center">
          {removeFileExtension(summary.file_name)}
        </h1>
        <p className="text-sm font-bold text-muted-foreground">
          {formatRelativeTime(summary.created_at)}
        </p>

        <div className="w-full mt-8">
          <SummaryActions text={summary.summary_text} />
          <main className="text-md font-normal text-justify text-muted-foreground flex flex-col gap-2">
            <div
              dangerouslySetInnerHTML={{
                __html: cleanText,
              }}
            />
          </main>
        </div>
      </div>
    </MotionSection>
  );
};

export default PreviewSummary;
