import { BrainCircuit, FileOutput, FileText } from "lucide-react";

const Working = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center px-6 py-20 bg-[rgba(0,0,0,0.02)]">
      <h2 className="text-xl font-bold text-emerald-400 uppercase">
        How it works
      </h2>
      <p className="text-3xl font-semibold text-center">
        Transform any PDF into an easy-to-read <br /> summary in three simple
        steps
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="rounded-lg p-4 flex flex-col items-center justify-center gap-4 border border-white hover:border-gray-200 font-thin">
          <FileText className="w-13 h-13 bg-emerald-100 text-emerald-600 rounded-md p-2" />
          <h3 className="text-lg font-semibold">Upload PDF</h3>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center gap-4 border border-white hover:border-gray-200 font-thin">
          <BrainCircuit className="w-13 h-13 bg-emerald-100 text-emerald-600 rounded-md p-2" />
          <h3 className="text-lg font-semibold">AI Analysis</h3>
        </div>
        <div className="rounded-lg p-4 flex flex-col items-center justify-center gap-4 border border-white hover:border-gray-200 font-thin">
          <FileOutput className="w-13 h-13 bg-emerald-100 text-emerald-600 rounded-md p-2" />
          <h3 className="text-lg font-semibold">Get Summary</h3>
        </div>
      </div>
    </section>
  );
};

export default Working;
