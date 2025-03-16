import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Trash } from "lucide-react";

const Upload = () => {
  const isUploaded = !false;

  return (
    <div className="h-[calc(100vh-60px)] flex flex-col gap-4 items-center justify-center">
      <p className="text-sm text-emerald-400 font-normal border border-emerald-300 rounded-full px-4 py-1 w-fit flex items-center gap-2 pointer-events-none">
        <Sparkles className="w-4 h-4" />
        Powered by AI
      </p>
      <h1 className="text-4xl font-semibold text-center break-words">
        Start uploading your PDFs
      </h1>
      <p className="text-muted-foreground text-center break-words text-sm">
        Upload your pdf and let our AI do the magic!
      </p>

      <div className="max-w-[450px] w-full flex flex-col gap-4 mt-6">
        {!isUploaded && (
          <form className=" flex items-center gap-2">
            <input
              type="file"
              accept=".pdf"
              id="pdf-upload"
              className="cursor-pointer flex-1 border  py-2 px-4 rounded-md text-sm "
            />
            <Button type="submit" className="cursor-pointer">
              Upload
            </Button>
          </form>
        )}

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
    </div>
  );
};

export default Upload;
