import React from "react";

const Badge: React.FC = ({ text }) => {
  return text ? (
    <p className="mr-8 inline-flex rounded-2xl bg-primary bg-opacity-50 px-2 py-0.5 align-center text-xxs font-semibold uppercase tracking-wide text-gray-200 ">
      {text}
    </p>
  ) : null;
};

export default Badge;
