import Image from "next/image";
import { bebas } from "../fonts";
import defaultav from "../../../public/images/defaultav.svg";
import type { User } from "../types";

type Props = {
  user?: User;
};

const NavBar = async ({ user }: Props) => {
  return (
    <div className="navbar">
      <h1
        className={`${bebas.className} btn btn-ghost text-primary mr-3 text-5xl`}
      >
        Munchlax
      </h1>
      <div className="bg-primary my-auto w-full flex-row-reverse items-center rounded-3xl px-3">
        <label className="toggle text-base-content">
          <input type="checkbox" value="night" className="theme-controller" />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
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
                alt="User avatar"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm rounded-box bg-base-100 z-1 mt-3 w-52 p-2 shadow-sm"
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
