import Image from "next/image";

const ItemPage = (props) => {
  return (
    <>
      <div className="relative mb-24">
        <div className="relative w-[99vw] h-[30vh] mb-10 rounded overflow-hidden">
          <Image
            alt="hero"
            src={props.src}
            layout="fill"
            priority={1}
            objectFit="cover"
          />
        </div>
        <div className="w-full flex flex-col mb-5 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
            {props.pageHead}
          </h1>
          <p className="leading-relaxed w-2/3">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
