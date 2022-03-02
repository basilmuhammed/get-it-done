import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font" id="hero">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="relative w-[98vw] h-[60vh] mb-10 rounded overflow-hidden">
          <Image
            alt="hero"
            src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            priority={1}
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
            Boost up your construction
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            aliquid provident dolorem dignissimos ipsa optio voluptate est
            accusantium quas. Autem nostrum fugit excepturi accusamus amet
            repellat doloremque eligendi culpa eveniet.
          </p>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label className="leading-7 text-sm text-gray-600">
                Search here
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-black font-medium bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
