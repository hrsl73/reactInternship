import { Link } from "react-router-dom";
import ProfileLogo from "../../assets/profile.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-10">
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            
            {/* Logo Section */}
            <div>
                <Link to="/" className="flex items-center gap-4 group">
                <img
                    src={ProfileLogo}
                    className="h-16 w-16 rounded-full border-2 border-gray-600 group-hover:scale-105 transition duration-300"
                    alt="Logo"
                />
                <span className="text-xl font-semibold text-white group-hover:text-cyan-400 transition">
                    Harshil Mayani
                </span>
                </Link>
                <p className="mt-4 text-sm text-gray-400 max-w-xs">
                Frontend Developer building modern and responsive web applications.
                </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-10">

                {/* Resources */}
                <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Resources
                </h2>
                <ul className="space-y-3">
                    <li>
                    <Link to="/" className="hover:text-cyan-400 transition">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="hover:text-cyan-400 transition">
                        About
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="hover:text-cyan-400 transition">
                        Contact
                    </Link>
                    </li>
                </ul>
                </div>

                {/* Follow Me */}
                <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Follow Me
                </h2>
                <ul className="space-y-3">
                    <li>
                    <a
                        href="https://github.com/hrsl73"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        GitHub
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.linkedin.com/in/harshil-mayani-8995a0251/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        LinkedIn
                    </a>
                    </li>
                </ul>
                </div>

            </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <a
                href="https://github.com/hrsl73"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
            >
                Harshil Mayani
            </a>
            . All rights reserved.
            </div>

        </div>
        </footer>
    );
}