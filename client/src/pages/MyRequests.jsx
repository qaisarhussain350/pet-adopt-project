import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const MyRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                    },
                };
                const { data } = await axios.get('/api/adoptions/my-requests', config);
                setRequests(data);
            } catch (error) {
                console.error('Error fetching requests', error);
            } finally {
                setLoading(false);
            }
        };
        if (user) {
            fetchRequests();
        }
    }, [user]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">My Adoption Requests</h1>
            {requests.length === 0 ? (
                <p className="text-gray-600">You haven't made any adoption requests yet.</p>
            ) : (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {requests.map((request) => (
                            <li key={request._id} className="p-4 hover:bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-16 w-16">
                                            {request.pet.imageUrl ? (
                                                <img className="h-16 w-16 rounded-full object-cover" src={request.pet.imageUrl} alt={request.pet.name} />
                                            ) : (
                                                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl">🐾</div>
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">{request.pet.name}</h3>
                                            <p className="text-sm text-gray-500">Submitted on {new Date(request.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${request.status.toLowerCase() === 'approved' ? 'bg-green-100 text-green-800' :
                                                request.status.toLowerCase() === 'rejected' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'}`}>
                                            {request.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MyRequests;
