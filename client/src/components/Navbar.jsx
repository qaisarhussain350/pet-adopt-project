import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaw, FaUserCircle, FaSignOutAlt, FaCrown } from 'react-icons/fa';

const Navbar = () => {
    const { user, defaultUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const currentUser = user || defaultUser;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 glass-nav h-20"
        >
            <div className="container mx-auto px-6 h-full flex justify-between items-center text-white">
                <Link to="/" className="flex items-center space-x-3 group">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-tr from-purple-600 to-pink-600 p-2 rounded-lg shadow-lg shadow-purple-500/30"
                    >
                        <FaPaw className="text-2xl text-white" />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold font-serif tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                            PetAdoption<span className="text-purple-400">.</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-purple-300 font-semibold opacity-80">Premium Center</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pets">Browse Pets</NavLink>

                    {currentUser ? (
                        <div className="flex items-center space-x-6">
                            <NavLink to="/my-requests">My Requests</NavLink>
                            {currentUser.isAdmin && (
                                <Link to="/admin">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white font-medium text-sm flex items-center space-x-2 shadow-lg shadow-orange-500/30"
                                    >
                                        <FaCrown className="text-yellow-200" />
                                        <span>Admin Panel</span>
                                    </motion.button>
                                </Link>
                            )}

                            <div className="flex items-center space-x-4 pl-4 border-l border-gray-700">
                                <div className="flex items-center space-x-2">
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-inner">
                                        <span className="font-bold text-sm text-white">{currentUser.name.charAt(0)}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-300 hidden lg:block">{currentUser.name}</span>
                                </div>
                                <motion.button
                                    onClick={handleLogout}
                                    whileHover={{ color: '#ef4444' }}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Logout"
                                >
                                    <FaSignOutAlt className="text-lg" />
                                </motion.button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2 text-gray-300 hover:text-white font-medium transition-colors"
                                >
                                    Login
                                </motion.button>
                            </Link>
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(124, 58, 237)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium shadow-lg shadow-purple-900/50 transition-all border border-purple-500/30"
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </motion.nav>
    );
};

const NavLink = ({ to, children }) => (
    <Link to={to} className="relative group py-2">
        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">{children}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
    </Link>
);

export default Navbar;
