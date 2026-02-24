import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/hrsl73')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    if (!data) return <div>Loading...</div>

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
        <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center hover:scale-105 transition duration-300">
            
            <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-56 h-56 mx-auto rounded-full border-4 border-cyan-500 shadow-2xl"
            />

            <h2 className="mt-8 text-4xl font-bold">{data.name}</h2>
            <p className="text-gray-400 mt-3 text-xl">@{data.login}</p>

            <div className="flex justify-center gap-14 mt-10 text-2xl">
            <div>
                <p className="font-bold text-cyan-400">{data.followers}</p>
                <p className="text-base text-gray-400 mt-1">Followers</p>
            </div>
            <div>
                <p className="font-bold text-cyan-400">{data.following}</p>
                <p className="text-base text-gray-400 mt-1">Following</p>
            </div>
            <div>
                <p className="font-bold text-cyan-400">{data.public_repos}</p>
                <p className="text-base text-gray-400 mt-1">Repos</p>
            </div>
            </div>

            <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg px-8 py-3 rounded-xl transition"
            >
            Visit Profile
            </a>
        </div>
        </div>
    );
}

export default Github