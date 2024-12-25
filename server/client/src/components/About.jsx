import React, { useRef } from 'react';
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

const CyberbullyingPage = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-600 via-green-500 to-blue-400 min-h-screen text-white p-6 space-y-12 overflow-hidden">
            <Section>
                <div className="p-14 relative flex justify-center items-center">
                    <motion.div
                        className="absolute text-center"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-6xl font-extrabold drop-shadow-lg">Cyberbullying</h1>
                        <p className="text-lg mt-2 drop-shadow-md">Understanding, Preventing, and Taking Action</p>
                    </motion.div>
                </div>
            </Section>

            <Section delay={0.5}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 rounded-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-[#47B884]">&#128187;</span> Understanding Cyberbullying
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Cyberbullying is the use of digital platforms to harass, threaten, or humiliate others. It can happen through social media, messaging apps, gaming platforms, and more. Recognizing its signs is the first step to addressing it.
                        </p>
                    </motion.div>
                    <div className="rounded-lg p-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg">
                        <p className="text-lg leading-relaxed">
                            "Cyberbullying affects people of all ages. Knowing what it is and how it manifests can help us take proactive steps to prevent it."
                        </p>
                    </div>
                </div>
            </Section>

            <Section delay={1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div className="p-6 rounded-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-[#47B884]">&#128218;</span> Education
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Teaching digital etiquette and the consequences of online behavior helps prevent cyberbullying. Encourage open discussions about responsible internet usage.
                        </p>
                    </motion.div>
                    <motion.div className="p-6 rounded-lg shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-[#47B884]">&#128274;</span> Privacy Settings
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Help individuals secure their online accounts by adjusting privacy settings to control who can interact with them.
                        </p>
                    </motion.div>
                    <motion.div className="p-6 rounded-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition-transform">
                        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-[#47B884]">&#129309;</span> Positive Culture
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Promote kindness and respect online to create an environment where cyberbullying is discouraged.
                        </p>
                    </motion.div>
                </div>
            </Section>

            <Section delay={1.5}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 rounded-lg shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-[#47B884]">&#128221;</span> Taking Action
                        </h2>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li className="hover:text-[#47B884] transition-all">Block and report the bully on the platform.</li>
                            <li className="hover:text-[#47B884] transition-all">Save evidence of bullying (screenshots, messages).</li>
                            <li className="hover:text-[#47B884] transition-all">Reach out to a trusted adult or authority figure.</li>
                            <li className="hover:text-[#47B884] transition-all">Seek support from counseling or helplines.</li>
                        </ul>
                    </motion.div>
                    <div className="rounded-lg p-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg">
                        <p className="text-lg leading-relaxed">
                            "Taking immediate and decisive action can stop cyberbullying in its tracks and prevent further harm."
                        </p>
                    </div>
                </div>
            </Section>

            <Section delay={2}>
                <div className="relative flex justify-center items-center">
                    <motion.div
                        className="absolute text-center p-4 bg-white text-gray-900 bg-opacity-75 rounded-lg shadow-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
                        <h2 className="text-4xl font-semibold drop-shadow-lg">Together We Can Stop Cyberbullying</h2>
                        <p className="text-lg mt-2 drop-shadow-md">
                            By understanding, preventing, and taking action, we can create a safer online space for everyone.
                        </p>
                    </motion.div>
                </div>
            </Section>
            <ScrollRestoration />
        </div>
    );
};

export default CyberbullyingPage;
