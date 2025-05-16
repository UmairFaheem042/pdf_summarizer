import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionHeader } from "../common/motion-wrapper";

const Header = ({ count, userId }) => {
  const limit = count >= process.env.MAX_UPLOADS;
  return (
    <header className="flex flex-col gap-1">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your uploads</h1>
        <MotionDiv whileTap={{ scale: 0.9 }}>
          <Link href="/upload">
            <Button className="cursor-pointer">
              <span className="hidden sm:block">Upload PDF</span>
              <Plus className="w-4 h-4" />
            </Button>
          </Link>
        </MotionDiv>
      </nav>
      <p className="text-sm text-muted-foreground">
        Upload your PDF files and get insights from them
      </p>
    </header>
  );
};

export default Header;
