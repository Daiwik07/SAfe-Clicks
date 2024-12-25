import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const ImportanceOfCyberbullyingAwareness = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.3 } }
    };

    // Custom hook to detect when the section is in view
    const Section = ({ children }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.3 });

        return (
            <motion.section
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
            >
                {children}
            </motion.section>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-[#47B884] to-teal-500 text-white p-10">
            {/* Header */}
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center mb-12"
            >
                <motion.h1 className="text-5xl font-extrabold" variants={fadeInUp}>
                    The Importance of Knowing About Cyberbullying
                </motion.h1>
                <motion.p className="text-lg mt-4" variants={fadeInUp}>
                    Raising awareness to prevent harm and protect individuals online
                </motion.p>
            </motion.header>

            {/* Main Content */}
            <motion.main
                className="max-w-4xl mx-auto space-y-12"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Section 1: Understanding Cyberbullying */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">Understanding Cyberbullying</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        Cyberbullying is the act of using digital platforms like social media, messaging apps, and websites to harass, harm, or intimidate others. Unlike traditional bullying, cyberbullying can happen 24/7 and has no physical boundaries, making it especially harmful. Recognizing its signs is crucial in addressing the issue and offering support to victims.
                    </p>
                </Section>

                {/* Section 2: The Impact of Cyberbullying */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">The Impact of Cyberbullying</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        Cyberbullying can cause severe emotional, psychological, and even physical harm. Victims may experience anxiety, depression, low self-esteem, and in extreme cases, thoughts of self-harm or suicide. Understanding the impact of cyberbullying is essential in preventing it and offering the necessary help to those affected.
                    </p>
                </Section>

                {/* Section 3: How Awareness Can Help Prevent Cyberbullying */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">How Awareness Can Help Prevent Cyberbullying</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        Awareness is one of the most effective tools in preventing cyberbullying. By educating individuals, especially young people, about the signs and dangers of cyberbullying, we can equip them with the knowledge needed to protect themselves and others. It also promotes a culture of kindness, respect, and responsibility online.
                    </p>
                </Section>

                {/* Section 4: What You Can Do to Stop Cyberbullying */}
                <Section>
                    <h2 className="text-3xl font-bold text-white mb-4">What You Can Do to Stop Cyberbullying</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                        Everyone has a role in stopping cyberbullying. If you witness bullying online, speak out and report it. Support victims by offering a safe space for them to share their experiences. Encouraging positive behavior, such as respect and empathy, can help create a safer and more supportive online environment.
                    </p>
                </Section>

                {/* Call to Action */}
                <motion.div className="text-center" variants={fadeInUp}>
                    <Link
                        to="/cyberbullying-awareness"
                        className="bg-white text-[#47B884] font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                        Learn More About Cyberbullying Prevention
                    </Link>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default ImportanceOfCyberbullyingAwareness;
