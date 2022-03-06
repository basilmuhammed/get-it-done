import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactCard = ({ data }) => {
  return (
    <div className="flex items-center w-11/12 mx-auto border-b pb-10 mb-10 p-8 rounded-lg shadow-md flex-col">
      <div className="sm:w-36 sm:h-36 h-20 w-full flex rounded-xl justify-start bg-indigo-100 mb-3 text-indigo-500 flex-shrink-0 overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            layout="fill"
            objectFit="cover"
            alt="profile"
          />
        </div>
      </div>
      <h2 className="text-gray-900 text-lg title-font font-medium">
        {data.name}
      </h2>
      <div className="flex">
        <Link href={`mailto:trail@trail.com`} passHref className="pr-3">
          <p className="text-gray-600 text-sm cursor-pointer hover:text-yellow-500 mr-3">
            {data.email}
          </p>
        </Link>
        <Link href={`tel:123`} passHref>
          <p className="text-gray-600 text-sm pb-2 cursor-pointer hover:text-yellow-500">
            +91{data.contactNo}
          </p>
        </Link>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <p className="text-gray-700 inline-flex text-sm">
          {data.experience} year experienced
        </p>
        <p className="text-gray-400 italic text-xs pb-2">
          added on {new Date(data.id).toString()}
        </p>
        <p className="text-gray-400 italic text-xs pb-2">
          Available from on {data.availableFrom}
        </p>
        <p className="text-sm">{data.about}</p>
      </div>
    </div>
  );
};

export default ContactCard;
