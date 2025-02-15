import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <section
        className="mb-5 shadow-sm shadow-white px-4 py-4 text-center rounded-lg border border-gray-400"
      >
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </section>
    </>
  );
};

export default Heading;
