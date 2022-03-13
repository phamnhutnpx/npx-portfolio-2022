import React from 'react';
import { Contact as dataContact } from '../data/contact';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-evenly w-full my-24">
            <p className="text-2xl text-gray-400 capitalize" >Follow me on</p>
            <div className="flex items-center justify-evenly w-full flex-wrap gap-4 mt-8">
                {dataContact && dataContact.map((item) => (
                    <motion.a
                        whileTap={{ scale: 0.8 }}
                        target="blank"
                        key={item.id}
                        href={item.link}
                        className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                        <span className="text-textBase text-3xl ">{item.iconSrc}</span>
                        <p className="text-textBase text-lg">{item.name}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}

export default Contact;