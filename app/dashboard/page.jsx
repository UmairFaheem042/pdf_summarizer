import { getUserPdfCount } from "@/actions/uploadAction";
import { MotionSection } from "@/components/common/motion-wrapper";
import Header from "@/components/dashboard/Header";
import Summaries from "@/components/dashboard/Summaries";
import { containerVariants } from "@/utils/constants";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");

  const count = await getUserPdfCount(userId);

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-60px)] p-6 mt-8"
    >
      <Header count={count} userId={userId} />
      <Summaries count={count} userId={userId} />
    </MotionSection>
  );
};

export default Dashboard;
