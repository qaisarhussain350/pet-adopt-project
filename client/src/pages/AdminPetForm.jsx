import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaSave, FaImage } from 'react-icons/fa';

const AdminPetForm = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchPet = async () => {
                try {
                    const { data } = await axios.get(`/api/pets/${id}`);
                    setName(data.name);
                    setType(data.type);
                    setBreed(data.breed);
                    setAge(data.age);
                    setDescription(data.description);
                    setImageUrl(data.imageUrl);
                    setPrice(data.price);
                } catch (error) {
                    setError('Pet not found');
                }
            };
            fetchPet();
        }
    }, [id]);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            const petData = {
                name,
                type,
                breed,
                age,
                description,
                imageUrl,
                price,
            };

            if (id) {
                await axios.put(`/api/pets/${id}`, petData, config);
            } else {
                await axios.post('/api/pets', petData, config);
            }

            navigate('/admin/pets');
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <Link to="/admin/pets" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <FaArrowLeft className="mr-2" /> Back to Pets
            </Link>

            <div className="max-w-3xl mx-auto">
                <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700/50 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500" />

                    <h1 className="text-3xl font-bold text-white mb-8 font-serif">
                        {id ? 'Edit Pet' : 'Add New Pet'}
                    </h1>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={submitHandler} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Pet Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="e.g. Bella"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Type (Dog, Cat...)</label>
                                <input
                                    type="text"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="e.g. Dog"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Breed</label>
                                <input
                                    type="text"
                                    value={breed}
                                    onChange={(e) => setBreed(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="e.g. Golden Retriever"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Age (Years)</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="e.g. 2"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm font-bold mb-2">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors h-32"
                                placeholder="Tell us about this pet..."
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Image URL</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors pl-10"
                                        placeholder="https://..."
                                    />
                                    <FaImage className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2">Price ($)</label>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="0"
                                    required
                                />
                            </div>
                        </div>

                        {imageUrl && (
                            <div className="mt-4">
                                <label className="block text-gray-400 text-sm font-bold mb-2">Preview</label>
                                <img src={imageUrl} alt="Pet Preview" className="h-40 w-full object-cover rounded-xl border border-gray-700" />
                            </div>
                        )}

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                <FaSave />
                                <span>{loading ? 'Saving...' : (id ? 'Update Pet' : 'Create Pet')}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPetForm;
