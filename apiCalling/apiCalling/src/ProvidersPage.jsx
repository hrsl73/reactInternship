// just to render the list of api providers.

import { useEffect, useState } from 'react'

function ProvidersPage(){

    const [providers, setProviders ] = useState([])
    const [loading, setLoading] = useState(false)

    // const [currProvider, setCurrprovider] = useState([])


    useEffect(() => {
    fetch("https://api.apis.guru/v2/providers.json")
        .then((response) => response.json())
        .then((data) => {
        
        const providersArray = Object.values(data.data);
        setProviders(providersArray);
        setLoading(false);
        })
        .catch((error) => {
        console.error("Error fetching providers:", error);
        setLoading(false);
        });
    }, []);

    return(
        <div className="flex justify-end  bg-blue-300 ">
            <div className="overflow-y-auto overflow-y-scroll bg-blue-600 p-4 my-{3}">
                <h1 className="flex justify-center text-3xl font-bold">API Providers List</h1><hr></hr>
                <h2 className="flex justify-center font-bold py-{3}">Select Provider</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="flex flex-col gap-4 list-disc list-outside pl-5 space-y-2">
                {providers.map((provider, index) => (
                    <li id="provider" className="space-y-4"key={index}>{provider}</li>
                ))}
                </ul>
            )}
            </div>
        </div>
    )
}
export default ProvidersPage