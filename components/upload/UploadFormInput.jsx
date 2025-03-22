"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UploadFormInput = ({ onSubmit }) => {
  return (
    <form className=" flex items-center gap-2" onSubmit={onSubmit}>
      <Input
        type="file"
        accept="application/pdf"
        name="file"
        id="file"
        className="cursor-pointer"
      />
      <Button type="submit" className="cursor-pointer">
        Get Insights
      </Button>
    </form>
  );
};

export default UploadFormInput;
