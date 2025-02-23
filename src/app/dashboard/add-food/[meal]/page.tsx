import AddFood from "~/app/_components/AddFood";
import { bebas } from "~/app/fonts";

type Props = {
  params: Promise<{ meal: string }>;
};

const mockdata = ["cheese", "yogurt", "more cheese"];

const AddFoodPage = async ({ params }: Props) => {
  const meal = (await params).meal;

  const handleSearch = (value = "") => {
    // TODO: Call backend for API. Also sign up for food API
    if (value.length < 3) return;
    console.log("Search launched with " + value);
    return mockdata;
  };

  return (
    <div className="">
      <h2 className={`${bebas.className} mt-5 text-5xl lg:mt-0 lg:text-7xl`}>
        <span className="text-primary">Add food to: </span>
        <span>{meal.toLocaleUpperCase()}</span>
      </h2>
      <div className="flex-column flex lg:flex-row">
        <AddFood meal={meal} handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default AddFoodPage;
