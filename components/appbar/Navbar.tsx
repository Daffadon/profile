import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
const Navbar = () => {
  const header_url = headers().get("x-url") || "";
  const headerSplited = header_url.split("/");
  const url = headerSplited[headerSplited.length - 1];
  return (
    <>
      <div className="flex justify-center items-center gap-x-2 mt-2">
        <Link
          href={"/"}
          className={`hover:text-blue-deep duration-300 font-bold ${
            url === "" && "text-blue-deep"
          }`}
        >
          Profile
        </Link>
        <div className="h-7 w-[2px] bg-black"></div>
        <Link
          href={"/article"}
          className={`hover:text-blue-deep duration-300 font-bold ${
            url === "article" && "text-blue-deep"
          }`}
        >
          Article
        </Link>
      </div>
    </>
  );
};

export default Navbar;
