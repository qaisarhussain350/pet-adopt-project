import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaPaw } from 'react-icons/fa';

const PetCard = ({ pet }) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700/50 shadow-xl"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent z-10 opacity-80" />
                {pet.imageUrl ? (
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={pet.imageUrl}
                        alt={pet.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <FaPaw className="text-6xl text-gray-700" />
                    </div>
                )}

                {/* Price/Status Badge */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end space-y-2">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-wider uppercase">
                        ${pet.price || 0}
                    </span>
                    {!pet.isAdopted ? (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            Available
                        </span>
                    ) : (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            Adopted
                        </span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-6 pt-0 z-20 -mt-10">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
                            {pet.name}
                        </h3>
                        <p className="text-gray-400 text-sm font-medium tracking-wide">{pet.breed}</p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-light leading-relaxed">
                    {pet.description}
                </p>

                <div className="flex items-center space-x-2 mb-6">
                    {pet.likes?.slice(0, 2).map((like, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-purple-300 border border-purple-500/20">
                            ✨ {like}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <FaPaw className="text-gray-500" />
                        <span>{pet.age} Years</span>
                    </div>

                    <Link to={`/pets/${pet._id}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold shadow-lg shadow-purple-600/20 flex items-center space-x-2"
                        >
                            <span>Adopt</span>
                            <FaHeart className="text-xs" />
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-3xl transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default PetCard;
