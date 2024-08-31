import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-4 text-7xl text-center font-extrabold leading-none tracking-tight text-gray-900">
        Shaping a world with <br /> reimagination.
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 mt-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro soluta
        quo debitis voluptas pariatur officia consectetur culpa facilis
        reprehenderit architecto natus optio amet ab unde et nostrum deleniti
        tempora, sint minima aut ut corporis, repudiandae excepturi maxime?
        Laudantium dolorum quaerat dignissimos doloremque beatae? Illum ab non
        labore aliquam voluptates ipsa atque ullam, perspiciatis quas, alias
        temporibus animi, delectus sint culpa.
      </p>
      <div className="">
        <Link
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-12 text-base font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Learn more
        </Link>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-2xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export { Hero };
