import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaPaw, FaClipboardList, FaPlus, FaArrowRight } from 'react-icons/fa';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalPets: 0,
        totalUsers: 0,
        pendingRequests: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                };

                const [petsRes, usersRes, requestsRes] = await Promise.allSettled([
                    axios.get('/api/pets'),
                    axios.get('/api/auth/users', config),
                    axios.get('/api/adoptions', config)
                ]);

                setStats({
                    totalPets: petsRes.status === 'fulfilled' ? petsRes.value.data.length : 0,
                    totalUsers: usersRes.status === 'fulfilled' ? usersRes.value.data.length : 0,
                    pendingRequests: requestsRes.status === 'fulfilled' ? requestsRes.value.data.filter(r => r.status === 'Pending').length : 0,
                });

            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const cards = [
        {
            title: 'Total Users',
            value: stats.totalUsers,
            icon: <FaUsers />,
            color: 'from-blue-500 to-indigo-600',
            link: '/admin/users'
        },
        {
            title: 'Total Pets',
            value: stats.totalPets,
            icon: <FaPaw />,
            color: 'from-green-500 to-emerald-600',
            link: '/admin/pets'
        },
        {
            title: 'Pending Requests',
            value: stats.pendingRequests,
            icon: <FaClipboardList />,
            color: 'from-yellow-500 to-orange-600',
            link: '/admin/requests'
        },
    ];

    if (loading) return <div className="text-white text-center py-20">Loading Dashboard...</div>;

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold text-white font-serif">Dashboard Overview</h1>
                <p className="text-gray-400">Welcome back, Admin. Here is what is happening today.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={card.link}>
                            <div className={`h-full bg-gradient-to-br ${card.color} rounded-3xl p-6 text-white shadow-lg shadow-gray-900/20 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group`}>
                                <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform text-6xl">
                                    {card.icon}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-lg font-medium opacity-90">{card.title}</h3>
                                    <p className="text-4xl font-bold mt-2 mb-4">{card.value}</p>
                                    <div className="flex items-center text-sm font-medium bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                        <span>View Details</span>
                                        <FaArrowRight className="ml-2 text-xs" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700/50 shadow-xl"
                >
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
                        Quick Actions
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        <Link to="/admin/pets/new">
                            <div className="group p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all flex items-center justify-between cursor-pointer">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-500/10 p-3 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <FaPlus />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200 group-hover:text-white">Add New Pet</h4>
                                        <p className="text-sm text-gray-500">Create a new listing for adoption</p>
                                    </div>
                                </div>
                                <FaArrowRight className="text-gray-600 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>

                        <Link to="/admin/requests">
                            <div className="group p-4 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all flex items-center justify-between cursor-pointer">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-yellow-500/10 p-3 rounded-xl text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                        <FaClipboardList />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200 group-hover:text-white">Review Requests</h4>
                                        <p className="text-sm text-gray-500">Approve or reject pending applications</p>
                                    </div>
                                </div>
                                <FaArrowRight className="text-gray-600 group-hover:text-yellow-400 transform group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700/50 shadow-xl opacity-80"
                >
                    <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Server Status</span>
                                <span className="text-green-400">Online</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Database Connection</span>
                                <span className="text-green-400">Healthy</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Storage Usage</span>
                                <span className="text-blue-400">12%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
