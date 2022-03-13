import React from 'react';
import { IoEyeOutline, IoLogoGithub } from "react-icons/io5";
import { Projects } from '../data/projects';

const Project = () => {
    return (
        <section
            id="projects"
            className="flex flex-wrap items-center justify-evenly my-24 gap-4">
            {Projects && Projects.map((item) => (
                <div
                    key={item.id}
                    className="border border-zinc-800 rounded-md p-2 w-[275px] md:max-w-[275px]  hover:border-zinc-600 duration-100 ease-in-out">
                    <p
                        className="text-lg text-textBase font-medium uppercase text-center">
                        {item.name.length >= 25 ? `${item.name.slice(0, 20)}...` : item.name}
                    </p>
                    <img src={item.imageSrc} className="w-full h-[200px] rounded-md my-4 object-cover " alt="img-project" />
                    <div className="flex flex-1 justify-between">
                        <p className=" text-lg text-gray-300 ">
                            Technologies
                            <span
                                className="block text-sm text-textBase">
                                {item.techs.length >= 25 ? `${item.techs.slice(0, 20)}...` : item.techs}
                            </span>
                        </p>
                        <div className="flex justify-around">
                            <a target="blank" href={item.demo}>
                                <IoEyeOutline className="text-2xl text-gray-500 hover:text-textBase mt-3 " />
                            </a>
                            <a target="blank" className="ml-2" alt="source code" href={item.github}>
                                <IoLogoGithub className="text-2xl text-gray-500 hover:text-textBase mt-3 " />
                            </a>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    )
}

export default Project