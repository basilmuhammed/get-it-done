import Image from "next/image";
import React from "react";

function OptionCard(props) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="relative h-40 rounded-md w-full mb-6">
        <Image src={props.link} layout="fill" objectFit="cover" alt="content" />
      </div>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
        Construction Area
      </h3>
      <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">
        {props.title}
      </h2>
      <p className="leading-relaxed text-sm">
        Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
        disrupt edison bulbche.
      </p>
    </div>
  );
}

export default OptionCard;
