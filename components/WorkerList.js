import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import ContactCard from "./ContactCard";

const WorkerList = (props) => {
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
      {workers &&
        workers.map((data) => {
          console.log("🚀 ~ data", data);
          return <ContactCard key={data && data.id} data={data} />;
        })}
    </>
  );
};

export default WorkerList;
