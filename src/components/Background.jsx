import React from 'react';
import { Spline } from '@splinetool/react-spline';
import { BsChevronDoubleDown } from "react-icons/bs";

const Background = () => {
    return (
        <div className="relative " id="home">
            {/* <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" /> */}
            <Spline scene="https://prod.spline.design/HLWD74JDZXxz8IdE/scene.spline" className="" />

            <div className="absolute w-full justify-center items-center bottom-10 flex">
                <div className="shadow-md p-4 flex items-center bg-zinc-900 rounded-3xl">
                    <BsChevronDoubleDown className="text-textBase" />
                </div>
            </div>
        </div>
    )
}

export default Background;