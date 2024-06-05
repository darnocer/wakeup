import React from "react";
import Link from "next/link";

const TocCallout = () => (
  <Link href="#" className="relative block">
    <div className="rounded-xl bg-neutral-500 w-full min-h-40 flex flex-col p-4  relative">
      <h3 className="text-xl-test mb-2">Got feedback?</h3>
      <p>
        Safety is our priority and we aim to provide thorough and accurate
        information. Let us know if we need to make a correction!
      </p>
    </div>
    <svg
      className="absolute bottom-2 right-2 z-0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  </Link>
);

export default TocCallout;
