import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/oreilly.svg?url";
import avatar from "../../../public/nextjs-icon.svg?url";
import basket from "../../../public/basket.svg?url";

const Header = () => {
  return (
    <header className="w-full container sticky top-0 flex justify-between items-center text-gray-600 text-xl backdrop-blur-md border-b border-gray-300">
      <nav className="flex justify-between items-center w-full">
        <Image
          src={logo}
          className="w-32 h-14"
          alt="Picture of the author"
          width="0"
          height="0"
          sizes="100vw"
          priority
        />
        <div className="flex justify-center items-center list-none gap-12">
          <li>
            <Link className="text-lg text-gray-800 hover:text-black" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-lg text-gray-600 hover:text-black" href="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="text-lg text-gray-600 hover:text-black" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="text-lg text-gray-600 hover:text-black" href="/">
              FAQ
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-4 pl-20">
          <Image
            src={basket}
            alt="basket"
            className="w-5 h-5 cursor-pointer"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            src={avatar}
            alt="Rounded avatar"
            className="w-8 h-8 rounded-md object-cover cursor-pointer"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </nav>
    </header>
  );
};

export { Header };
