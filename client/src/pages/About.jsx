import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white font-serif mb-6">About <span className="text-purple-400">PetAdoption</span></h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We are more than just a shelter. We are a community dedicated to engaging, ethical, and premium pet adoption experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700/50 text-center">
                        <FaPaw className="text-4xl text-purple-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                        <p className="text-gray-400">To find a loving, permanent home for every pet that crosses our path.</p>
                    </div>
                    <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700/50 text-center">
                        <FaHeart className="text-4xl text-pink-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
                        <p className="text-gray-400">Compassion, integrity, and excellence in every interaction.</p>
                    </div>
                    <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700/50 text-center">
                        <FaHandHoldingHeart className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Our Promise</h3>
                        <p className="text-gray-400">We verify every adopter and ensure every pet is healthy and ready.</p>
                    </div>
                </div>

                <div className="prose prose-invert lg:prose-xl mx-auto text-gray-300">
                    <p>
                        Founded in 2024, PetAdoption was born from a simple idea: that the adoption process should be as joyful and dignified as the pets themselves. We realized that many shelters were under-resourced and the user experience for adopters was often difficult.
                    </p>
                    <p>
                        We set out to change that by building a "Premium" platform. This doesn't mean expensive—it means high-quality care, transparent processes, and a focus on the user experience. Whether you are looking for a playful puppy or a wise senior cat, we treat every match with the importance it deserves.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
