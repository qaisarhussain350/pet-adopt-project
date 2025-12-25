import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaPaw } from 'react-icons/fa';

const AdminPets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const { data } = await axios.get('/api/pets');
                setPets(data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this pet?')) {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const config = {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                };
                await axios.delete(`/api/pets/${id}`, config);
                setPets(pets.filter((pet) => pet._id !== id));
            } catch (error) {
                console.error('Error deleting pet:', error);
                alert('Failed to delete pet');
            }
        }
    };

    if (loading) return <div className="text-white text-center py-10">Loading pets...</div>;

    return (
        <div className="bg-[#1e293b] rounded-3xl border border-gray-700/50 shadow-xl overflow-hidden">
            <div className="p-8 border-b border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white font-serif">Pets Management</h2>
                    <p className="text-gray-400 text-sm">Manage your adoption inventory</p>
                </div>
                <Link to="/admin/pets/new">
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 font-bold flex items-center space-x-2">
                        <FaPlus />
                        <span>Add New Pet</span>
                    </button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-800/50 text-gray-400 border-b border-gray-700">
                            <th className="px-6 py-4 font-semibold">Pet</th>
                            <th className="px-6 py-4 font-semibold">Details</th>
                            <th className="px-6 py-4 font-semibold">Price</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {pets.map((pet) => (
                            <tr key={pet._id} className="hover:bg-gray-800/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-xl overflow-hidden border border-gray-600">
                                            {pet.imageUrl ? (
                                                <img src={pet.imageUrl} alt={pet.name} className="h-full w-full object-cover" />
                                            ) : (
                                                <div className="h-full w-full bg-gray-700 flex items-center justify-center text-gray-400">
                                                    <FaPaw />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{pet.name}</div>
                                            <div className="text-xs text-gray-500">ID: {pet._id.substring(0, 6)}...</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-300">{pet.type}</div>
                                    <div className="text-xs text-gray-500">{pet.breed} • {pet.age} years</div>
                                </td>
                                <td className="px-6 py-4 text-gray-300 font-mono">
                                    ${pet.price}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${pet.isAdopted
                                        ? 'bg-red-500/10 text-red-500 border border-red-500/20'
                                        : 'bg-green-500/10 text-green-500 border border-green-500/20'
                                        }`}>
                                        {pet.isAdopted ? 'Adopted' : 'Available'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex space-x-3">
                                    <Link to={`/admin/pets/edit/${pet._id}`}>
                                        <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors" title="Edit">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(pet._id)}
                                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                        title="Delete"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {pets.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No pets found. Start by adding one!
                </div>
            )}
        </div>
    );
};

export default AdminPets;
