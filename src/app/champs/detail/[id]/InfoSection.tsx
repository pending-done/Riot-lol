import tagMap from "@/utils/champTagMap";
import React from "react";

type Props = {
  imageUrl: string;
  title: string;
  name: string;
  lore: string;
  tags: string[];
};

const InfoSection = ({ ...info }: Props) => {
  return (
    <section className="w-[100%] relative">
      <div className="flex justify-center">
        <div className="w-[100%] min-w-[1200px] max-w-[1920px] opacity-50 ">
          <img src={info.imageUrl} alt="" className="w-[100%] object-cover" />
        </div>
      </div>
      <div className="absolute top-1/3 w-[40%] min-w-[500px] max-w-[900px] p-4">
        <h1 className="text-4xl font-bold text-[#C8AA6E]">{info.title}</h1>
        <div className="flex">
          <h1 className="text-8xl">{info.name}</h1>
          <span className="text-2xl">{`(${info.tags.map((tag) => tagMap[tag]).join("/")})`}</span>
        </div>
        <span className="text-lg">{info.lore}</span>
      </div>
    </section>
  );
};

export default InfoSection;
