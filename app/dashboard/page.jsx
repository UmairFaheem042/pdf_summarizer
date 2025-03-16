import Header from "@/components/dashboard/Header";
import DisplayCard from "@/components/dashboard/DisplayCard";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: "Next.js Documentation for Beginners",
      time: "3 minutes ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      status: "Processing",
    },
    {
      id: 2,
      name: "React One Shot",
      time: "30 minutes ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      status: "Completed",
    },
    {
      id: 3,
      name: "Offer Letter",
      time: "1 day ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      status: "Completed",
    },
    {
      id: 4,
      name: "Demo",
      time: "7 days ago",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      status: "Failed",
    },
  ];

  return (
    <div className="h-[calc(100vh-60px)] p-6 mt-8">
      <Header />
      <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <DisplayCard key={item.id} {...item} />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
