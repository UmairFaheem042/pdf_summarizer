import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col gap-1">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your uploads</h1>
        <Link href="/upload">
          <Button className="cursor-pointer">
            <span className="hidden sm:block">Upload PDF</span>
            <Plus className="w-4 h-4" />
          </Button>
        </Link>
      </nav>
      <p className="text-sm text-muted-foreground">
        Upload your PDF files and get insights from them
      </p>
    </header>
  );
};

export default Header;
