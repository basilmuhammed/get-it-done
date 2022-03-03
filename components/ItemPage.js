import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import FormAdd from "./FormAdd";
import { db } from "../firebaseConfig";

const ItemPage = (props) => {
  const getUserAuth = async (uid) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data().constructor === true) {
        return true;
      }
    });

    return false;
  };

  const [panelOpen, setPanelOpen] = useState(false);
  const isPanelOpen = () => {
    setPanelOpen(!panelOpen);
  };

  const auth = getAuth();
  const user = auth.currentUser;
  let userInfo = null;
  if (user) {
    userInfo = getUserAuth(user.uid);
    console.log("🚀 ~ userInfo", Promise.toString(userInfo));
  }

  return (
    <>
      <div className="relative">
        {panelOpen && <FormAdd isPanelOpen={isPanelOpen} />}

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
          {userInfo && (
            <button
              onClick={isPanelOpen}
              className="inline-flex text-black bg-yellow-400 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-md font-semibold"
            >
              Add Workers
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemPage;
