import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart, FaShieldAlt, FaStar, FaQuoteLeft, FaCheckCircle, FaPaw, FaUserMd, FaHome } from 'react-icons/fa';

const Home = () => {
    const { user } = useContext(AuthContext);
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    // Stats Data
    const stats = [
        { label: 'Pets Adopted', value: '1,200+', icon: <FaPaw /> },
        { label: 'Happy Families', value: '3,500+', icon: <FaHeart /> },
        { label: 'Vet Specialists', value: '50+', icon: <FaUserMd /> },
        { label: 'Rescue Centers', value: '12', icon: <FaHome /> },
    ];

    // Process Data
    const processSteps = [
        { title: 'Browse VIP Pets', desc: 'Explore our curated list of ethically raised pets.', icon: <FaStar /> },
        { title: 'Meet & Greet', desc: 'Schedule a private session to bond with your future companion.', icon: <FaUserMd /> },
        { title: 'Seamless Adoption', desc: 'Hassle-free paperwork and premium welcome kit.', icon: <FaCheckCircle /> },
    ];

    // Testimonials Data
    const testimonials = [
        { name: 'Sarah Jenkins', role: 'Dog Mom', text: "The VIP experience was incredible. My golden retriever came with a complete health kit and trained!", image: "data:image/jpeg;base64,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" },
        { name: 'Michael Chen', role: 'Cat Lover', text: "Professional, clean, and ethical. I recommend PetAdoption Premium to everyone.", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADgQAAIBAwMBBgQEBgICAwAAAAECAwAEEQUSITEGEyJBUWEUcYGRIzKx0RVCUqHB8GLxFnIHM0P/xAAaAQACAwEBAAAAAAAAAAAAAAACAwEEBQAG/8QAJhEAAgICAgICAQUBAAAAAAAAAAECAxEhEjEEIkFREzIzYXGhBf/aAAwDAQACEQMRAD8AxEuovIa8EzSDA6mg1UnpRNvvRgVXNV2kuiRhZ6ZM34m6j7fvoGwWPFeWl+wUKyY+lWSMZOVHNV5OUnsLoYw3LyADPlQuoRMQWqNoJUcFh5UbMRIm0jmlpcWTnJmdkm49akXaLnPNO/ho1O7HFVyWaT8LgU7lkFiuFzI2Opp9p8DIAQaDTT+7ZcAk1p7Ds3qs0IfZHAD0EzYJ+g5oZpy1ENMUahK4iKg1mjbyPKXPNbXUeyOuhWeFYLkDqsUvi+xApJbwujGOVDG68MrjBB981CTrRDYplm7kccUN3u45pzqFiJUyMZpP3BgY5HFHFpojZGW5MZr2DUj+V+RQ14p60EwYdKYopogbXjRyrkUpKshJQcUdYgOuHNFvFAqkcVEfXRzFMV1IfA3Sr+8oW8KxyHZQ3xDUzgjg6GVC3NOLB4Nvi60rtrNmOcUySzYrhRzQzSYIyYQyABMfOjrONM8ilENnKoHXijoFkVxk0hpJBZGcwVYz0zS0zDfjNMWhaWL50pk06VZDzQRSYWRmIu8ioPvBbSeI8URbs6DaxoW4t2ubmGPJ2vIFPyzUxW8EaZuOzNjFFbJqd6uZHGYEYflHk2PU1oY7uOTkYBPl5UnvL62t1RLgt02pFGhYkD9KAtu1Vos3w/cSxkHG2aLbmrOVBYRYrqWDWfFIgO/p6ilesafa67CxQKl2o/Dmx19m9qV3Xa60jmFvDBJcSn/84QCaLj1OOSVY4457efG7upgBkexHFS5qSJlUYa6Sa3meGZdrISrKfIjihzbif0pn27kMOpLKqndPGCw/5Dj/AAKybXk6NwGwar/jedFd6eBpd6TH3eVIpDcWxRmGOKNm1eXZjBwartZVnfxHr60UFKO2CLlYxnA4qMsjEcHNOruyjKArilnw5BPHnTFJM4VSo7NnNQ7k+taaz05Z16DNW/wVv6RXO5I4uW3ESDHHtXqz90QaoN3g81F5kbmhw2CNY7sMNxHFDy6iqtwKCaUBeKAO5nJruCJyaeDWFAAyOKsbVYn5AGay/dMauiQr+Y0HBInI8F4ryUxs1SW5gAKg7wfEQP70gto9x4pnZW5a8gicArI20/XihxhhRSbRrtR0e61RWlhvpbYegKoGH/tgmgtB7M2z3guri8e6MT4JLlk3fM9fpSDtb2iurUC1JdV3bSB5LnpS2O6vdf2fw2CVRb+Am3d22/Mjgn6Gmpctl7KXquzc9pdA097h7uGV4Fbh5oyQin32nIqWn9nmsY47pNRmuAOdqSCRfnlst9jWGkF32cka71CG8lRjgvPvC4PnjPX6VDQu003xLC2LiE9FPO3NQ01vB2U9Nmo7Yta3F/EO8BmiQB4xnIzjnNZ+a1iIBrQa9bCGxt7iQLuuWLD1x/3ml8UKMnBHNLcn2VLkoywhBcacCmV8qXiJoWJFam4RI0pDOUMpB9aOMhRXHOzsFYmjVs+9QuDz6UBKyxtuFTttU2krRtfRAVbM9rJ7Zo7+JD1FKLm8E2Ao8VVZf+gULrT7OIzcjiq0Rj1NScnPNSVx0ph3ZCR9oxmqVn281c8W8ZoSaAjoK7s7AUl1muef3NAopB6VY2SKjicMrPUGiOD0piusHcjxnDIwYH0I6VmtrHpREETZzmo4IlMZ9o9TjvbPc5DXG9Xf555+lajRdZh0ewgnt0uY7eQ7iLNVALHqSMVko9Oa4VriPYXjGRG384yAftkfeiJtUvOz0SWkbLtdSzRt4gufKmqHqsDoXJt5Nbc6xD2gBtha6nKpALi5kPd48sgHH+81hY7uKz1W6aIblkl2JtxxjjA9qI/8s1a/Q28T93GwwRGME/Wu7PWqvq6xXUa7IZ928Dghen6VPDC2TK3L9Rq8s1wv4juQCSFY525649KFlvJbfoadalYi3xd25Y20+HIPJjJ8j/is1qj5OAOaTKtxlhiU1LeSx9UMuQTVEgDeInmly20rHeoO3ypnpum3t0jARnA865xSJwKLuRi5UEmi9Lttxy4ouLQ5jelZR505fR5LKHcBmunJYwjhLNB3coOOKv49KsjhlvLju15xTD/x64oM5JwA3mi3UVqZigIxnANJF3M2F+dfZtc00dxKkKZ4IArG6R2VJkdnRg1NxgWZu3hkk4EZqU8GDtZcH0NfQV0NIoA23BB64rLa/auLqMRpx/VQPs7Jmzb85xVZiOcAZPkK2On9njfL+bu183rR6bp+l6VERDbK8yk5nkGT1IzmnVUTs2KstjA+fWeg6hcLujtJNv8AU3hH96dWvZ1Lfm+lGRj8OPHPtk/tWn1LUVXcS2QF3dOgFZPVL/VyUjt7eO3ikUk3Eh3kH5fv9qv1+JCO3spWeVOWovBXZN3nbCNBgW6Wcq4xwOV/zg/Wlvae17xyxDZC7Rxnj0q7TLhH1EXQaT8KLD7sBsn1Hp15/atFcaaLtshuMZ68feqnmNwsTXRq/wDPirKXF9o+b2lnMZBtYqPsK1umwLCUijYF5OZGx+VfP6np9aLl0aOFZLieVIIUU7Gcgbz6c0gudcOman3OnwfFqBl3EnJ+uP2rqa3P2n0d5Fka04V7Z9HswDB3bxjbINvdsPLpigoNH0q6mJicc5wH5/vSjTtcXW4gIIWST8rRscMhPGfl1OaewA7Fjj8EY6DoX9cZ8q0J0wsWzGhbOp4Cl7O26ZUIpTyxTPTdNjhBAVcUtGpw6ZHtl/FLZAji8be/Ao7StYtryPfCZEKnDJKhRh9KzLPFde+0aNfkxnp6ZfNo8LTbygzREmmxvFjYp4xyKl/EIyxG4VX/ABIKx54PnVbESxkUQ6JFa3TMFHi9KZfBpU2uRLINnWrN4rkkSHP3b8nGKrjjiDEgCkXxkruAp8NGwysF3MafyFB80CSDHlQV3pMEqtI6DCCrEu1JHiofXr4x2PdQMolmIRQx6+f+/Ojrh+SSiLsnwg5fQnlkCOBDtRE5GPMUumvGZpEU7VLEsfbzof4wRsOGEXiVc/yNnlG9Pb7UrvLnu7FpFP4kx2jPXk4/etlRUVgxuTk8h8Uz3LNK6qCQpVenA6f3qVzidPEfACFyajI4AOwY4AWvJ8LEqKOhGPfmoyFxFd5Y95IkkB7u4QcMPl0PqKpuu0uo21utjYW8Qnx4p3GQo9FHmevNMbghbrjIySQKDhtYYZXcIOCSTjqf+6VKtWdlmF8qs8RZb6dLM5vdWle8nUjYJWyCx6DHQU90nTIYo3ldQzyHqcfU/rUEjMkyrjiIZPu56/YYH1pnK4ii7v8ApwAcff8AWm8IrSK8rW9tk4zDbWrzRoAqdEA5JPT7nH3qqWW5kmNpbbnlEYMrg4GT0XPkPPAzS+aczTYDkRd+HYk4woBP9qotLuWdnlL91GzbgA20nPqeoGB0HNEo/Arl8mj03RILUrK5ikkIOT3AwffLZJ+9OUaMxBCFHBwyjp6VmrXUY4IpAikLxtJ4z9Ov3on+I8J+LGAx6b1zj5D5UEq86GRtxsMtUlWY94+SDg0bNNGg5GTVELGUh/6ucetR1DaqZGBxXmbm1Y4/Rv14cEwzT5BKxk8hTHvVrI2OsLEWiDZI96rfW7ze2EXGeOaXykGsYGUV4kXU4qx9YRvAh5oHULHbFlSSfas6I7nv+M8GrUZZQho29jO0j+/WhO0U8d1MLVjtdUDIwP8ANnp8+lL7Ca4V8EYHmaJmRbgSGRBiR8VoeBDMnN/BR86fqofYpuSTDIZVBLAxynGBJ6bh5H3pLduzRWUJLcO2d3XhiK0N53nc8jcQg2s3OQR0NZe6Ja7hAPCykfTg1pPZRisGlC87j0A4FeysNoHpVCT+EDPWpwsJMZ9DSmOS0CSvi9yOQq+v3qlX7y5ijJwpOSBzxmrVUm6uMEAccsM4+mKqtyou0bywST0xxTIC7Hoa2K5Afb4ZHyT65NRvHzk4HkfXyNSimQZBbw+nyqjUJc2qsh5IUfrRr+RLEbEyWzopIMxCbh5Ajn+1N7OGK3gLlQDjwk9RSS1ODGspAHrnpk5/TFaWwt455Fe4Vpin5VP5ftRJYQuT3gqS5s85jjRz0wIxIR7naKGDxyNuhuJFYn/60tx9gdorWoojt/ybVPSlN026ZWSRgvmM8EUvPyNUdB8V0kFuCd24DGDSHUNU71yrPihNSu2h3spyxJpNEzXE4DV56cFKTkzfg8RSH+ixpNfsx5G2n3cQegpdpMKQR7jxkVc0/J/ekSWWMjo0qRLNHhwKAaxihm3bep86f2VugTkZ96heW8Z5xxTIVtRAYivVQQlVAGR19KC3MMj61drV21pdrbw2z3AZeUjTcf1AHFK3l7+HwW8kec5YOkm3HtmtvxocKUvsx725XNkdSkOHBJAyPpWVuJ0XUGkJ6MOnToR+1H399NCe5miikLHCOm5CSTwMHIzWy0z/AOONJS0N1rM9xNMYyZcS92iDGSBj9SaKy2MFhjaPHlZLK6MUt6FKEtnBwRTBHKzqowVPAH2ptqGj9ndGgkiiK6nqFy3dWdpBNvAbHV36DHU+3zqMHZ3bbxfGX2+4Q/nRNqt6cVEJc3hE2w/HHLEUck3eXDoMqCcgnz8vKoK7R+NgMjAyTnGef80zv9NSw8AmmnlmOQkEX6knHkaoaxaaOJEgnguXZ96SOpAAxgnHmQfI4qxAp2bWQWe4CDgjzOB9KrhnlumW2t0aWdnxGi9Sc+VMm7O9+PxL1UJyPChP+abdm9Os9Bee7jn+JuNmFZ+NnqAPepm5JeqIqUG/d6GPZ/SdP7MWnxWshJNQZCqlV7zaxGMIPP3OKXWTQWikTiSMcAuyMi8+QyAB96nqGpHUJo2uJlHdAhI3UFc+ZPn6edQttStoIsoo58PchiwB9s0uqE4rM+2N8i2qyS/GtL/Qq4nJ4Rg24+FVFK5Vy7iHLN0AHNcsoj3DcAMeED+UeY/b60boMaOslxKRjov+aC+ahWzqIOdiEd5o1zLAzlGEg5xiltjp1wshcI2R5Yr6hK0Jt88dKRCaBEY5HU1ivo3IrYphjuXVU2kH51x0+8z1X70xtr+FmO0g88GifiYvf7VyigsD3TrgyIuD5VZdsQBnypLod1iPk9BRGoXwxgHmq9dusA4Mj2hnWXUp0mkbYx5j3eFiPWp2d7DIFiChI1Hi45YegHQCl+swpNeTSSOFH5sscAUnidp5did68XTC+Eyn5+Q/WvTQa4L+kYPFuTf8s2LwaZctb3du4j+HlVlbyZv6c+f0rSJr0M9vJp17GI+9jZG7w5WQNwf7GsDYNBaFJdRuYVkH5EXxGMf8VH61dcX9ndqY4UuZ9xzlvAv3pV1Ct+dlnx/LlRpLKIWF9p2n6zdC9CRzIrLE6IFVPcBcDJHp1wKfM/f3CbeMn8RVHI9OemKyMmjQd6901vAJAuMyS7kT34wPvSOaSSC4dLfUEuIxyCkpBHyHT6UFNUqE87yMvuj5bTWsH0a7FzG5nhbvIlHiHmv74xj70tXUH+IJIck8qAMEnHP++1Z/Su0c1qBG7tLEowA3UD0z5j2bNMJ9U0+ZSyOVBAIDjaAf996twsXyZtlLzobyalE8YYAEZwQ+eD9qrkvwCA4Ug9cClbalaSEl8EHJLI35vTOD196EnuohHvimIJPQscGj5IVwkHyxrdMGRmVv6QODXkVvIWI24VgN5z6HjHvSqO+dDjJKH2oqe9DQja7YHXJwTQuaChCWdh4cyTpDDyzsFUeorXrEltZrEMeBcfM1kOyYaW8llcZZI8g+hJrSzGVgcnw1i+fY5TUDZ8OvjHkXSTZgGM4xSfwmB8+Wac20Qa3IPPFZ67JjSVR6mq2C/DRVpTAR5ABO400+IHpSTQA0lu3sxow7gSOanoPORpo7nZmirlA1wM+ma6urNj+oX8GJ7XMYtUMa8oVRsH1/0UlS5llcwltqf8a6ur1FTfBGXZFKTPU/DddvU45PJoiW7mRwFc811dViJUktleuSyRC2t0chZ0DyN/Mxz6+lG/w+2tLMOkYdjj8/PWurqGO28jJ+sFgE1C1ifb4cfL50qlcofDXV1Bb+kbRt7K2Ykc13eMMDcePevK6qybwWlFHpuJQv5jV+nuZGLPyRnGa6uooNuWwbYpQbRvexoCz3IA/kHX51o5vymurqoed+8H4n7Z5Zkm3Yms7e9JPrXV1Ai2irsso7uUeQc04MSZPFdXVEhkej/9k=" },
        { name: 'Elena Rodriguez', role: 'Volunteer', text: "I've seen many shelters, but this standard of care is unmatched.", image: "data:image/jpeg;base64,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" },
    ];

    return (
        <div className="min-h-screen pt-20 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
                <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-pink-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between relative z-10 mb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                        <span className="text-purple-300 font-semibold text-sm tracking-wide uppercase">✨ The #1 Premium Adoption Center</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6">
                        Find Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                            Soulmate
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Connect with ethically raised, loving pets waiting for a premium home. Experience the joy of companionship with our VIP adoption process.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/pets">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-lg shadow-purple-600/30 flex items-center space-x-2"
                            >
                                <span>Adopt Now</span>
                                <FaArrowRight />
                            </motion.button>
                        </Link>

                        {!user && (
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border border-gray-600 rounded-full text-white font-semibold text-lg hover:border-gray-400 transition-colors"
                                >
                                    Join Community
                                </motion.button>
                            </Link>
                        )}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-gray-500">
                        <div className="flex items-center space-x-2">
                            <FaHeart className="text-red-500" />
                            <span>100+ Happy Adoptions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaShieldAlt className="text-green-500" />
                            <span>Vet Verified</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="lg:w-1/2 relative"
                >
                    <motion.div
                        animate={{ y: [-20, 20, -20] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 will-change-transform"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt="Premium Dog"
                            width="600"
                            height="400"
                            loading="eager"
                            className="rounded-3xl shadow-2xl border border-gray-700/50 w-full max-w-md mx-auto"
                        />

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-700 max-w-xs hidden md:block will-change-transform"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-500/20 rounded-full">
                                    <FaStar className="text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Top Rated</h4>
                                    <p className="text-xs text-gray-400">Best shelter 2024</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Decorative Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-700/30 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-purple-500/20 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-900/50 backdrop-blur-sm border-y border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group p-6 rounded-2xl hover:bg-gray-800/50 transition-colors"
                            >
                                <div className="text-4xl text-purple-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-gray-400 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 font-semibold tracking-widest uppercase text-sm">How It Works</span>
                    <h2 className="text-4xl font-bold text-white mt-2 mb-4 font-serif">The VIP Journey</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Adopting a pet should be as joyful as living with one. We've streamlined the process to be transparent, quick, and secure.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-8 rounded-3xl bg-gray-800/30 border border-gray-700 hover:border-purple-500/50 transition-colors group"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-xl font-bold text-purple-500 shadow-xl">
                                {index + 1}
                            </div>
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-3xl text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-900/30 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white font-serif">Trusted by <span className="text-purple-400">Thousands</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-gray-800/40 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm"
                            >
                                <FaQuoteLeft className="text-4xl text-purple-900/50 mb-6" />
                                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center space-x-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-500" />
                                    <div>
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-purple-400 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-20 text-center border border-purple-500/30 shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">Ready to meet your new best friend?</h2>
                        <p className="text-purple-200 text-lg mb-10">Join our VIP community today and get priority access to new rescues and exclusive care tips.</p>

                        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-white transition-colors w-full backdrop-blur-sm"
                            />
                            <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>

        </div >
    );
};

export default Home;
