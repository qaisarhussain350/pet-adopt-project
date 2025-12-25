import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [adoptionMessage, setAdoptionMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState(null); // 'success', 'error'

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const { data } = await axios.get(`/api/pets/${id}`);
                setPet(data);
            } catch (error) {
                console.error('Error fetching pet details', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPet();
    }, [id]);

    const handleAdopt = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${user.token}`, // Assuming token is in user object
                    'Content-Type': 'application/json'
                }
            };

            // Assuming the ID of the pet is passed in the body or URL
            // Based on adoptionRoutes.js, it expects body content. 
            // Checking adoptionController usage usually implies petId in body.
            await axios.post('/api/adoptions', { petId: pet._id, message: adoptionMessage }, config);
            setRequestStatus('success');
        } catch (error) {
            console.error("Adoption request failed", error);
            setRequestStatus('error');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!pet) return <div>Pet not found</div>;

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto my-10 border border-gray-100">
            <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2 relative">
                    {pet.imageUrl ? (
                        <img className="h-96 w-full object-cover md:h-full" src={pet.imageUrl} alt={pet.name} />
                    ) : (
                        <div className="h-96 w-full bg-gray-200 flex items-center justify-center md:h-full">
                            <span className="text-gray-400 text-6xl">🐾</span>
                        </div>
                    )}
                    <div className="absolute top-6 left-6 bg-white text-primary font-bold text-xl px-4 py-2 rounded-lg shadow-lg">
                        ${pet.price || 0} Adoption Fee
                    </div>
                </div>
                <div className="p-10 w-full md:w-1/2 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-secondary font-bold mb-2">{pet.breed}</div>
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">{pet.name}</h1>

                    <div className="flex items-center space-x-6 text-gray-600 mb-6">
                        <span className="flex items-center"><span className="text-2xl mr-2">🎂</span> {pet.age} years old</span>
                        <span className="flex items-center"><span className="text-2xl mr-2">🏷️</span> {pet.type}</span>
                    </div>

                    <p className="mt-2 text-gray-600 text-lg leading-relaxed mb-8">{pet.description || "No description provided."}</p>

                    {/* Personality Traits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                            <h3 className="font-bold text-green-800 mb-2 flex items-center">
                                <span className="mr-2">✅</span> What I Like
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {pet.likes && pet.likes.length > 0 ? (
                                    pet.likes.map((like, index) => <li key={index}>{like}</li>)
                                ) : (
                                    <li>Everything nice!</li>
                                )}
                            </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                            <h3 className="font-bold text-red-800 mb-2 flex items-center">
                                <span className="mr-2">❌</span> What I Dislike
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {pet.dislikes && pet.dislikes.length > 0 ? (
                                    pet.dislikes.map((dislike, index) => <li key={index}>{dislike}</li>)
                                ) : (
                                    <li>Nothing really!</li>
                                )}
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                                <span className="mr-2">🎾</span> Favorite Games
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {pet.games && pet.games.length > 0 ? (
                                    pet.games.map((game, index) => <li key={index}>{game}</li>)
                                ) : (
                                    <li>Playing fetch!</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-gray-500 font-medium">Status</span>
                            <span className={`px-4 py-2 rounded-full text-sm font-bold ${!pet.isAdopted ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {pet.isAdopted ? 'ADOPTED' : 'AVAILABLE FOR ADOPTION'}
                            </span>
                        </div>

                        {pet.isAdopted ? (
                            <button disabled className="bg-gray-300 text-gray-500 font-bold py-4 px-6 rounded-xl w-full cursor-not-allowed">
                                This pet has been adopted
                            </button>
                        ) : requestStatus === 'success' ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center font-bold">
                                🎉 Request Submitted Successfully!
                            </div>
                        ) : (
                            <>
                                {user ? (
                                    <div className="mb-6">
                                        <label className="block text-black text-sm font-bold mb-2">Why do you want to adopt {pet.name}?</label>
                                        <textarea
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-black"
                                            rows="3"
                                            value={adoptionMessage}
                                            onChange={(e) => setAdoptionMessage(e.target.value)}
                                            placeholder="Tell us a bit about your home..."
                                        ></textarea>
                                    </div>
                                ) : (
                                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl mb-6 text-sm">
                                        Please <span className="font-bold">login</span> to submit an adoption request.
                                    </div>
                                )}

                                <button
                                    onClick={handleAdopt}
                                    className="bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition duration-300 w-full shadow-lg transform hover:-translate-y-1"
                                >
                                    {user ? 'Submit Adoption Request' : 'Login to Adopt'}
                                </button>
                                {requestStatus === 'error' && (
                                    <p className="text-red-500 mt-4 text-center font-medium">Failed to submit request. Please try again.</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
