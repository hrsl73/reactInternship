import React from 'react'
import ProfileLogo from "../../assets/profile.png";

export default function About() {
    return (
        <div className="py-16 bg-black">
            <div className="container m-auto px-6 text-gray-900 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={ProfileLogo}
                            alt="image"
                            className="rounded-full w-90 h-90 border-3 border-white"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Crafting Modern Web Experiences with React
                    </h2>

                    <p className="mt-6 text-white text-lg leading-relaxed">
                        Hi, I'm <span className="text-cyan-400 font-semibold">Harshil Mayani</span>, 
                        a passionate frontend developer focused on building clean, responsive and 
                        user-friendly web applications using React and Tailwind CSS. 
                        I enjoy turning ideas into interactive digital experiences.
                    </p>

                    <p className="mt-4 text-white text-lg leading-relaxed">
                        Currently, I'm sharpening my skills in modern React development — 
                        working with routing, APIs, component architecture and UI design systems. 
                        I believe in writing clean code, continuously learning, and building projects 
                        that solve real-world problems.
                    </p>

                    <p className="mt-4 text-white text-lg leading-relaxed">
                        My goal is to grow as a full-stack developer and contribute to impactful 
                        products that combine performance, design and usability.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}