import Link from "next/link";
import { FileText, Trash } from "lucide-react";
import {
  formatRelativeTime,
  removeFileExtension,
  removeTripleBackticks,
  stripHtmlTags,
} from "@/utils/formatText";
import { MotionDiv } from "../common/motion-wrapper";

const DisplayCard = ({ data }) => {
  return (
    <MotionDiv whileTap={{ scale: 0.95 }}>
      <Link href={`/dashboard/file/${data.id}`}>
        <div className="flex flex-col gap-4 bg-card p-4 rounded-md border relative">
          <div className="flex items-center gap-4">
            <FileText className="w-8 h-8 text-emerald-400" />
            <div className="flex flex-col mr-2">
              <h2 className="text-lg font-bold line-clamp-1">
                {removeFileExtension(data.file_name)}
              </h2>
              <span className="text-[0.8rem] text-[rgba(0,0,0,0.3)] font-bold">
                {formatRelativeTime(data.created_at)}
              </span>
            </div>
            <Trash className="w-4 h-4 text-muted-foreground absolute top-4 right-4 cursor-pointer hover:text-red-500" />
          </div>
          <p className="line-clamp-2 text-[0.75rem] text-muted-foreground">
            {stripHtmlTags(removeTripleBackticks(data.summary_text))}
          </p>
          <span
            className={`text-[0.7rem] font-semibold capitalize ${
              data.status === "processing"
                ? "text-blue-400 bg-blue-50"
                : data.status === "completed"
                ? "text-emerald-400 bg-emerald-50"
                : "text-red-400 bg-red-50"
            } px-2 py-1 rounded-full w-fit`}
          >
            {data.status}
          </span>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default DisplayCard;
