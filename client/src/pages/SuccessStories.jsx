import { motion } from 'framer-motion';

const SuccessStories = () => {
    const stories = [
        {
            petName: 'Luna',
            parentName: 'The Thompson Family',
            image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
            quote: "Luna has brought so much light into our lives. She was perfectly trained when she arrived!"
        },
        {
            petName: 'Max',
            parentName: 'David & James',
            image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=400&q=80',
            quote: "We were worried about adopting a senior dog, but Max is the most chill, loving roommate ever."
        },
        {
            petName: 'Whiskers',
            parentName: 'Emily R.',
            image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80',
            quote: "The adoption process was so smooth. I appreciated the vet records and the starter kit."
        }
    ];

    return (
        <div className="container mx-auto px-6 py-20 lg:py-32">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">Success <span className="text-green-400">Stories</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Real pets, real families, real love. Here are some of our favorite happy beginnings.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-colors shadow-xl"
                    >
                        <div className="h-64 overflow-hidden">
                            <img src={story.image} alt={story.petName} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-1">{story.petName}</h3>
                            <p className="text-purple-400 text-sm mb-4">Adopted by {story.parentName}</p>
                            <p className="text-gray-300 italic">"{story.quote}"</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center bg-gray-800/30 rounded-3xl p-12 border border-gray-700/50">
                <h3 className="text-2xl text-white font-bold mb-4">Have your own story?</h3>
                <p className="text-gray-400 mb-6">We'd love to hear how your new family member is doing.</p>
                <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-purple-100 transition-colors">Submit Story</button>
            </div>
        </div>
    );
};

export default SuccessStories;
