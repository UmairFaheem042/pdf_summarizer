import { getUserPdfCount } from "@/actions/uploadAction";
import { MotionSection } from "@/components/common/motion-wrapper";
import UploadForm from "@/components/upload/UploadForm";
import { containerVariants } from "@/utils/constants";
import { auth } from "@clerk/nextjs/server";
import { Sparkles } from "lucide-react";

const Upload = async () => {
  const { userId } = await auth();
  const count = await getUserPdfCount(userId);

  const limit = count >= process.env.MAX_UPLOADS;

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-[calc(100vh-60px)] flex flex-col gap-4 items-center justify-center px-4 lg:px-0"
    >
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

      <UploadForm limit={limit} />
    </MotionSection>
  );
};

export default Upload;
