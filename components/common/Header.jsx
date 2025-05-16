"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FileText, LayoutDashboard, Upload, User } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MotionDiv, MotionHeader } from "./motion-wrapper";
import { containerVariants } from "@/utils/constants";

const Header = () => {
  return (
    <MotionHeader
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border-b"
    >
      <nav className="px-6 py-3 flex justify-between items-center gap-4">
        <MotionDiv whileTap={{ scale: 0.9 }}>
          <Link
            href="/"
            className="text-xl font-bold flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 transition-all duration-300 hover:rotate-12 hover:w-6 hover:h-6 hover:text-emerald-500" />
            <span className="text-lg font-extrabold">Insight</span>
          </Link>
        </MotionDiv>

        <div className="flex items-center gap-2">
          <SignedIn>
            <MotionDiv whileTap={{ scale: 0.9 }}>
              <Link href="/upload">
                <Button variant="ghost" className="cursor-pointer">
                  <span className="hidden sm:block">Upload PDF</span>
                  <Upload className="w-4 h-4" />
                </Button>
              </Link>
            </MotionDiv>

            <MotionDiv whileTap={{ scale: 0.9 }}>
              <Link href="/dashboard">
                <Button variant="outline" className="cursor-pointer">
                  <span className="hidden sm:block">Dashboard</span>
                  <LayoutDashboard className="w-4 h-4" />
                </Button>
              </Link>
            </MotionDiv>
            <MotionDiv whileTap={{ scale: 0.9 }}>
              <UserButton />
            </MotionDiv>
          </SignedIn>
        </div>

        <SignedOut>
          <MotionDiv whileTap={{ scale: 0.9 }}>
            <Link href="/sign-in">
              <Button variant="default" className="cursor-pointer">
                <span className="hidden sm:block">Sign In</span>
                <User className="w-4 h-4 " />
              </Button>
            </Link>
          </MotionDiv>
        </SignedOut>
      </nav>
    </MotionHeader>
  );
};

export default Header;
