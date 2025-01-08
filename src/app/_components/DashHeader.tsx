import { bebas } from "../fonts";
import dayjs from "dayjs";
import defaultav from "../../../public/images/defaultav.svg";
import Image from "next/image";
import CalorieDash from "./CalorieDash";
import type { User } from "../types";

type Props = {
  user: User | undefined;
};

const DashHeader = ({ user }: Props) => {
  return (
    <section className="mt-10 flex w-full flex-col items-center lg:flex-row lg:items-start lg:gap-10">
      <div className="avatar">
        <div className="w-36 rounded-full lg:w-56">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={user?.image ? user.image : defaultav}
            alt="default avatar"
            width={224}
            height={224}
          />
        </div>
      </div>
      <div className="flex flex-col content-between">
        <div>
          <h2
            className={`${bebas.className} mt-5 text-5xl lg:mt-0 lg:text-7xl`}
          >
            <span className="text-primary">HELLO, </span>
            <span>{user?.name ? user.name : "USERNAME"}</span>
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
      <CalorieDash />
    </section>
  );
};

export default DashHeader;
