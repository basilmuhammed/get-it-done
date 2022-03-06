import Image from "next/image";
import { ChipIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <footer className="text-gray-600 body-font mt-20">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="relative w-[10rem] h-[5rem]">
          <Image
            src="/get it done.svg"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 get it done
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <ChipIcon className="h-6 w-6" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
