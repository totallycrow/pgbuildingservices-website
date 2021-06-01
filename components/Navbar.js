import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="text-gray-600  w-full ">
      <nav
        className="h-10 bg-blue-500 z-10 shadow-2xl 
      
      // Frosted Navbar

      bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-md"
      >
        <div className="container mx-auto h-full flex align-middle items-center justify-between ">
          <div className="p-2 font-roboto text-2xl">PGBS</div>
          <div className="text-sm flex align-middle items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
            Request a Free Quote: 07772222999
          </div>
          <div className="flex justify-evenly  w-6/12 hidden md:flex">
            <h1 className="">Home</h1>
            <h1>My Projects</h1>
            <h1>About Me</h1>
          </div>
          <div>
            <MenuIcon
              className="h-10 md:hidden"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                console.log(mobileOpen);
              }}
            />
          </div>
        </div>
      </nav>
      <div
        className={
          mobileOpen
            ? "display:block container bg-blue-800 bg-opacity-75 mx-auto h-40 flex justify-center items-center content-center md:hidden text-center transform ease-in-out duration-500"
            : "hidden"
        }
      >
        <div classname="">
          <div className="py-2">Home</div>
          <div className="py-2">Work</div>
          <div className="py-2">About Me</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
