import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Images } from '../Images/images';

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

const Case3 = () => {
    return (
        <div className="bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500 min-h-screen text-white p-8 space-y-12">
            {/* Hero Section */}
            <Section>
                <div className="relative flex justify-center items-center">
                    <motion.img
                        src={Images.pic3}
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
                        <h1 className="text-5xl font-extrabold">Case 3</h1>
                    </motion.div>
                </div>
            </Section>

            {/* Biography Section */}
            <Section delay={0.5}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-4">
                            About Case 3
                        </h2>
                        <p className="text-lg leading-relaxed">
                        The 'Bois Locker Room' case emerged in May 2020 when screenshots of an Instagram group chat involving teenage boys surfaced online. The group was found to share photos of underage girls without their consent, along with lewd, objectifying comments and discussions about sexual violence. The case, which led to the arrest of a 15-year-old boy by Delhi Police, sparked national outrage and a broader conversation about toxic masculinity, cyber ethics, and online safety. It highlighted the urgent need for digital education, gender sensitivity, and accountability in virtual spaces, while also drawing attention to the psychological impact on the victims whose privacy was violated.
                        </p>
                    </motion.div>
                    <motion.img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-R4DlekVqFVDpU5wHaFhBdrpTPaagYeHIQ&s'
                        alt="Swapnil Kusale Shooting"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform w-full"    
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </Section>
        </div>
    );
};

export default Case3;
