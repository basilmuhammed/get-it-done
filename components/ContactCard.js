import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const ContactCard = ({ data, onDelete }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [requested, setRequested] = useState(false);

  const onDeleteClick = useCallback(async () => {
    onDelete(data.workerData.category, data.docId);
  }, [onDelete, data.docId, data.workerData.category]);

  const onRequestService = useCallback(async () => {
    const db = getDatabase();
    set(
      ref(
        db,
        `notification/${data.workerData.addedById}/` + data.workerData.id
      ),
      {
        workerMail: data.workerData.name,
        workerName: data.workerData.email,
        message: `${user.email} wants to Request the ${data.workerData.name} - ${data.workerData.email} for their ${data.workerData.category} work please respond to them`,
      }
    ).then(() => setRequested(true));
  }, [data.workerData, user.email]);

  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 overflow-hidden">
      <span className="w-[25%] h-[25%] md:w-[30%] md:h-auto md:rounded-none rounded-full mx-auto md:mx-0 relative bg-red-400">
        <Image
          className="absolute"
          src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </span>
      <div className="pt-6 md:p-5 text-center md:text-left space-y-4 md:w-[80%]">
        <figcaption className="font-medium">
          <div className="text-sky-500  text-xl">
            {data.workerData.name.toUpperCase() || "-"}
          </div>
          <div className="text-slate-700 dark:text-slate-500 text-sm">
            {data.workerData.email || "-"}
          </div>
          <div className="text-slate-700 dark:text-slate-500 text-sm">
            {data.workerData.contactNo || "-"}
          </div>
        </figcaption>
        <blockquote className="w-full">
          <p className="text-sm font-medium max-h-[50px] whitespace-normal break-all overflow-auto">
            {data.workerData.about ||
              "!Oops there is no about details added for this user"}
          </p>
          <p className="text-xs font-semibold">
            Have {data.workerData.experience} year experience in this field
          </p>

          <p className="text-xs font-semibold">
            Available from on {data.workerData.availableFrom}
          </p>
        </blockquote>
        <div className="">
          {requested ? (
            <button
              className="p-2 border-2 rounded-md text-slate-800 text-xs flex-end bg-slate-300"
              disabled
            >
              Requested
            </button>
          ) : (
            <button
              className="p-2 border-2 rounded-md text-white text-xs flex-end bg-slate-800 "
              onClick={onRequestService}
            >
              Request for Service
            </button>
          )}
          {user && user.email == data.workerData.addedBy && (
            <button
              className="p-2 border-2 rounded-md text-white text-xs flex-end bg-slate-800"
              onClick={onDeleteClick}
            >
              Delete User
            </button>
          )}
          <p className="text-xs font-mono text-right">
            added on {moment(data.workerData.id).format("MMM Do YYYY")}
            <br></br>
            added by {data.workerData.addedBy}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default ContactCard;
