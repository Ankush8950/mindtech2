import React from "react";
import JoinCard from "./JoinCard/JoinCard";
import JoinUsData from "./JoinUsData";

const JoinUs = () => {
  return (
    <>
      <div className="bg-white">
      <h1 className="font-bold text-4xl text-center pt-20 uppercase">WHY work with US?</h1>
      <div className="flex items-center justify-center flex-wrap pt-20 pb-20 lg:pl-10 lg:pr-10 ">
        {JoinUsData.map((item, index) => {
          return <JoinCard item={item} key={index}/>;
        })}
      </div>
      </div>
    </>
  );
};

export default JoinUs;
