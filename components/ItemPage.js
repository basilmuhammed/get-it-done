import Image from "next/image";
import React, { useState } from "react";

const ItemPage = (props) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const isPanelOpen = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <>
      <div className="relative">
        {panelOpen && (
          <div className="absolute z-30 w-1/2 h-[80vh] bg-white shadow-lg top-5 right-1/4 left-1/4 rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <div className="p-5">
                <h2 className="text-2xl font-semibold">
                  Fill the form to add an worker
                </h2>
                <p className="text-sm text-center">
                  fill the all field accordingly
                </p>
              </div>
              <form className="w-2/3 my-5">
                <label className="block py-4">
                  <span className="block text-sm font-medium text-slate-700">
                    Name
                  </span>
                  <input
                    type="text"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block py-4">
                  <span className="block text-sm font-medium text-slate-700">
                    Available from
                  </span>
                  <input
                    type="date"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <label className="block py-4">
                  <span className="block text-sm font-medium text-slate-700">
                    Number of experience
                  </span>
                  <input
                    type="number"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <div className="block py-4">
                  <span className="block text-sm py-2 font-medium text-slate-700">
                    Select Work Category
                  </span>
                  <select
                    className="form-select px-4 py-2 rounded-md w-full"
                    placeholder="select one"
                  >
                    <option className="m-3 p-3">sdfsdf</option>
                    <option>sdfsdf</option>
                    <option>sdfsdf</option>
                  </select>
                </div>
                <label className="block py-4">
                  <span className="block text-sm font-medium text-slate-700">
                    About
                  </span>
                  <input
                    type="text"
                    className="mt-1 px-3 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex text-black bg-yellow-400 border-0 py-1 mt-6 px-5 focus:outline-none hover:bg-gray-200 rounded text-md font-medium mr-5"
                >
                  Save{" "}
                </button>
                <button
                  onClick={isPanelOpen}
                  className="inline-flex text-black bg-yellow-400 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-md font-medium"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {/* real page content from here on */}
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
        <div className="flex items-center justify-center mb-16 ">
          <button
            onClick={isPanelOpen}
            className="inline-flex text-black bg-yellow-400 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold"
          >
            Add Workers
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
