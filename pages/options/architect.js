import React from "react";
import NavBar from "../../components/NavBar";
import { PhoneMissedCallIcon, MailIcon } from "@heroicons/react/outline";
import ContactCard from "../../components/ContactCard";
import ItemPage from "../../components/ItemPage";

function architect() {
  return (
    <>
      <NavBar />
      <section className="text-gray-600 body-font">
        <ItemPage
          pageHead="Available Architect"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            officiis, accusantium nobis adipisci iste, asperiores corrupti
            praesentium laudantium fuga eum fugit animi ullam maxime placeat
            vero, voluptatem ipsam non? Delectus?"
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        />
        <div className="grid grid-cols-4 gap-10 mx-4">
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
