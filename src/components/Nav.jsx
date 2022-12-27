import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { cvDownload, optionMenu } from '../data/dataContainer';

const Nav = () => {
    // active icon menu mobile
    const [isActive, setIsActive] = useState(false);
    return (
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">NPX portfolio</p>
          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            {optionMenu &&
              optionMenu.map((item) => (
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  key={item.id}
                  href={`#${item.link}`}
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  {item.name}
                </motion.a>
              ))}
            {cvDownload &&
              cvDownload.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.linkCV}
                  whileTap={{ scale: 0.8 }}
                  target="blank"
                  className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                >
                  {item.name}
                </motion.a>
              ))}
          </div>
          <div
            // whileTap={{ scale: 0.8 }}
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-textBase" />
            {isActive && (
              <div
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1.1 }}
                // exit={{ opacity: 0, scale: 0.5 }}
                // transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed 
                            top-20 right-10 flex flex-col items-center justify-evenly gap-6"
              >
                {optionMenu &&
                  optionMenu.map((item) => (
                    <motion.a
                      whileTap={{ scale: 0.8 }}
                      key={item.id}
                      href={`#${item.link}`}
                      className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                      onClick={() => setIsActive(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                {cvDownload?.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.linkCV}
                    whileTap={{ scale: 0.8 }}
                    target="blank"
                    className="m-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                    onClick={() => setIsActive(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    );
}

export default Nav