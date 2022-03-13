import React from 'react'
import About from './About';
import Timeline from './Timeline';
import Project from './Project';
import Contact from './Contact';


const Main = () => {
    return (
        <main className="w-[80%] mt-5 mx-auto">
            {/* main about */}
            <About />
            {/* main timeline */}
            <Timeline />
            {/* main project */}
            <Project />
            {/* main contact */}
            <Contact />
        </main>
    )
}

export default Main;