import { useEffect, useState } from 'react'

function ProvidersPage(){

    const [providers, setProviders ] = useState([])

    const [loading, setLoading] = useState([])

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
        <div style={{ padding: "20px" }}>
        
        <h1>API Providers List</h1>

        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {providers.map((provider, index) => (
                <li key={index}>{provider}</li>
            ))}
            </ul>
        )}

        </div>
    )
}

export default ProvidersPage