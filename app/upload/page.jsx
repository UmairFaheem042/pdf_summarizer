import UploadForm from "@/components/upload/UploadForm";
import { Sparkles } from "lucide-react";

const Upload = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col gap-4 items-center justify-center px-4 lg:px-0">
      <p className="text-sm text-emerald-400 font-normal border border-emerald-300 rounded-full px-4 py-1 w-fit flex items-center gap-2 pointer-events-none">
        <Sparkles className="w-4 h-4" />
        AI Powered Content Creation
      </p>
      <h1 className="text-4xl font-semibold text-center break-words">
        Start uploading{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">your PDF</span>
          <span className="absolute inset-0 bg-emerald-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
        </span>
      </h1>
      <p className="text-muted-foreground text-center break-words text-sm">
        Upload your pdf and let our AI do the magic!
      </p>

      <UploadForm />
    </div>
  );
};

export default Upload;
