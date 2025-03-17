"use client";

import Image from "next/image";
import addicon from "../../../public/images/addicon.svg";
import { useRef, useState } from "react";
import { bebas, roboflexlight } from "../fonts";
import debounce from "~/helpers/debounce";
import { api } from "~/trpc/react";
import { capitalizeEachWord, capitalizeFirstLetter } from "~/helpers/utils";

type Props = {
  meal: string;
};

const AddFood = ({ meal }: Props) => {
  const foodSearchInput = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState("");
  const searchQuery = api.foodSearch.searchByName.useQuery(
    {
      searchString: searchTerm,
    },
    {
      enabled: searchTerm.length >= 3,
    },
  );
  const foodQuery = api.foodSearch.searchById.useQuery(
    { fdcId: selectedFood },
    { enabled: !!selectedFood },
  );

  const handleTyping = debounce(() => {
    if (foodSearchInput.current) setSearchTerm(foodSearchInput.current.value);
  }, 700);

  const handleFoodSelection = (fdcId: number) => {
    // run a search for details using the fdcId. Mutation? Query?
    setSelectedFood(fdcId.toString());
  };

  return (
    <div className="m-auto mt-5 lg:w-full">
      <label className="input input-bordered flex w-full items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search for a food"
          ref={foodSearchInput}
          onKeyDownCapture={async (e) => await handleTyping(e)}
        />
        <button
          onClick={() => {
            if (foodSearchInput.current)
              setSearchTerm(foodSearchInput.current.value);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
      <div className="mt-5 flex flex-col gap-5 lg:flex-row">
        <table className="order-2 table lg:order-1">
          <tbody>
            {searchQuery.data?.map((e) => (
              <tr
                key={e.fdcId}
                className="cursor-pointer hover:bg-neutral-200"
                onClick={() => handleFoodSelection(e.fdcId)}
              >
                <td className="text-start">
                  <span className="text-lg font-medium">
                    {capitalizeFirstLetter(e.foodName)}
                  </span>
                  <br />
                  <span className={`${roboflexlight.className}`}>
                    {capitalizeEachWord(e.brandName)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="order-1 w-full lg:order-2">box here</div>
      </div>
    </div>
  );
};

export default AddFood;
