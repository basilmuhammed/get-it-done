import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellIcon } from "@heroicons/react/outline";
import { getAuth, signOut } from "firebase/auth";

function NavBar() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [userDetails, setUserDetails] = useState(user);

  const userSignOut = async () => {
    // setUserDetails(null);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("🚀 ~ log-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <div className="mr-5 hover:text-gray-900">
            <Link href="/">Home</Link>
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Link href="/#services">Services</Link>
          </div>
          <div className="mr-5 hover:text-gray-900">
            <Link href="/#hero">About</Link>
          </div>
        </nav>
        <div className="flex order-first lg:order-none lg:w-1/5 h-8 items-center text-gray-900 lg:items-center lg:justify-center">
          <Link href="/" passHref>
            <a>
              <Image
                src="/get it done.svg"
                layout="intrinsic"
                width={180}
                height={120}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-2/5 flex justify-center items-center lg:justify-end ml-5 lg:ml-0">
          {userDetails ? (
            <div className="flex cursor-pointer group relative">
              <a className="inline-flex items-center font-semibold py-1 px-3 mx-3 text-base mt-4 md:mt-0">
                {userDetails.email}
              </a>
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                  layout="fill"
                  objectFit="cover"
                  alt="profile"
                />
              </div>
              <div className="group-hover:flex flex-col hidden bg-white shadow-lg absolute top-10 right-0 w-36 h-36 rounded-md p-4 z-20">
                <div className="mt-4 p-2 font-semibold hover:bg-yellow-500 hover:text-slate-800 rounded-md">
                  Account
                </div>
                <Link href="/login" passHref>
                  <div
                    className="p-2 font-semibold hover:bg-yellow-500 hover:text-slate-800 rounded-md"
                    onClick={userSignOut}
                  >
                    Log Out
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <Link href="/login" passHref>
              <button className="inline-flex items-center font-semibold border-yellow-400 border-2 bg-none py-1 px-3 mx-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">
                Log In
              </button>
            </Link>
          )}
          <div classNames="relative">
            <details
              className="open:bg-white open:absolute open:rounded-lg open:top-20 open:z-10 open:right-10 open:ring-1 open:ring-black/5 flex"
              close
            >
              <summary className="leading-6 flex select-none">
                <BellIcon className="h-6 w-6 m-4 text-center ml-4 group-open text-black" />
              </summary>
              <div className="mt-1 text-sm leading-6 p-6 w-[25vw] h-[40vh] overflow-auto">
                <p className="mb-3">click on the bell icon to close</p>
                <div className="mb-3 bg-yellow-50 hover:font-medium hover:text-black py-4 rounded-md p-2 shadow-sm">
                  <p className="text-align-left text-sm">sample text</p>
                </div>
                <div className="mb-3 bg-yellow-50 hover:font-medium hover:text-black py-4 rounded-md p-2 shadow-sm">
                  <p className="text-align-left text-sm">sample text</p>
                </div>
                <div className="mb-3 bg-yellow-50 hover:font-medium hover:text-black py-4 rounded-md p-2 shadow-sm">
                  <p className="text-align-left text-sm">sample text</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
