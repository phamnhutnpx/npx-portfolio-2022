import { useState } from 'react';
import { Spline } from '@splinetool/react-spline';
import { IoMenu, IoCodeWorking } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";
import npxAvt from './images/npxAvt.jpg'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Experience } from './data/experience'

function App() {
  // active icon menu mobile
  const [isActive, setIsActive] = useState(false);

  return (
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
        {/* <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" /> */}
        <Spline scene="https://prod.spline.design/HLWD74JDZXxz8IdE/scene.spline" />
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
            <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download
              </span>
            </button>
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
      </main>
    </div>
  );
}

export default App;
