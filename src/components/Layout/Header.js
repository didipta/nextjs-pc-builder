import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://server-side-beta.vercel.app/category")
      .then((response) => {
        setCategories(response.data.data);
      });
  }, []);

  return (
    <div className="navbar bg-[#f4f2ef] font-semibold text-lg z-[1000]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {categories?.map((category) => (
              <li key={category.id}>
                <Link href={`/category/${category.id}`}>{category.name}</Link>
                {category?.name === "Others" && (
                  <ul className="p-2 z-50">
                    {category?.items.map((item) => (
                      <li key={item.id}>
                        <Link href={`/category/${item.id}`}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          DStech
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {categories?.map((category) => (
            <li key={category.id} tabIndex={1}>
              {category.name !== "Others" && (
                <Link href={`/category/${category.id}`}>{category.name}</Link>
              )}

              {category.name === "Others" && (
                <details>
                  <summary>{category.name}</summary>
                  <ul className="p-2">
                    {category?.items.map((item) => (
                      <li key={item.id}>
                        <Link href={`/category/${item.id}`}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {session?.user ? (
          <div className="dropdown dropdown-end mx-5">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {session?.user?.name}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <button className="btn bg-[#eb3e8f] text-white">Login</button>
          </Link>
        )}

        <Link href="/pcbuilder" className="btn bg-[#2c2d4f] text-white">
          {" "}
          PC Builder
        </Link>
      </div>
    </div>
  );
};

export default Header;
