import { CheckCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Pricing = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center px-6 py-20">
      <h2 className="text-xl font-bold text-emerald-400 uppercase">Pricing</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[800px] w-full mx-auto">
        <div className="flex flex-col gap-3 border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col gap-3 flex-1">
            <h5 className="text-lg font-semibold">Basic</h5>
            <p className="text-sm text-gray-500">Perfect for occasional use</p>
            <h1 className="text-4xl font-semibold">
              $9 <span className="text-sm text-gray-500">/month</span>
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />5 PDF summaries per month
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Standard processing speed
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Email support
              </li>
            </ul>
          </div>
          <Button className="mt-8 rounded-full cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-white">
            Buy Now
          </Button>
        </div>

        <div className="flex flex-col gap-3 border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col gap-3 flex-1">
            <h5 className="text-lg font-semibold">Pro</h5>
            <p className="text-sm text-gray-500">For professionals and teams</p>
            <h1 className="text-4xl font-semibold">
              $19 <span className="text-sm text-gray-500">/month</span>
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Unlimited PDF summaries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Markdown export
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Markdown export
              </li>
            </ul>
          </div>
          <Button className="mt-8 rounded-full cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-white">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
