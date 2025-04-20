import Logo from "../logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FcMenu } from "react-icons/fc";


const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const links = (
    <>
      <li>
        <NavLink>News</NavLink>
      </li>
      <li>
        <NavLink>Destination</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="">
      <div className={`navbar bg-transparent -translate-x-1/2 left-1/2 absolute w-11/12 mx-auto z-50 transition-all duration-300 ${
    scrolled ? "bg-black z-50" : "bg-transparent"

  }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn text-2xl btn-ghost lg:hidden">
            <FcMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-white bg-black dropdown-content rounded-box  mt-3 w-52 p-2 shadow z-[999]"
            >
              {links}
            </ul>
          </div>
          <div className="text-white">
            <img className="md:w-36 w-28 invert" src={Logo} alt="" />
          </div>
        </div>
        <label className="input hidden md:hidden lg:flex w-full bg-white/10 backdrop-blur-xl text-white border-white ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow bg-transparent text-white placeholder-white focus:outline-none" placeholder="Search your destination" />
            
          </label>
        <div className="navbar-center hidden lg:flex">
        
          <ul className="menu menu-horizontal text-white px-1">{links}</ul>
          
        </div>
        <div className="navbar-end">
          <a className="btn bg-primary border-transparent">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
