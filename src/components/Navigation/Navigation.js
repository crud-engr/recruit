import Logo from "../Logo/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Button/Button";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-sm w-full top-0 left-0 fixed z-50 mb-12">
      <div className="md:flex bg-white py-5 md:p-4 px-7 items-center justify-between">
        <div className="flex items-center px-2 mx-2">
          <Link to="/" className="align-middle">
            <Logo />
          </Link>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl absolute right-9 top-5 cursor-pointer md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:gap-4 md:items-center pb-12 md:pb-0 absolute md:static bg-white md:z-auto z[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-100 ease-in ${
            menuOpen
              ? "top-25 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-100"
          }`}
        >
          <li className="md:ml-5 my-7 md:my-0">
            <Link to="/" className="" onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </Link>
          </li>
          <li className="md:ml-5 my-7 md:my-0">
            <Link to="/" className="" onClick={() => setMenuOpen(!menuOpen)}>
              About
            </Link>
          </li>
          <li className="md:ml-5 my-7 md:my-0">
            <Link to="/" className="text-purple" onClick={() => setMenuOpen(!menuOpen)}>
              Find Jobs
            </Link>
          </li>
          <li className="md:ml-5 my-7 md:my-0">
            <Link to="/" className="" onClick={() => setMenuOpen(!menuOpen)}>
              Profile
            </Link>
          </li>

          <Link to="/">
            <Button onClick={() => setMenuOpen(!menuOpen)}>Recruiter?</Button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
