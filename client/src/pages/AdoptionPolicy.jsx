import { motion } from 'framer-motion';

const AdoptionPolicy = () => {
    return (
        <div className="container mx-auto px-6 py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-white font-serif mb-8 border-b border-gray-700 pb-4">Adoption Policy</h1>

                <div className="prose prose-invert prose-lg text-gray-300">
                    <p className="mb-6 lead text-xl text-purple-200">Our goal is to ensure a safe, lifelong match for every pet.</p>

                    <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700/50 mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">Core Principles</h3>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>All adopters must be at least 21 years of age.</li>
                            <li>Landlord approval must be verified for renters.</li>
                            <li>All current household pets must be spayed/neutered and up-to-date on vaccinations.</li>
                            <li>We do not adopt pets as gifts for third parties.</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Process</h3>
                    <ol className="list-decimal pl-6 space-y-4 mb-8">
                        <li><strong>Application:</strong> Submit an online application expressing interest in a specific pet.</li>
                        <li><strong>Interview:</strong> A brief phone or video call with our adoption counselor.</li>
                        <li><strong>Meet & Greet:</strong> A scheduled visit (virtual or in-person) to meet the pet.</li>
                        <li><strong>Home Check:</strong> A quick verification of the living environment (photos often suffice).</li>
                        <li><strong>Finalization:</strong> Signing the adoption contract and paying the fee.</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">Adoption Fees</h3>
                    <p className="mb-4">
                        Adoption fees help cover medical care, food, and shelter for all our animals.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Puppies (under 1 year): $350</li>
                        <li>Adult Dogs: $250</li>
                        <li>Cats/Kittens: $150</li>
                        <li>Senior Pets: $100</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default AdoptionPolicy;
