import { useState } from 'react';
import { Spline } from '@splinetool/react-spline';
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";
import npxAvt from './images/npxAvt.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from "framer-motion";

import { Experience } from './data/experience';
import { Projects } from './data/projects';
import { Contact } from './data/contact';
function App() {
  // active icon menu mobile
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>

      <div className="flex w-screen  min-h-screen flex-col relative  pb-20 items-center justify-center bg-primary">
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
              <motion.a
                whileTap={{ scale: 0.8 }}
                href="#download"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
              >
                Download CV
              </motion.a>
            </div>
            <div

              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}>
              <IoMenu className="text-2xl text-textBase" />
              {isActive && (
                <div

                  // initial={{ opacity: 0, scale: 0.5 }}
                  // animate={{ opacity: 1, scale: 1.1 }}
                  // exit={{ opacity: 0, scale: 0.5 }}
                  // transition={{ delay: "0.1s", type: "spring" }}
                  className="p-4 w-275 bg-navBar rounded-lg fixed 
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
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href="#download"
                    className="m-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border  px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                    onClick={() => setIsActive(false)}
                  >
                    Download CV
                  </motion.a>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="relative " id="home">
          {/* <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" /> */}
          <Spline scene="https://prod.spline.design/HLWD74JDZXxz8IdE/scene.spline" className="" />
          <div className="absolute w-full justify-center items-center bottom-10 flex">
            <div className="shadow-md p-4 flex items-center bg-zinc-900 rounded-3xl">
              <BsChevronDoubleDown className="text-textBase" />
            </div>
          </div>
        </div>

        {/* Main */}
        <main className="w-[80%] mt-5">
          {/* Section */}
          <section id="about" className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24">
            {/* img box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-slate-500 rounded-md relative">
                <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                  src={npxAvt}
                  alt=""
                />
              </div>
            </div>
            {/* text content */}
            <div className="w-full h-420 flex flex-col items-center justify-center" >
              <p className="text-lg text-textBase text-center">
                lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, lobortis lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, lobortis lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
              </p>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </motion.button>
            </div>
          </section>
          {/* timeline content */}
          <section className="">
            <VerticalTimeline>
              {Experience && Experience.map((item) => (

                <VerticalTimelineElement
                  key={item.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(21,24,34)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,34)' }}
                  date="09/2019 - 11/2020"
                  iconStyle={{ background: 'rgb(21,24,34)', color: '#fff' }}
                  icon={item.iconsSrc}
                >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}

            </VerticalTimeline>
          </section>
          {/* main project */}
          <section id="projects" className="flex flex-wrap items-center justify-evenly my-24 gap-4">
            {Projects && Projects.map((item) => (

              <div
                key={item.id}
                className="border border-zinc-800 rounded-md p-2 w-[275px] md:max-w-[275px]  hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-lg text-textBase font-medium uppercase text-center">
                  {item.name.length >= 25 ? `${item.name.slice(0, 20)}...` : item.name}
                </p>
                <img src={item.imageSrc} className="w-full h-[200px] rounded-md my-4 object-cover cursor-grabbing" alt="" />
                <div className="flex flex-1 justify-between">
                  <p className=" text-lg text-gray-300 ">
                    Technologies
                    <span className="block text-sm text-textBase">{item.techs}</span>
                  </p>
                  <a className="" alt="" href={item.github}>
                    <div>
                      <IoLogoGithub className="text-3xl text-textBase mt-3 " />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </section>
          {/* main contacts */}
          <section
            id="contact"
            className="flex flex-col items-center justify-evenly w-full my-24">
            <p className="text-2xl text-gray-400 capitalize" >Follow me on</p>
            <div className="flex flex-row py-3 ">
              {Contact && Contact.map((item) => (

                <div key={item.id} className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4 m-3">
                  <a href={item.link} className="w-full min-w-[200px] md:w-auto px-3 md:px-8 py-5 border border-zinc-800 hover:border-zinc-600 rounded-2xl cursor-pointer flex items-center justify-center gap-3 duration-100 ease-in-out">
                    <span className="text-textBase text-3xl ">{item.iconSrc}</span>
                    <p className="text-textBase text-lg">{item.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
