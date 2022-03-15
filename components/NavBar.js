import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { BellIcon, CheckIcon } from "@heroicons/react/outline";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

function NavBar() {
  const auth = getAuth();
  const user = auth.currentUser;

  const userSignOut = async () => {
    // setUserDetails(null);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const getNotifications = useMemo(async () => {
    const snapArr = [];
    const dbRef = ref(getDatabase());
    const snap = await get(child(dbRef, `notification/${user && user.uid}`));
    if (snap.exists()) {
      snap.forEach((data) => {
        snapArr.push(data.val());
      });
    }
    return snapArr;
  }, []);

  if (user) {
    getNotifications.then((data) => {
      setNotifications(data);
    });
  }
  const [notifications, setNotifications] = useState();

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
          {user ? (
            <div className="flex cursor-pointer group relative">
              <a className="inline-flex items-center font-semibold py-1 px-3 mx-3 text-base mt-4 md:mt-0">
                {user.email}
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
          <div className="relative">
            <details
              className="open:bg-slate-800 open:absolute open:rounded-lg open:top-20 open:z-10 open:right-10 open:ring-1 open:ring-black/5 flex"
              close="true"
            >
              <summary className="leading-6 flex select-none">
                <BellIcon className="h-6 w-6 m-4 text-center ml-4 group-open text-yellow-500 animate-bounce" />
              </summary>
              <div className="mt-1 text-xs leading-6 p-6 w-[25vw] max-h-[60vh] overflow-auto">
                <p className="mb-3 text-white">
                  click on the bell icon to close
                </p>
                {notifications.map((data) => (
                  <div
                    className="mb-3 flex justify-between bg-yellow-50 hover:font-medium py-4 rounded-md p-2 shadow-sm"
                    key={data.message}
                  >
                    <p className="text-align-left text-sm fel">
                      {data.message}
                    </p>
                    <CheckIcon className="h-8 w-8 animate-pulse" />
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
