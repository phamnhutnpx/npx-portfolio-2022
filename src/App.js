import react, { useState } from 'react';
import { Spline } from '@splinetool/react-spline';
import { IoMenu } from "react-icons/io5";

function App() {
  // active icon menu mobile
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex w-screen h-screen min-h-screen flex-col relative  pb-20 items-center justify-center bg-primary">
      {/* Navigate */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">
            NPX portfolio
          </p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
              Home
            </a>
            <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
              About
            </a>
            <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
              Projects
            </a>
            <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
              Contact
            </a>
            <a
              href="#download"
              className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
            >
              Download CV
            </a>
          </div>
          <div className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
            {isActive && (
              <div className="p-4 w-275 bg-navBar rounded-lg fixed 
            top-20 right-10 flex flex-col items-center justify-evenly gap-6">
                <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}>
                  Home
                </a>
                <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}>
                  About
                </a>
                <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}>
                  Projects
                </a>
                <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}>
                  Contact
                </a>
                <a
                  href="#download"
                  className="m-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download CV
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="relative " id="home">
        <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
        {/* <Spline scene="https://draft.spline.design/TMv0D2w0UW1kuudl/scene.spline" className="bg-primary" /> */}

      </div>
    </div>
  );
}

export default App;
