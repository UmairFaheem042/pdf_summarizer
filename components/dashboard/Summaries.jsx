import React from "react";
import DisplayCard from "./DisplayCard";
import { getSummaries } from "@/lib/summaries";
import { MotionSection } from "../common/motion-wrapper";
import { containerVariants } from "@/utils/constants";

const Summaries = async ({ count, userId }) => {
  const data = await getSummaries(userId);
  const limit = count >= process.env.MAX_UPLOADS;

  return (
    <>
      {limit && (
        <div className="mt-4 mb-4 rounded-md p-2 border border-red-300 bg-red-100">
          <p className="text-sm text-red-500 text-center">
            You have reached your upload limit! Get premium for more uploads
          </p>
        </div>
      )}
      {/* here also */}
      <MotionSection className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <DisplayCard key={item.id} data={item} />
        ))}
      </MotionSection>
    </>
  );
};

export default Summaries;
