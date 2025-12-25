import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaw, FaUserCircle, FaSignOutAlt, FaCrown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { user, defaultUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-purple-200 focus:outline-none transition-colors"
                    >
                        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black backdrop-blur-md border-t border-white/20 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
                            <MobileNavLink to="/pets" onClick={toggleMenu}>Browse Pets</MobileNavLink>

                            {currentUser ? (
                                <>
                                    <MobileNavLink to="/my-requests" onClick={toggleMenu}>My Requests</MobileNavLink>
                                    {currentUser.isAdmin && (
                                        <MobileNavLink to="/admin" onClick={toggleMenu}>
                                            <span className="flex items-center space-x-2 text-yellow-300">
                                                <FaCrown /> <span>Admin Panel</span>
                                            </span>
                                        </MobileNavLink>
                                    )}
                                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                                                <span className="font-bold text-white text-xs">{currentUser.name.charAt(0)}</span>
                                            </div>
                                            <span className="text-white font-medium">{currentUser.name}</span>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="text-red-300 hover:text-red-200 text-sm font-medium"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="pt-4 flex flex-col space-y-3">
                                    <Link to="/login" onClick={toggleMenu} className="w-full text-center py-2 text-white border border-white/30 rounded-lg hover:bg-white/10">
                                        Login
                                    </Link>
                                    <Link to="/register" onClick={toggleMenu} className="w-full text-center py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700">
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const NavLink = ({ to, children }) => (
    <Link to={to} className="relative group py-2">
        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">{children}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
    </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="block text-white/90 hover:text-white font-medium py-2 hover:pl-2 transition-all"
    >
        {children}
    </Link>
);

export default Navbar;
