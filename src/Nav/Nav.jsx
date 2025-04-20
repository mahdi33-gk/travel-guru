import Logo from "../logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
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
      <div className="navbar bg-transparent fixed top-0 inset-x-0 w-11/12 mx-auto z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-white bg-black dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-white">
            <img className="w-44 invert" src={Logo} alt="" />
          </div>
        </div>
        <label className="input sm:hidden md:hidden lg:flex w-full bg-white/10 backdrop-blur-xl text-white border-white ">
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
          <a className="btn bg-primary border-transparent">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
