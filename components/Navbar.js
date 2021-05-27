import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="text-gray-600 fixed w-full ">
      <nav
        className="h-12 bg-blue-300 z-10 shadow-2xl 
      
      // Frosted Navbar
      
      bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md"
      >
        <div className="container mx-auto h-full flex align-middle items-center justify-between ">
          <div className="p-2 font-roboto text-2xl">PGBS</div>
          <div className="text-sm">Request a Free Quote: 07772222999</div>
          <div className="flex justify-evenly  w-6/12 hidden md:flex">
            <h1 className="">menu</h1>
            <h1>test</h1>
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
