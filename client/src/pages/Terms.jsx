import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="container mx-auto px-6 py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-white font-serif mb-8 border-b border-gray-700 pb-4">Terms of Service</h1>

                <div className="prose prose-invert prose-lg text-gray-300">
                    <p className="mb-6">Please read these Terms of Service carefully before using our website.</p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Acceptance of Terms</h3>
                    <p className="mb-4">
                        By accessing or using the PetAdoption website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Adoption Process</h3>
                    <p className="mb-4">
                        Our adoption listings are subject to availability. We reserve the right to refuse adoption to anyone who does not meet our safety and ethical standards.
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. User Conduct</h3>
                    <p className="mb-4">
                        You agree not to use the website for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You must not transmit any worms or viruses or any code of a destructive nature.
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Limitation of Liability</h3>
                    <p>
                        PetAdoption shall not be liable for any direct, indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
