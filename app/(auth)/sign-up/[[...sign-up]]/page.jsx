import { SignUp } from "@clerk/nextjs";
import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100dvh-60px)]">
      <SignUp />
    </div>
  );
};

export default Register;
