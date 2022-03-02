import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link href="/login" passHref>
            <button className="inline-flex items-center font-semibold border-yellow-400 border-2 bg-none py-1 px-3 mx-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">
              Log In
            </button>
          </Link>
          {/* <button className="inline-flex items-center font-semibold bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign Out
          </button> */}
          {/* <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-sm mt-4 md:mt-0">
            Log as constructor
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
