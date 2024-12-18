import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src="/jam.jpg" className="w-96 h-96 object-cover -my-20" />
      <p className="lg:text-[72px] text-3xl font-black mb-5 text-center">
        Score Board
      </p>
      <p className="lg:text-lg font-black mb-5 text-center">
        JAMIA JUNIOR FEST '25{" "}
      </p>
      <p className="lg:text-lg font-black mb-5 text-center">(ZONE B) </p>
      <Link
        href={"/score-board/all"}
        className="py-1 bg-red-500  text-xl font-semibold border-red-500 hover:bg-red-600 mb-3 border-2 px-2 rounded-md "
      >
        All Categories
      </Link>
      <div className="flex gap-2 text-xl font-semibold">
        <Link
          href={"/score-board/general"}
          className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md "
        >
          General
        </Link>
        <Link
          href={"/score-board/super-senior"}
          className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md "
        >
          Super Senior
        </Link>
        <Link
          href={"/score-board/senior"}
          className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md "
        >
          Senior
        </Link>
        {/* <Link
          href={"/score-board/junior"}
          className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md "
        >
          Junior
        </Link> */}
        <Link
          href={"/score-board/sub-junior"}
          className="py-1 bg-yellow border-yellow hover:bg-yellower border-2 px-2 rounded-md "
        >
          Sub Junior
        </Link>
      </div>
    </div>
  );
}

export default page;
