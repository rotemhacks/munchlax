"use client";

import Image from "next/image";
import addicon from "../../../public/images/addicon.svg";
import { useRef } from "react";
import { bebas } from "../fonts";
import debounce from "~/helpers/debounce";
import type { BasicFoodInfo } from "../types";

type Props = {
  meal: string;
  handleSearch: (searchString?: string) => void;
};

const AddFood = ({ meal, handleSearch }: Props) => {
  const foodSearchInput = useRef<HTMLInputElement>(null);

  const handleTyping = debounce(
    () => handleSearch(foodSearchInput.current?.value),
    1000,
  );

  return (
    <div className="mt-10 w-full">
      <label className="input input-bordered mt-3 flex w-full items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search for a food"
          ref={foodSearchInput}
          onKeyDownCapture={async (e) => await handleTyping(e)}
        />
        <button onClick={() => handleSearch(foodSearchInput.current?.value)}>
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
    </div>
  );
};

export default AddFood;
