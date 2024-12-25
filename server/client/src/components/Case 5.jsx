import React, { useRef } from 'react';
import { Images } from '../Images/images';
import { motion, useInView } from 'framer-motion';
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

const Case5 = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500  min-h-screen text-white p-8 space-y-12">

            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.pic5}
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
                        <h1 className="text-5xl font-extrabold">Case 5</h1>
                    </motion.div>
                </div>
            </Section>

            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            About Case 5
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Following the death of Bollywood actor Sushant Singh Rajput, a storm of cyberbullying and trolling erupted on social media platforms. Fans and critics engaged in an online battle, and many celebrities, including those close to Rajput, were harassed and bullied online. While the cyberbullying was directed at several individuals, Rhea Chakraborty, a co-actor and girlfriend of Rajput, became one of the central figures targeted by online abusers. She faced severe online harassment, including defamatory posts, hate messages, and threats, leading to serious emotional distress.
                        </p>
                    </motion.div>
                    <motion.img
                        src='https://cdn.prod.website-files.com/6047c2070742bf6f0e9457e6/60916a2c6d70c5f24624d291_Cyberbullying.jpg'
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

export default Case5;
