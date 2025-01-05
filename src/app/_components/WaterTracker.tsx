"use client";

import React, { useCallback } from "react";
import { bebas } from "../fonts";
import Image from "next/image";
import watericon from "../../../public/images/water-glass.svg";
import wateradd from "../../../public/images/water-add.svg";

// TODO: Nicer handling of the water icons

const WaterTracker = () => {
  const handleAddWater = () => {
    // add one glass
    console.log("One more glass!");
  };

  const handleRemoveWater = () => {
    // remove one glass
    console.log("I changed my mind!");
  };

  const getNumberOfGlasses = useCallback((units = 4) => {
    const glasses = [...new Array<undefined>(units)].map(
      (el: undefined, i: number) => {
        return i < units - 1 ? (
          <Image
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
            src={watericon}
            alt="1 glass of water, click on it to remove"
            key={"water" + i}
          />
        ) : (
          <Image
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
            src={watericon}
            alt="1 glass of water, click on it to remove"
            key={"water" + i}
            className="cursor-pointer"
            onClick={handleRemoveWater}
          />
        );
      },
    );
    return glasses;
  }, []);

  return (
    <div className="mb-3 w-4/5 lg:mt-3 lg:w-1/4">
      <h3 className={`${bebas.className} mb-3 w-max text-xl text-primary`}>
        Water Tracker:
      </h3>
      <div className="flex flex-row gap-3">
        {getNumberOfGlasses()}

        <Image
          /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
          src={wateradd}
          alt="1 glass of water, click to add one more"
          onClick={handleAddWater}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default WaterTracker;
