"use client";

import { itemVariant } from "@/utils/constants";
import { MotionDiv } from "../common/motion-wrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UploadFormInput = ({ limit, onSubmit, uploading }) => {
  console.log(limit);

  return (
    <>
      <form className=" flex items-center gap-2" onSubmit={onSubmit}>
        <MotionDiv whileTap={{ scale: 0.9 }}>
          <Input
            type="file"
            accept="application/pdf"
            name="file"
            id="file"
            className="cursor-pointer"
            disabled={limit}
          />
        </MotionDiv>
        <MotionDiv whileTap={{ scale: 0.9 }}>
          <Button
            type="submit"
            className="cursor-pointer"
            disabled={uploading || limit}
          >
            {uploading ? "Uploading" : "Get Insights"}
          </Button>
        </MotionDiv>
      </form>
    </>
  );
};

export default UploadFormInput;
