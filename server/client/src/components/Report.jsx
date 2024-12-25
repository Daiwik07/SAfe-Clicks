import React from 'react';
import { Images } from '../Images/images';
import { Link } from 'react-router-dom';

const cases = [
    {
        name: 'Case 1',
        imgUrl: Images.pic1,
        profileLink: '/case1', 
    },
    {
        name: 'Case 2',
        imgUrl: Images.pic2,
        profileLink: '/case2', 
    },
    {
        name: 'Case 3',
        imgUrl: Images.pic3, 
        profileLink: '/case3', 
    },
    {
        name: 'Case 4',
        imgUrl: Images.pic4, 
        profileLink: '/case4', 
    },
    {
        name: 'Case 5',
        imgUrl: Images.pic5, 
        profileLink: '/case5', 
    },
    {
        name: 'Case 6',
        imgUrl: Images.pic6, 
        profileLink: '/case6', 
    },
];

const Card = ({ cases }) => {
    return (
        <div className="group relative w-96 h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            
            <img
                src={cases.imgUrl}
                alt={cases.name}
                className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-20"
            />

            
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#47B884] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h3 className="text-2xl font-bold">{cases.name}</h3>
                <Link
                    to={cases.profileLink}
                    className="mt-6 text-white bg-black px-4 py-2 rounded-full transition-transform transform hover:scale-110"
                >
                    Learn More
                </Link>
            </div>

            
            <div className="absolute bottom-0 w-full p-4 bg-white text-gray-900 text-center font-bold text-lg">
                {cases.name}
            </div>
        </div>
    );
};

const Report = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-[#47B884] to-teal-500 p-10">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-white">Indian Medal-Winning Athletes</h1>
                <p className="text-lg text-white mt-4">Celebrating the champions of India</p>
            </header>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {cases.map((cases, index) => (
                    <Card key={index} cases={cases} />
                ))}
            </div>
            </div>
    );
};

export default Report;
