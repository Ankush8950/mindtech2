import React from "react";
import JoinCard from "./JoinCard/JoinCard";
import JoinUsData from "./JoinUsData";

const JoinUs = () => {
  return (
    <>
      <div className="bg-white">
      <h1 className="font-bold text-4xl text-center pt-20">WHY JOIN US?</h1>
      <div className="flex items-center justify-center flex-wrap pt-20 pb-20 lg:pl-10 lg:pr-10 ">
        {JoinUsData.map((item) => {
          return <JoinCard item={item} />;
        })}
      </div>
      </div>
    </>
  );
};

export default JoinUs;
