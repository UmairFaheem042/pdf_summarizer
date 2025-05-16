import React from "react";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100dvh-60px)]">
      <SignIn />
    </div>
  );
};

export default Login;
