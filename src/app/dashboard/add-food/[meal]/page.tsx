import AddFood from "~/app/_components/AddFood";
import { bebas } from "~/app/fonts";
import type { BasicFoodInfo } from "~/app/types";
import { api } from "~/trpc/server";

type Props = {
  params: Promise<{ meal: string }>;
};

const AddFoodPage = async ({ params }: Props) => {
  const meal = (await params).meal;

  const handleSearch = async (searchString = "") => {
    "use server";
    if (searchString.length < 3) return;
    const searchResults = await api.foodSearch.searchByName({
      searchString,
    });
    console.log(searchResults);
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
