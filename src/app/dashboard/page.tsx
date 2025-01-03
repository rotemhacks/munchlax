import DashHeader from "../_components/DashHeader";
import DashTable from "../_components/DashTable";
import WaterTracker from "../_components/WaterTracker";

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

const Dashboard = () => {
  return (
    <div>
      <DashHeader />
      <div className="mt-10 flex flex-col items-center lg:mt-20 lg:flex-row lg:items-start lg:gap-3">
        <DashTable data={mockdata} />
        <div className="divider mx-auto w-3/4 lg:hidden" />
        <WaterTracker />
      </div>
    </div>
  );
};

export default Dashboard;
