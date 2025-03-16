import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col gap-1">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your uploads</h1>
        <Button className="cursor-pointer">
          <span className="hidden sm:block">Upload PDF</span>
          <Plus className="w-4 h-4" />
        </Button>
      </nav>
      <p className="text-sm text-muted-foreground">
        Upload your PDF files and get insights from them
      </p>
    </header>
  );
};

export default Header;
