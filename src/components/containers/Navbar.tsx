import Image from "next/image";
import React from "react";
import Hoople from "@/assets/png/hoople-white.png";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/16/solid";

interface MenuItemProps {
  key: string;
  title: string;
  path: string;
}

const MenuItem: MenuItemProps[] = [
  {
    key: "home",
    title: "Home",
    path: "/",
  },
  {
    key: "aboutUs",
    title: "About Us",
    path: "/about-us",
  },
  {
    key: "howToUse",
    title: "How to Use",
    path: "/how-to-use",
  },
  {
    key: "getStarted",
    title: "Get Started",
    path: "/get-started",
  },
  {
    key: "contactUs",
    title: "Contact Us",
    path: "/contact-us",
  },
];

export default function Navbar() {
  return (
    <div className="navbar bg-transparent text-[var(--yellow-stabilo-color)] absolute top-0 right-0">
      {/* Mobile view */}
      <div className="navbar-start items-center gap-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Image alt="hoople" src={Hoople} width={70} height={50} />
      </div>

      {/* Desktop view */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-balance font-semibold">
          {MenuItem.map((item) => (
            <li key={item.key}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-none m-1 flex"
          >
            <span className="flex items-center w-14 gap-2 text-white">
              <GlobeAltIcon /> ID <ChevronDownIcon />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-white rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
        </div> */}
      </div>
    </div>
  );
}
