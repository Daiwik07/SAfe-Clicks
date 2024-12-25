import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';

const CyberbullyingAwareness = () => {
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

    return (
        <motion.div
            className="relative min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <div className="relative z-10">
                <header className="text-center mb-8">
                    <Section>
                        <h1 className="text-5xl font-bold text-[#47B884] leading-tight">
                            The Tragic Story of Megan Meier: A Cyberbullying Case That Changed the Internet Forever
                        </h1>
                    </Section>
                    <Section delay={0.5}>
                        <p className="text-xl text-[#47B884] mt-4">
                            Learn about the devastating impact of cyberbullying through the tragic case of Megan Meier.
                        </p>
                    </Section>
                </header>

                <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <Section>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">The Megan Meier Incident</h2>
                    </Section>
                    <Section delay={0.5}>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            In 2006, 13-year-old Megan Meier became the victim of cyberbullying when a fake online profile was created by Lori Drew, the mother of one of Megan's former friends. The profile, pretending to be a teenage boy named "Josh Evans," befriended Megan online and then cruelly turned against her, sending hurtful messages that eventually led to Megan's tragic death by suicide.
                        </p>
                    </Section>
                    <Section delay={1}>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            This case marked one of the earliest and most publicized instances of cyberbullying leading to severe emotional distress and death. It drew significant attention to the dangers of online harassment and the consequences of using digital platforms for bullying.
                        </p>
                    </Section>

                    <Section delay={1.5}>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">The Impact of Cyberbullying</h2>
                    </Section>
                    <Section delay={2}>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            The effects of cyberbullying are often devastating, causing anxiety, depression, and isolation. In Megan's case, the online harassment intensified her emotional distress, leading her to take her own life. The anonymity of the internet can embolden bullies, making it harder for victims to escape the emotional toll.
                        </p>
                    </Section>
                    <Section delay={2.5}>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            Megan’s story is a powerful reminder of the real-life consequences of cyberbullying and the need for more vigilance, education, and intervention.
                        </p>
                    </Section>

                    <Section delay={3}>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">Fighting Back Against Cyberbullying</h2>
                    </Section>
                    <Section delay={3.5}>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            To prevent similar tragedies, it is crucial to raise awareness about cyberbullying and teach responsible online behavior. Schools, families, and communities must work together to combat this issue and protect vulnerable individuals.
                        </p>
                    </Section>
                    <Section delay={4}>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            Victims of cyberbullying should always seek support from trusted individuals and report incidents to relevant authorities. We can all play a role in creating safer digital spaces.
                        </p>
                    </Section>

                    <Section delay={4.5}>
                        <h2 className="text-4xl font-semibold text-[#47B884] mb-6">Resources for Help</h2>
                    </Section>
                    <Section delay={5}>
                        <p className="text-gray-800 leading-relaxed">
                            If you or someone you know is affected by cyberbullying, there are resources available. Organizations like the Megan Meier Foundation and other anti-bullying initiatives offer support and education to help prevent cyberbullying.
                        </p>
                    </Section>
                </section>
            </div>
            <ScrollRestoration />
        </motion.div>
    );
};

export default CyberbullyingAwareness;
