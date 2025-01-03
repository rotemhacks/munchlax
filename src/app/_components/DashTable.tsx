import React, { Fragment } from "react";
import { bebas, roboflex } from "../fonts";
import type { Food } from "../types";
import dayjs from "dayjs";
import backicon from "../../../public/images/backicon.svg";
import addicon from "../../../public/images/addicon.svg";
import Image from "next/image";

type Props = {
  data: { breakfast: Food[]; lunch: Food[]; dinner: Food[]; snacks: Food[] };
};

const DashTable = ({ data }: Props) => {
  return (
    <div className="lg:w-3/4">
      <div className="flex flex-row gap-2">
        <button className="btn btn-ghost rounded-full">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={backicon} alt="go back one day" width="25" height="25" />
        </button>
        <table className="table">
          <thead>
            <tr
              className={`${bebas.className} flex-grow border-none bg-primary text-xl text-primary-content`}
            >
              <th className="rounded-l-3xl">Food</th>
              <th className="rounded-r-3xl lg:rounded-none">Calories</th>
              <th className="hidden lg:table-cell">Carbs</th>
              <th className="hidden lg:table-cell">Fat</th>
              <th className="hidden rounded-r-3xl lg:table-cell">Protein</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((meal) => (
              <Fragment key={meal + dayjs().format("YYYYMMDD")}>
                <tr>
                  <td className={`${bebas.className} text-xl`}>{meal}</td>
                </tr>
                {data[meal as keyof typeof data].length > 0 &&
                  data[meal as keyof typeof data].map((food: Food) => (
                    <tr key={food.name + food.serving} className="hover">
                      <td>
                        <p>
                          <span className={`${roboflex.className}`}>
                            {food.name},{" "}
                          </span>
                          <span>{`${food.serving} ${food.servingUnit}`}</span>
                        </p>
                        <p className="text-sm">{food.manufacturer}</p>
                      </td>
                      <td>{food.calories}</td>
                      <td className="hidden lg:table-cell">{food.carbs}</td>
                      <td className="hidden lg:table-cell">{food.fat}</td>
                      <td className="hidden lg:table-cell">{food.protein}</td>
                    </tr>
                  ))}
                {data[meal as keyof typeof data].length > 0 && (
                  <tr>
                    <td className={`${roboflex.className} text-right`}>
                      Total:
                    </td>
                    <td>
                      {data[meal as keyof typeof data]?.reduce(
                        (ac, item) => ac + item.calories,
                        0,
                      )}
                    </td>
                    <td className="hidden lg:table-cell">
                      {data[meal as keyof typeof data]?.reduce(
                        (ac, item) => ac + item.carbs,
                        0,
                      )}
                    </td>
                    <td className="hidden lg:table-cell">
                      {data[meal as keyof typeof data]?.reduce(
                        (ac, item) => ac + item.fat,
                        0,
                      )}
                    </td>
                    <td className="hidden lg:table-cell">
                      {data[meal as keyof typeof data]?.reduce(
                        (ac, item) => ac + item.protein,
                        0,
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        <button className="btn btn-ghost rounded-full">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={addicon} alt="go back one day" width="25" height="25" />
        </button>
      </div>
    </div>
  );
};

export default DashTable;
