import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-6 py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-white font-serif mb-8 border-b border-gray-700 pb-4">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg text-gray-300">
                    <p className="mb-6">Last updated: December 25, 2025</p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Information We Collect</h3>
                    <p className="mb-4">
                        We collect information you provide directly to us when you create an account, request an adoption, or sign up for our newsletter. This may include your name, email address, phone number, and adoption preferences.
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. How We Use Your Information</h3>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Process adoption applications and facilitate meetings with pets.</li>
                        <li>Send you updates, newsletters, and security alerts.</li>
                        <li>Improve our services and website user experience.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Data Security</h3>
                    <p className="mb-4">
                        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                    </p>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">4. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@petadoption.com.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
