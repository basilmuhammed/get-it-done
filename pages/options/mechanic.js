import React from "react";
import Footer from "../../components/Footer";
import ItemPage from "../../components/ItemPage";
import NavBar from "../../components/NavBar";
import WorkerList from "../../components/WorkerList";

function mechanic() {
  return (
    <>
      <NavBar />
      <section className="text-gray-600 body-font">
        <ItemPage
          pageHead="Available Mechanic"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            officiis, accusantium nobis adipisci iste, asperiores corrupti
            praesentium laudantium fuga eum fugit animi ullam maxime placeat
            vero, voluptatem ipsam non? Delectus?"
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <div className="grid grid-cols-3 gap-10 mx-7 mb-6">
          <WorkerList listName="mechanic" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default mechanic;
