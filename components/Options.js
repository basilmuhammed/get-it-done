import Link from "next/link";
import React from "react";
import OptionCard from "./OptionCard";

function Options() {
  return (
    <section className="text-gray-600 body-font mb-7" id="services">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Select the construction you want
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            error? Animi eveniet nihil nostrum itaque sequi distinctio facere
            ipsum molestiae saepe pariatur id quam voluptas voluptate, quod illo
            voluptatem sed.
          </p>
        </div>
        <div className="flex justify-center flex-wrap -m-3">
          <Link href="/options/plumber" passHref>
            <div className="cursor-pointer xl:w-1/3 md:w-1/2 p-4">
              <OptionCard
                title="Plumber"
                link="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
            </div>
          </Link>
          <Link href="/options/mechanic" passHref>
            <div className="cursor-pointer xl:w-1/3 md:w-1/2 p-4">
              <OptionCard
                title="Mechanic"
                link="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
            </div>
          </Link>
          <Link href="/options/architect" passHref>
            <div className="cursor-pointer xl:w-1/3 md:w-1/2 p-4">
              <OptionCard
                title="Architecture"
                link="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Options;
