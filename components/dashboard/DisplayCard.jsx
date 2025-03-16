import Link from "next/link";
import { FileText, Trash } from "lucide-react";

const DisplayCard = ({ id, name, time, description, status }) => {
  return (
    <Link href={`/dashboard/file/${id}`}>
      <div className="flex flex-col gap-4 bg-card p-4 rounded-md border relative">
        <div className="flex items-center gap-4">
          <FileText className="w-8 h-8 text-emerald-400" />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold line-clamp-1">{name}</h2>
            <span className="text-[0.8rem] text-[rgba(0,0,0,0.3)] font-bold">
              {time}
            </span>
          </div>
          <Trash className="w-4 h-4 text-muted-foreground absolute top-4 right-4 cursor-pointer hover:text-red-500" />
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <span
          className={`text-[0.7rem] font-semibold ${
            status === "Processing"
              ? "text-blue-400 bg-blue-50"
              : status === "Completed"
              ? "text-emerald-400 bg-emerald-50"
              : "text-red-400 bg-red-50"
          } px-2 py-1 rounded-full w-fit`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
};

export default DisplayCard;
