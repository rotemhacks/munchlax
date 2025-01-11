import { auth } from "~/server/auth";
import DashHeader from "../_components/DashHeader";
import DashTable from "../_components/DashTable";
import NoteEditor from "../_components/NoteEditor";
import WaterTracker from "../_components/WaterTracker";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

const mockdata = {
  breakfast: [
    {
      name: "Sheep Yogurt 5%",
      manufacturer: "",
      serving: 100,
      servingUnit: "grams",
      calories: 74,
      carbs: 4,
      fat: 5,
      protein: 5,
    },
    {
      name: "Granola",
      manufacturer: "Grains R Us",
      serving: 30,
      servingUnit: "grams",
      calories: 127,
      carbs: 22,
      fat: 3,
      protein: 3,
    },
  ],
  lunch: [],
  dinner: [],
  snacks: [],
};

const Dashboard = async () => {
  const session = await auth();
  if (!session?.user) {
    // void api.post.getLatest.prefetch(); TODO: See how that works for prefetching entries
    redirect("/");
  }

  return (
    <div className="max-w-screen-xl">
      <DashHeader user={session?.user} />
      <div className="mt-10 flex flex-col items-center lg:mt-20 lg:flex-row lg:items-start lg:gap-3">
        <DashTable data={mockdata} />
        <div className="divider mx-auto w-3/4 lg:hidden" />
        <div className="flex w-3/4 flex-grow flex-col gap-3 lg:w-auto">
          <WaterTracker />
          <NoteEditor />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
