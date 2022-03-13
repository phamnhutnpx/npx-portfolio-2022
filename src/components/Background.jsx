import React from 'react';
import { Spline } from '@splinetool/react-spline';
import { BsChevronDoubleDown } from "react-icons/bs";
import { dataBackground } from './../data/dataContainer';

const Background = () => {
    return (
        <div className="relative " id="home">
            {/* {console.log(dataBackground[0].linkBg)} */}
            {/* {dataBackground && dataBackground.map((item) => ( */}
            <span >
                {dataBackground[0].linkBg}
            </span>
            {/* ))} */}
            <div className="absolute w-full justify-center items-center bottom-10 flex">
                <div className="shadow-md p-4 flex items-center bg-zinc-900 rounded-3xl">
                    <BsChevronDoubleDown className="text-textBase" />
                </div>
            </div>
        </div>
    )
}

export default Background;