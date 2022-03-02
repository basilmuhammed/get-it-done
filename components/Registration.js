import Image from "next/image";
import Link from "next/link";
import React from "react";

const Registration = () => {
  return (
    <section className="text-gray-600 body-font flex h-screen ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 items-start">
          <div className="relative w-[50vw] h-[40vh] mb-5 left-0 md:block hidden">
            <Image
              src="/artwork.png"
              layout="fill"
              objectFit="contain"
              alt="artwork"
            />
          </div>
          <h1 className="title-font font-medium text-3xl text-gray-900">
            We help you to find the best worker for your construction
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up/ Sign In
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="checkbox"
              id="checkbox"
              name="email"
              className="h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500"
            />
            <label
              htmlFor="checkbox"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              check here if you are a constructor
            </label>
          </div>
          <Link href="/" passHref>
            <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Login
            </button>
          </Link>
          <p className="text-xs text-gray-500 mt-3">
            if you are a constructor then you should choose constructor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
