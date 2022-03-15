import React, { useState, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import FormAdd from "./FormAdd";

const Hero = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const isPanelOpen = () => {
    setPanelOpen(!panelOpen);
  };

  const auth = getAuth();
  const user = auth.currentUser;

  const getUserAuth = useCallback(async (uid) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    let user;
    querySnapshot.forEach((doc) => {
      if (doc.data().constructor === true) {
        user = true;
      }
    });
    return user;
  }, []);

  const [userInfo, setUserInfo] = useState();
  if (user) {
    getUserAuth(user.uid).then((val) => setUserInfo(val));
  }

  return (
    <section className="text-gray-600 body-font" id="hero">
      {panelOpen && <FormAdd isPanelOpen={isPanelOpen} />}
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="relative w-[98vw] h-[60vh] mb-10 rounded overflow-hidden">
          <Image
            alt="hero"
            src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            priority={1}
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
            Boost up your construction
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            aliquid provident dolorem dignissimos ipsa optio voluptate est
            accusantium quas. Autem nostrum fugit excepturi accusamus amet
            repellat doloremque eligendi culpa eveniet.
          </p>

          <div className="flex w-full justify-center items-end">
            {userInfo && (
              <button
                onClick={isPanelOpen}
                className="inline-flex text-black font-medium bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg"
              >
                Add Worker
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
