import PreviewSummary from "@/components/dashboard/PreviewSummary";
import { getSummary } from "@/lib/summaries";

const Summary = async ({ params }) => {
  const { id } = await params;
  const summaryData = await getSummary(id);
  return (
    <>
      <PreviewSummary summary={summaryData[0]} />
    </>
  );
};

export default Summary;
