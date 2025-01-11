"use client";

import Image from "next/image";
import addicon from "../../../public/images/addicon.svg";
import { useRef, useState } from "react";
import { bebas } from "../fonts";
import debounce from "~/helpers/debounce";

const AddFood = () => {
  const [foodInfo, setFoodInfo] = useState({
    meal: "",
    foodName: "",
    serving: 0,
    servingUnit: "",
  });
  const addFoodModal = useRef<HTMLDialogElement>(null);
  const foodSearchInput = useRef<HTMLInputElement>(null);

  const openAddFoodModal = (meal: string) => {
    if (!addFoodModal?.current) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    setFoodInfo((info) => ({ ...info, meal }));
    addFoodModal.current.showModal();
  };

  const handleSearch = (value = "") => {
    // TODO: Call backend for API. Also sign up for food API
    if (value.length < 3) return;
    console.log("Search launched with " + value);
  };

  const handleTyping = debounce(
    () => handleSearch(foodSearchInput.current?.value),
    1000,
  );

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={addicon}
          alt="go back one day"
          width="25"
          height="25"
        />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li>
          <a onClick={() => openAddFoodModal("breakfast")}>Breakfast</a>
        </li>
        <li>
          <a onClick={() => openAddFoodModal("lunch")}>Lunch</a>
        </li>
        <li>
          <a onClick={() => openAddFoodModal("dinner")}>Dinner</a>
        </li>
        <li>
          <a onClick={() => openAddFoodModal("snacks")}>Snacks</a>
        </li>
      </ul>
      <dialog
        id="loginmodal"
        className="modal"
        role="dialog"
        ref={addFoodModal}
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className={`text-2xl font-bold text-primary ${bebas.className}`}>
            ADD A FOOD TO: {foodInfo.meal}
          </h2>
          <label className="input input-bordered mt-3 flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search for a food"
              ref={foodSearchInput}
              onKeyDownCapture={(e) => handleTyping(e)}
            />
            <button
              onClick={() => handleSearch(foodSearchInput.current?.value)}
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
        </div>
        <form method="dialog" className="modal-backdrop w-screen">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddFood;
