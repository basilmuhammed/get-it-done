import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import ContactCard from "./ContactCard";

const WorkerList = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log("🚀 ~ user", user);
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    getDocs(collection(db, props.listName)).then((val) =>
      val.forEach((doc) => {
        setWorkers((prev) => {
          return [...prev, doc.data()];
        });
      })
    );
  }, [props.listName]);

  return (
    <>
      {user ? (
        workers &&
        workers.map((data) => {
          console.log("🚀 ~ data", data);
          return <ContactCard key={data && data.id} data={data} />;
        })
      ) : (
        <p className="text-2xl w-full text-center">
          ❗Oops Login to see the workers list
        </p>
      )}
    </>
  );
};

export default WorkerList;
