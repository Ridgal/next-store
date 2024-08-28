import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/nextjs-icon.svg";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center text-white px-32 py-4 text-xl">
      <div className="flex justify-center items-center gap-2">
        <Image src={logo} alt="Picture of the author" width={35} height={35} />
        <h2>Next</h2>
      </div>
      <div className="flex justify-center gap-64">
        <nav className="flex items-center list-none text-base gap-12">
          <li>
            <Link className="text-gray-300 hover:text-white" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-gray-300 hover:text-white" href="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="text-gray-300 hover:text-white" href="/">
              About
            </Link>
          </li>
        </nav>
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-3xl text-base px-4 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Purple
        </button>
      </div>
    </header>
  );
};

export { Header };
