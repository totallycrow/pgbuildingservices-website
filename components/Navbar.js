import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <nav className="h-12 bg-gray-400 flex">
        <div className="container bg-gray-300 mx-auto h-full flex align-middle items-center justify-between">
          <div>logo</div>
          <div>Request a Free Quote: 07772222999</div>
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
            ? "display:block container bg-gray-600 bg-opacity-75 mx-auto h-40 flex justify-center items-center content-center md:hidden"
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
