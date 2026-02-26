import { useState } from 'react'
import ProvidersPage from './ProvidersPage.jsx'

function MainPage() {

    const [clicked, setClicked] = useState(false)

    return (
        <div>
            {clicked ?  <ProvidersPage/> : 
            <div className="flex items-center justify-center h-screen bg-blue-300">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setClicked(true)}>
                    Explore more APIs
                </button>
            </div> }
        </div>
    )
}

export default MainPage