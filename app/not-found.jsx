import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[calc(100vh-10rem)]">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-sm text-gray-500">Page you are requesting is not found</p>
      <Link href="/">
        <Button className="cursor-pointer">Return Home</Button>
      </Link>
    </div>
  );
}
