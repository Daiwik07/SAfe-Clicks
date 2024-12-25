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

const Case2 = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500 via-green-500 to-indigo-500 min-h-screen text-white p-8 space-y-12">

            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.pic2}
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
                        <h1 className="text-6xl font-extrabold">Case 2</h1>
                    </motion.div>
                </div>
            </Section>

            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            About Case 2
                        </h2>
                        <p className="text-lg leading-relaxed">
                            In November 2016, the tragic case of Ooshmal Ullas, a 23-year-old MBBS student at KMCT Medical College in Mukkam, Kerala, shook the nation. Ooshmal, described as a bright and sensitive individual with aspirations of becoming a doctor, faced severe cyberbullying after expressing her personal views in a Facebook post. The post, though well within her right to free expression, became a lightning rod for online harassment. It attracted unwarranted criticism, abusive comments, and relentless trolling from anonymous users and even some known individuals.As the cyberbullying escalated, Ooshmal found herself emotionally overwhelmed.
                        </p>
                    </motion.div>
                    <motion.img
                        src='https://i0.wp.com/blog.securly.com/wp-content/uploads/2023/10/Blog-1-_Hero.png?resize=1536%2C962&ssl=1'
                        className="rounded-lg h-full w-full shadow-lg hover:scale-105 transition-transform"
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

export default Case2;
