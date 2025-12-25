import { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';
import { motion } from 'framer-motion';

const PetList = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const { data } = await axios.get('/api/pets');
                setPets(data);
            } catch (error) {
                console.error('Error fetching pets', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPets();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold uppercase tracking-widest">
                    Exquisite Companions
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
                    Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">VIP Pets</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Browse our curated selection of premium pets waiting for their forever homes. Each one is vet-checked and ready for a loving family.
                </p>
            </motion.div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {pets.length > 0 ? (
                        pets.map((pet) => (
                            <motion.div key={pet._id} variants={item}>
                                <PetCard pet={pet} />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-20 bg-gray-800/50 rounded-3xl border border-gray-700 border-dashed">
                            <p className="text-gray-500 text-xl font-medium">No pets available at the moment.</p>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export default PetList;
