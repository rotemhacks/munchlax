import Image from "next/image";
import { bebas } from "../fonts";
import defaultav from "../../../public/images/defaultav.svg";
import type { Profile, User } from "../types";

type Props = {
  user?: User;
};

const NavBar = async ({ user }: Props) => {
  return (
    <div className="navbar">
      <h1
        className={`${bebas.className} btn btn-ghost mr-3 text-5xl text-primary`}
      >
        Munchlax
      </h1>
      <div className="my-auto w-full flex-row-reverse items-center rounded-3xl bg-primary px-3">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={user?.image ? user.image : defaultav}
                width="40"
                height="40"
                alt="Default avatar"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
