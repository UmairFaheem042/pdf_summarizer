"use client";

import React from "react";
import { Copy } from "lucide-react";

import { stripHtmlTags } from "@/utils/formatText";
import { MotionDiv } from "../common/motion-wrapper";

const SummaryActions = ({ text }) => {
  const handleCopy = () => {
    const plainText = stripHtmlTags(text);
    navigator.clipboard.writeText(plainText).then(() => {
      alert("Summary copied to clipboard!");
    });
  };

  return (
    <div className="flex justify-end mb-2">
      <MotionDiv whileTap={{ scale: 0.9 }}>
        <Copy
          className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-primary"
          onClick={handleCopy}
          title="Copy summary"
        />
      </MotionDiv>
    </div>
  );
};

export default SummaryActions;
