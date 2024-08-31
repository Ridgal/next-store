import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/capacitorjs.svg";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center text-gray-600 px-32 py-4 text-xl">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={logo}
          alt="Picture of the author"
          width={180}
          height={150}
        />
      </div>
      <div className="flex justify-center gap-64">
        <nav className="flex items-center list-none text-base gap-12">
          <li>
            <Link className="text-gray-600 hover:text-black" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-black" href="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-black" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-black" href="/">
              FAQ
            </Link>
          </li>
        </nav>
        <button
          type="button"
          className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-3xl text-base px-4 py-2 mb-2"
        >
          Indigo
        </button>
      </div>
    </header>
  );
};

export { Header };
