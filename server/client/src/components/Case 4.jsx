import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Images } from '../Images/images';
import { ScrollRestoration } from 'react-router-dom';

const Section = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay }}
        >
            {children}
        </motion.div>
    );
};

const Case4 = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500  min-h-screen text-white p-8 space-y-12">

            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.pic4}
                        className="w-96 h-96 object-cover rounded-full border-8 border-white shadow-lg"
                        initial={{ scale: 0.8, rotate: 360 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                    <motion.div
                        className="absolute text-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-5xl font-extrabold">Case 4</h1>
                    </motion.div>
                </div>
            </Section>

            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            About Case 4
                        </h2>
                        <p className="text-lg leading-relaxed">
                            In 2019, Priyanka Reddy, a 26-year-old veterinary doctor from Hyderabad, was brutally murdered after being lured under the pretext of helping with a flat tire. The incident itself became widely known for its shocking violence, but another troubling aspect emerged later: Priyanka's online harassment before the crime. Her social media presence was targeted by trolls and abusers, which reflected a broader issue of online harassment and cyberbullying targeting women in India.

                        </p>
                    </motion.div>
                    <motion.img
                        src='https://i0.wp.com/blog.securly.com/wp-content/uploads/2023/10/Blog-2-_Hero.png?fit=1368%2C857&ssl=1'
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </Section>
            <ScrollRestoration />
        </div>
    );
};

export default Case4;
