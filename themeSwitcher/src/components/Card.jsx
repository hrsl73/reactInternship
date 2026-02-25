import profile from '../assets/profile.png';

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src={profile} alt="product_image1" />
            <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Harshil Mayani
                    </h5>
                    <p className="text-gray-700 dark:text-gray-400">
                        frontend developer
                    </p>
            </div>
        </div>
    );
}
