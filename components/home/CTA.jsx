import { containerVariants } from "@/utils/constants";
import { MotionDiv, MotionSection } from "../common/motion-wrapper";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col gap-4 items-center justify-center px-6 py-20 bg-[rgba(0,0,0,0.02)]"
    >
      <h2 className="text-4xl font-bold ">
        Ready to save hours of reading time?
      </h2>
      <p className="text-sm text-muted-foreground text-center">
        Transform lengthy documents into concise summaries with our AI-powered
      </p>
      <MotionDiv whileTap={{ scale: 0.8 }}>
        <Button className="rounded-full cursor-pointer bg-gradient-to-r from-emerald-400 to-emerald-500 text-white">
          Get Started
        </Button>
      </MotionDiv>
    </MotionSection>
  );
};

export default CTA;
