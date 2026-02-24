import React from 'react'
import { Link } from 'react-router-dom';
import ProfileLogo from "../../assets/profile.png";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
        
        <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-900 p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">
            
            <img
            src={ProfileLogo}
            alt="Profile"
            className="w-56 h-56 rounded-full border-4 border-white shadow-xl object-cover"
            />

            <div className="text-center md:text-left">
            <h1 className="text-5xl text-white font-bold">
                Harshil Mayani
            </h1>

            <h2 className="text-2xl text-gray-300 font-semibold mt-4">
                Frontend Developer
            </h2>

            <p className="text-lg text-gray-400 mt-4 max-w-md">
                Building modern, responsive and scalable web applications using React & Tailwind.
            </p>
            </div>

        </div>

        </div>
    );
}