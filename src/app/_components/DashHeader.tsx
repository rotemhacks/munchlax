import React from "react";
import { bebas } from "../fonts";
import dayjs from "dayjs";
import defaultav from "../../../public/images/defaultav.svg";
import Image from "next/image";

const DashHeader = () => {
  return (
    <section className="mt-10 flex w-full flex-col items-center lg:flex-row lg:items-start lg:gap-10">
      <div className="avatar">
        <div className="w-36 rounded-full lg:w-56">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={defaultav} alt="default avatar" />
        </div>
      </div>
      <div className="flex flex-col content-between">
        <div>
          <h2
            className={`${bebas.className} mt-5 text-5xl lg:mt-0 lg:text-7xl`}
          >
            <span className="text-primary">HELLO, </span>
            <span>USERNAME</span>
          </h2>
          <p className="text-center text-lg lg:text-left">Lovely to see you.</p>
        </div>
        <p
          className={`${bebas.className} mt-5 text-3xl tracking-wide lg:mt-20`}
        >
          <span className="hidden lg:inline">TODAY IS: </span>
          <span className="text-primary">
            {dayjs().format("dddd, MMMM D YYYY")}
          </span>
        </p>
      </div>
      <div className="hidden lg:flex lg:flex-grow" />
      <div className="flex w-3/4 flex-col items-center justify-center rounded-3xl border border-primary p-5 text-center lg:w-1/4">
        <p>Total calories eaten today:</p>
        <p
          className={`${bebas.className} mt-5 text-5xl text-primary lg:mt-0 lg:text-7xl`}
        >
          1541
        </p>
      </div>
    </section>
  );
};

export default DashHeader;
