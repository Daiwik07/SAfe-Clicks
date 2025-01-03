import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../Images/images';
import { motion } from 'framer-motion';
import { ScrollRestoration } from 'react-router-dom';

const Header = () => {

    const handleLogout = () => {
        window.location.reload()
        localStorage.setItem('name', '');
        localStorage.setItem('email', '');
        localStorage.setItem('pass', '');
        button = (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Link to="/login" className="no-underline">
                    <motion.button
                        className="border-2 mx-3 p-3 rounded-xl text-white relative overflow-hidden"
                        whileHover={{
                            background: "linear-gradient(45deg ,#47B884 0%, #47B884 40%, #FFD700 100%)",
                            color: "#fff",
                            scale: 1.05,
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        Log In
                    </motion.button>
                </Link>
                <Link className='no-underline' to="/register">
                    <motion.button
                        className="border-2 mx-3 p-3 rounded-xl text-white relative overflow-hidden"
                        whileHover={{
                            background: "linear-gradient(45deg ,#47B884 0%, #47B884 40%, #FFD700 100%)",
                            color: "#fff",
                            scale: 1.05,
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        Register
                    </motion.button>
                </Link>
            </motion.div>
        );
    }

    let button;
    if (localStorage.getItem('name') === "") {
        button = (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Link to="/login" className="no-underline">
                    <motion.button
                        className="border-2 mx-3 p-3 rounded-xl text-white relative overflow-hidden"
                        whileHover={{
                            background: "linear-gradient(45deg ,#47B884 0%, #47B884 40%, #FFD700 100%)",
                            color: "#fff",
                            scale: 1.05,
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        Log In
                    </motion.button>
                </Link>
                <Link className='no-underline' to="/register">
                    <motion.button
                        className="border-2 mx-3 p-3 rounded-xl text-white relative overflow-hidden"
                        whileHover={{
                            background: "linear-gradient(45deg ,#47B884 0%, #47B884 40%, #FFD700 100%)",
                            color: "#fff",
                            scale: 1.05,
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        Register
                    </motion.button>
                </Link>
            </motion.div>
        );
    } else {
        button = (
            <motion.div className='flex justify-center items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="font-semibold text-lg text-white">{localStorage.getItem('name')}</p>
                <motion.button
                    onClick={handleLogout}
                    className="border-2 mx-3 p-3 rounded-xl text-white relative overflow-hidden"
                    whileHover={{
                        background: "linear-gradient(45deg ,#47B884 0%, #47B884 40%, #FFD700 100%)",
                        color: "#fff",
                        scale: 1.05,
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    Logout
                </motion.button>
            </motion.div>
        );
    }

    return (
        <header className="relative flex justify-between items-center py-4">
            <div className="absolute -z-20 p-0 left-0 w-full h-fuxll overflow-hidden">
                <video
                    src={Images.space}
                    loop
                    muted
                    autoPlay
                    className="w-full h-full object-cover">
                </video>
            </div>
            <nav className="flex justify-between items-center w-[99.9%]">
                <motion.div className="flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Link to="/" className="flex justify-center items-center">
                        <motion.img
                            src={Images.logo}
                            className='w-24 mx-4 h-24 rounded-[50%]'
                            alt="Logo"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
                        />
                        <p className="font-semibold text-white no-underline text-lg ml-2">Safe Click</p>
                    </Link>
                </motion.div>
                <ul className="flex justify-center items-center space-x-6">
                    <motion.li
                        className="text-white list-none text-lg relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut" }}
                    >
                        <Link to="/" className="no-underline relative z-10">Home</Link>
                        <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#FFD700] transition-all group-hover:w-full group-hover:left-0"
                            transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
                        />
                    </motion.li>
                    <motion.li
                        className="text-white list-none text-lg relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, ease: "easeInOut" }}
                    >
                        <Link to="/ai" className="no-underline relative z-10">Cyber Sheild</Link>
                        <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#FFD700] transition-all group-hover:w-full group-hover:left-0"
                            transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
                        />
                    </motion.li>
                    <motion.li
                        className="text-white list-none text-lg relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, ease: "easeInOut" }}
                    >
                        <Link to="/report" className="no-underline relative z-10">Report</Link>
                        <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#FFD700] transition-all group-hover:w-full group-hover:left-0"
                            transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
                        />
                    </motion.li>
                    <motion.li
                        className="text-white list-none text-lg relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, ease: "easeInOut" }}
                    >
                        <Link to="/about" className="no-underline relative z-10">About Cyberbullying</Link>
                        <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#FFD700] transition-all group-hover:w-full group-hover:left-0"
                            transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
                        />
                    </motion.li>
                    <motion.li
                        className="text-white list-none text-lg relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, ease: "easeInOut" }}
                    >
                        <Link to="/contact" className="no-underline relative z-10">Contact Us</Link>
                        <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-1 bg-[#FFD700] transition-all group-hover:w-full group-hover:left-0"
                            transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
                        />
                    </motion.li>
                </ul>
                <div className='flex justify-center items-center'>
                    {button}
                </div>
            </nav>
            <ScrollRestoration />
        </header>
    );
}

export default Header;
