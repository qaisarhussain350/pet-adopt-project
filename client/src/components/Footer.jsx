import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPaw } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-white pt-16 pb-8 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute -top-[50%] left-[20%] w-[60%] h-[60%] bg-purple-900/40 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold font-serif mb-4">
                            <FaPaw className="text-purple-500" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">PetAdoption</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We pride ourselves on connecting ethically raised, loving pets with premium homes. Experience the VIP difference.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-purple-200">Explore</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/pets" className="hover:text-white transition-colors">Available Pets</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-purple-200">Legal</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/adoption-policy" className="hover:text-white transition-colors">Adoption Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-purple-200">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} PetAdoption Premium. All rights reserved.</p>
                    <div className="flex items-center space-x-1 mt-2 md:mt-0">
                        <span>Crafted with</span>
                        <span className="text-red-500">❤️</span>
                        <span>for our four-legged friends.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
