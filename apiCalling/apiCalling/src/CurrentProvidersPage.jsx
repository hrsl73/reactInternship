import { useEffect, useState } from 'react'


function CurrentProvidersPage(){

    const [currProvider, setCurrprovider] = useState([])
    const [loading, setLoading] = useState(false)

        useEffect(() => {
            fetch("https://api.apis.guru/v2/{provider_name}.json")
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

}
export default CurrentProvidersPage
