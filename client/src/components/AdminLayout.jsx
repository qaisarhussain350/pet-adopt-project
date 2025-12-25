import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const AdminLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            setUser(userInfo);
            if (!userInfo.isAdmin) {
                navigate('/');
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

    if (!user || !user.isAdmin) {
        return null; // Or a loading spinner
    }

    const navItems = [
        { name: 'Dashboard', path: '/admin' },
        { name: 'Pets', path: '/admin/pets' },
        { name: 'Adoption Requests', path: '/admin/requests' },
        { name: 'Users', path: '/admin/users' },
    ];

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white h-16 flex items-center justify-between px-4 z-20 shadow-md">
                <span className="font-bold text-lg">Admin Panel</span>
                <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <FaBars className="text-xl" />
                </button>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white flex flex-col transition-transform duration-300 transform 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:relative md:translate-x-0
            `}>
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Admin Panel
                    </h1>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                        <FaTimes />
                    </button>
                </div>
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                        >
                            {/* You can add icons here */}
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <Link
                        to="/"
                        className="flex items-center px-4 py-3 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        <span>&larr; Back to Website</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto pt-16 md:pt-0">
                <header className="bg-white shadow-sm">
                    <div className="px-8 py-4 flex justify-between items-center">
                        <h2 className="text-xl font-seminold text-gray-800">
                            {navItems.find(item => item.path === location.pathname)?.name || 'Admin'}
                        </h2>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                                {user.name.charAt(0)}
                            </div>
                        </div>
                    </div>
                </header>
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
