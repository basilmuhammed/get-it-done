import Image from "next/image";
import React from "react";
import NavBar from "../../components/NavBar";
import { PhoneMissedCallIcon, MailIcon } from "@heroicons/react/outline";
import ContactCard from "../../components/ContactCard";

function architect() {
  return (
    <>
      <NavBar />
      <section className="text-gray-600 body-font">
        <div className="relative w-[99vw] h-[30vh] mb-10 rounded overflow-hidden">
          <Image
            alt="hero"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
            layout="fill"
            priority={1}
            objectFit="cover"
          />
        </div>
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
            Available Architects
          </h1>
          <p className="leading-relaxed w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            officiis, accusantium nobis adipisci iste, asperiores corrupti
            praesentium laudantium fuga eum fugit animi ullam maxime placeat
            vero, voluptatem ipsam non? Delectus?
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          {/* <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </>
  );
}

export default architect;
