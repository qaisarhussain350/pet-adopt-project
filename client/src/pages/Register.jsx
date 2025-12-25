import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const { register, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        const result = await register(name, email, password);
        if (!result.success) {
            setError(result.error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden bg-white">

                {/* Left Side - Image */}
                <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                    <div className="h-full w-full bg-secondary bg-opacity-40 flex items-center justify-center">
                        <div className="text-white text-center p-10">
                            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
                            <p className="text-lg">Find love and companionship with a furry friend.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2 text-secondary">Create Account</h2>
                    <p className="text-gray-500 mb-6">Register to restart your adoption journey.</p>

                    {error && <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition duration-200"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition duration-200"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition duration-200"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition duration-200"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md transform hover:-translate-y-1"
                        >
                            Register
                        </button>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
