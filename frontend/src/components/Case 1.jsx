import React, { useRef } from 'react';
import { Images } from '../Images/Images';
import { motion, useInView } from 'framer-motion';

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

const Case1 = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500  min-h-screen text-white p-8 space-y-12">
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.pic1}
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
                        <h1 className="text-5xl font-extrabold">Case 1</h1>
                    </motion.div>
                </div>
            </Section>

            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            About Case 1
                        </h2>
                        <p className="text-lg leading-relaxed">
                        On January 9, 2018, a tragic incident unfolded in Karnataka when a 20-year-old Hindu woman, a promising young individual, took her own life after enduring relentless harassment on WhatsApp. The harassment stemmed from her friendship with a Muslim man, which drew the ire of certain individuals in her community.

The friendship, though personal and within her rights, became a subject of controversy and gossip in her locality. She was targeted by a barrage of abusive messages, moral policing, and derogatory remarks on WhatsApp. The harassment, reportedly from both known and unknown individuals, questioned her character, criticized her personal choices, and subjected her to intense societal pressure.Despite attempts by her family to support her, the young woman found it increasingly difficult to cope with the hostility directed at her. The incessant judgment and lack of acceptance weighed heavily on her mental health, leading to feelings of isolation and hopelessness.
                        </p>
                    </motion.div>
                    <motion.img
                        src='https://childrenfirstcanada.org/wp-content/uploads/2021/04/cyberbullying2-700x500.png'
                        alt="Neeraj Chopra at Asian Games"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </Section>

        </div>
    );
};

export default Case1;
