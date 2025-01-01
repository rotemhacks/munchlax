import DashHeader from "../_components/DashHeader";
import DashTable from "../_components/DashTable";

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
      <DashTable data={mockdata} />
    </div>
  );
};

export default Dashboard;
