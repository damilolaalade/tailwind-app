import { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ ...otherProps }) => {
  const [active, setActive] = useState(false);

  const Toggle = () => {
    setActive(!active);
  };

  return (
    <header className="bg-white relative px-2.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between ">
        <div className="w-16">
          <img src={Logo} alt="CapadociaLogo" className="w-full" />
        </div>

        <div
          onClick={Toggle}
          className={`md:hidden uppercase`}
        >Menu</div>

        <nav
          className={`
        ${!active && "hidden"}
        absolute flex flex-col bg-white top-full w-full left-0 z-20
        md:static md:w-auto md:flex
        `}
        >
          <ul className="md:flex-row md:flex">
            <li className="list-none md:mr-5">
              <Link
                to="/"
                className="flex w-full text-base uppercase cursor-pointer hover:text-orange-600 pt-2.5 px-2.5"
              >
                Page
              </Link>
            </li>
            <li className="list-none md:mr-5">
              <Link
                to="/"
                className="flex w-full text-base uppercase cursor-pointer hover:text-orange-600 pt-2.5 px-2.5"
              >
                Page
              </Link>
            </li>
            <li className="list-none md:mr-5">
              <Link
                to="/"
                className="flex w-full text-base uppercase cursor-pointer hover:text-orange-600 pt-2.5 px-2.5"
              >
                Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
