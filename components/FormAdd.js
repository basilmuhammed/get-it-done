import React from "react";
import { useState } from "react/cjs/react.development";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const FormAdd = ({ isPanelOpen }) => {
  const [form, setForm] = useState({
    name: "name",
    availableFrom: "name",
    experience: "name",
    category: "name",
    image: {},
    about: "name",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="absolute z-30 w-3/6 h-[50rem] bg-white shadow-lg top-10 right-1/4 left-1/4 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <div className="pt-3">
          <h2 className="text-2xl font-semibold">
            Fill the form to add an worker
          </h2>
          <p className="text-sm text-center">fill the all field accordingly</p>
        </div>
        <form className="w-2/3 my-5" onSubmit={onSubmit}>
          <label className="block py-4">
            <span className="block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block py-4">
            <span className="block text-sm font-medium text-slate-700">
              Available from
            </span>
            <input
              type="date"
              name="availableFrom"
              value={form.availableFrom}
              onChange={(e) =>
                setForm({ ...form, availableFrom: e.target.value })
              }
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block py-4">
            <span className="block text-sm font-medium text-slate-700">
              Number of experience
            </span>
            <input
              type="number"
              name="experience"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
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
              name="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option name="architect" id="architect">
                Architect
              </option>
              <option name="mechanic" id="mechanic">
                Mechanic
              </option>
              <option name="plumber" id="plumber">
                Plumber
              </option>
            </select>
          </div>
          <label className="block py-4">
            <span className="block text-sm font-medium text-slate-700">
              About
            </span>
            <input
              type="text"
              name="about"
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
              className="mt-1 px-3 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block py-4">
            <span className="block text-sm font-medium text-slate-700">
              upload photo
            </span>
            <input
              type="file"
              id="img"
              name="img"
              //   value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.files && e.target.files[0] })
              }
              accept="image/*"
              className="p2 mt-2 bg-white "
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
  );
};

export default FormAdd;
