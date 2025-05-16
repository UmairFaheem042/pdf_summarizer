import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

export const DELETE = async (req) => {
  // const { key } = await req.json();
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");
  console.log(key);

  // await UTApi.deleteFiles(key);
  return NextResponse.json({ message: "File deleted" });
};
