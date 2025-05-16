import { FileText, Trash } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const UploadedFile = ({ data, onDelete }) => {
  return (
    <div className="border p-4 rounded-md text-sm  ">
      <div className="flex items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          <FileText />
          <Link href={data.url} target="_blank" className="line-clamp-1">
            {data.name}
          </Link>
        </div>

        <Trash
          onClick={() => onDelete(data.key)}
          className="w-4 h-4 cursor-pointer"
        />
      </div>

      <Button className="mt-4 w-full cursor-pointer">Do the AI Magic</Button>
    </div>
  );
};

export default UploadedFile;
