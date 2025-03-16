import Link from "next/link";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center h-[calc(100vh-80px)]">
      <p className="text-sm text-emerald-400 font-normal border border-emerald-300 rounded-full px-4 py-1 w-fit flex items-center gap-2 pointer-events-none">
        <Sparkles className="w-4 h-4" />
        Powered by AI
      </p>

      <h1 className="text-4xl font-semibold text-center break-words">
        <span className="text-emerald-400">Summarize</span> your PDF files with
        ease
      </h1>

      <p className="text-muted-foreground text-center break-words">
        Upload your PDF files and get a summary in seconds
      </p>
      {/* redirect to upload page if logged in */}
      <Link href="/upload">
        <Button className="font-medium text-lg p-6 rounded-full cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-white">
          Try Insight
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
