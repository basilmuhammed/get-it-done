import { MailIcon, PhoneMissedCallIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const ContactCard = () => {
  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 p-3 rounded-lg shadow-sm sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            layout="fill"
            objectFit="cover"
            alt="profile"
          />
        </div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium">
          Adele vaxon
        </h2>
        <p className="text-yellow-500 inline-flex text-sm">
          Plumber - 3 year experienced
        </p>
        <p className="leading-relaxed text-base font-semibold">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <div className="mt-3 text-yellow-500 inline-flex items-end">
          <PhoneMissedCallIcon className="h-5 w-5 mx-1 text-black" />
          <MailIcon className="h-5 w-5 mx-2 text-black" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
