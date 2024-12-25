import React from 'react';
import { motion } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';
import Slider from './Slider';
import CyberbullyingAwareness from './CyberbullyingAwareness';
import ImportanceOfCyberbullyingAwareness from './ImportanceOfCyberbullyingAwareness';
import CustomVideoPlayer from './CustomVideoPlayer';
import { Images } from '../Images/images';


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Home = () => {
  return (
    <div>
      <Slider />
      <CyberbullyingAwareness />
      <ImportanceOfCyberbullyingAwareness />
      <CustomVideoPlayer video={Images.video} />
      <motion.section
        className="bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-lg"
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
              <h4 className="text-xl font-bold text-gray-900 sm:text-4xl">Hello, I'm Daiwik!</h4>
              <p className="mt-4 text-gray-600 text-lg">
                Creative and skilled web developer specializing in building responsive, modern websites and applications using technologies like React and Node.js. Passionate about delivering seamless user experiences and innovative solutions.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 md:mt-0"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src="https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="mt-12 md:mt-0"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <img
                src="https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              className="max-w-lg"
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
              <h4 className="text-xl font-bold text-gray-900 sm:text-4xl">Hello, I'm Nimit!</h4>
              <p className="mt-4 text-gray-600 text-lg">
                Creative web designer crafting visually stunning and user-friendly designs. Skilled in creating responsive layouts that blend aesthetics with functionality to deliver exceptional user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <ScrollRestoration />
    </div>
  );
};

export default Home;
