"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FileText, LayoutDashboard, Upload, User } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="border-b">
      <nav className="px-6 py-3 flex justify-between items-center gap-4">
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-2 cursor-pointer"
        >
          <FileText className="w-4 h-4 transition-all duration-300 hover:rotate-12 hover:w-6 hover:h-6 hover:text-emerald-500" />
          <span className="text-lg font-extrabold">Insight</span>
        </Link>

        <div className="flex items-center gap-2">
          <SignedIn>
            <Link href="/upload">
              <Button variant="ghost" className="cursor-pointer">
                <span className="hidden sm:block">Upload PDF</span>
                <Upload className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button variant="outline" className="cursor-pointer">
                <span className="hidden sm:block">Dashboard</span>
                <LayoutDashboard className="w-4 h-4" />
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>

        <SignedOut>
          <Link href="/sign-in">
            <Button variant="default" className="cursor-pointer">
              <span className="hidden sm:block">Sign In</span>
              <User className="w-4 h-4 " />
            </Button>
          </Link>
        </SignedOut>
      </nav>
    </header>
  );
};

export default Header;
