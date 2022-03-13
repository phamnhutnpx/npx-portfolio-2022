import React from 'react'
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24">
            {/* img box */}
            <div className="w-full h-420 flex items-center justify-center">
                <div className="w-275 h-340 bg-zinc-400 rounded-md relative">
                    <i className="npx-avt  w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                        src="#"
                        alt=""
                    />
                </div>
            </div>
            {/* text content */}
            <div className="w-full h-420 flex flex-col items-center justify-center" >
                <p className="text-lg text-textBase text-center">
                    Hello world! 👋<br />
                    My name is Pham Xuan Nhut, and I am a third year student at Ho Chi Minh University Of Transport. I have a strong passion about Front-end web development, and I've learnt Front-end for six months and I have finished courses web development at F8.<br />
                    I learned programming with the keyword "how to..." !
                </p>
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                    <a target="_blank" href="https://i.topcv.vn/phamxuannhut?ref=5303038" className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Download
                    </a>
                </motion.button>
            </div>
        </section>
    )
}

export default About