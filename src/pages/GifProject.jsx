import React from "react";
import Random from "../component/gifproject/Random";
import Tag from "../component/gifproject/Tag";
import "./GifProject.css";

function GifProject() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="rounded-lg absolute bg-white w-11/12 text-center mt-10 px-10 py-2 text-3xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-7.5">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default GifProject;
