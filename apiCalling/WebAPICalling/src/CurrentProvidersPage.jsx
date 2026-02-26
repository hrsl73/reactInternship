import { useEffect, useState } from "react";

function CurrentProvidersPage({ provider }) {

    const [providerDetails, setProviderDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.apis.guru/v2/${provider}.json`)
            .then(res => res.json())
            .then(data => {
                setProviderDetails(data);
                setLoading(false);
                console.log("Fetched inside CurrentProvidersPage:", data);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [provider]);

    if (loading) return <p className="text-center mt-4">Loading details...</p>;

    return (
        <div className="mt-6 bg-white text-black p-4 rounded">
            <h2 className="text-xl font-bold mb-2">
                Details of {provider}
            </h2>

            {providerDetails?.apis &&
                Object.entries(providerDetails.apis).map(([apiName, apiData]) => (
                    <div key={apiName} className="mb-6 p-4 border rounded bg-gray-100">
                    <h3 className="text-lg font-bold">{apiData.info.title}</h3>

                    <p className="text-sm text-gray-600">
                        Version: {apiData.info.version}
                    </p>

                    <p className="mt-2">
                        Description: {apiData.info.description}
                    </p>

                    <p className="mt-2">
                        OpenAPI Version: {apiData.openapiVer}
                    </p>

                    <a href={apiData.info.contact.url} target="_blank" rel="noreferrer" className="underline hover:text-purple-700">
                            Visit Site
                    </a>
                    </div>
                ))}
            {console.log(providerDetails)}
        </div>
    );
}

export default CurrentProvidersPage;