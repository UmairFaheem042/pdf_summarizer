import Hero from "@/components/home/Hero";
import Working from "@/components/home/Working";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";
// import { saveUser } from "@/actions/uploadAction";
// import { auth, currentUser } from "@clerk/nextjs/server";

const Home = () => {
  // const { userId } = await auth();
  // const user = await currentUser();
  // console.log(userId);
  // const resp = await saveUser(user);

  // console.log(resp);
  return (
    <div>
      <Hero />
      <Working />
      <Pricing />
      <CTA />
    </div>
  );
};

export default Home;
