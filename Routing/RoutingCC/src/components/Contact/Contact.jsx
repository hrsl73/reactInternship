import React from "react";
import Footer from '../Footer/Footer'

export default function Contact() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black p-6">
        <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow p-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Side */}
            <div>
                <h1 className="text-3xl text-white font-bold mb-2">Get in touch</h1>
                <p className="text-white mb-6">
                Fill in the form to start a conversation
                </p>

                <p className="mb-2 text-white"><strong>Address:</strong> Street, City</p>
                <p className="mb-2 text-white"><strong>Phone:</strong> +91 9876543210</p>
                <p className="mb-2 text-white"><strong>Email:</strong> info@example.com</p>
            </div>

            {/* Right Side Form */}
            <form className="flex flex-col gap-4 text-white">
                <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded text-white"
                />

                <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded text-white"
                />

                <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded"
                />

                <button
                type="submit"
                className="bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition"
                >
                Submit
                </button>
            </form>

            </div>

        </div>
        </div>
    );
}