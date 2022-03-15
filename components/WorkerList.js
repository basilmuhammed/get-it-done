import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState, useCallback } from "react";
import { CogIcon } from "@heroicons/react/outline";
import { db } from "../firebaseConfig";
import ContactCard from "./ContactCard";

const WorkerList = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDocs(collection(db, props.listName)).then((val) => {
      const workerDataArray = [];
      val.forEach((doc) => {
        const workerData = { workerData: doc.data(), docId: doc.id };
        workerDataArray.push(workerData);
      });
      setWorkers(workerDataArray);
    });
  }, [props.listName, workers]);

  const onDelete = async (listName, docId) => {
    setLoading(true);
    await deleteDoc(doc(db, listName, docId))
      .then(() => {
        setLoading(false);
        setWorkers([]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  // const onDelete = useCallback(async (listName, docId) => {
  //   setLoading(true);
  //   await deleteDoc(doc(db, listName, docId))
  //     .then(() => setLoading(false))
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      {!loading ? (
        user ? (
          workers &&
          workers.map((data) => {
            return (
              <ContactCard
                key={data && data.id}
                data={data}
                onDelete={onDelete}
              />
            );
          })
        ) : (
          <p className="w-[95vw] text-slate-500 rounded-md p-5 flex overflow-hidden text-2xl font-bold items-center justify-center">
            ❗Oops Login to see the workers list
          </p>
        )
      ) : (
        <div
          className="w-[95vw] text-slate-500 rounded-md p-5 flex overflow-hidden text-lg font-bold items-center justify-center"
          disabled
        >
          <CogIcon className="h-8 w-8 animate-spin mr-2" />
          Processing...
        </div>
      )}
    </>
  );
};

export default WorkerList;
