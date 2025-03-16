import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center px-6 py-20 bg-[rgba(0,0,0,0.02)]">
      <h2 className="text-4xl font-bold ">
        Ready to save hours of reading time?
      </h2>
      <p className="text-sm text-muted-foreground text-center">
        Transform lengthy documents into concise summaries with our AI-powered
      </p>
      <Button className="rounded-full cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-white">
        Get Started
      </Button>
    </section>
  );
};

export default CTA;
