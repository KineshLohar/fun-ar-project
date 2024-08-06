// src/HomePage.js
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socials = [
  {
    id : 1,
    name : "Instagram",
    icon : faInstagram,
    link : "https://www.instagram.com/kinesh_malviya/"
  },
  {
    id : 2,
    name : "LinkedIn",
    icon : faLinkedin,
    link : "https://www.linkedin.com/in/kineshlohar/"
  },
  {
    id : 3,
    name : "Github",
    icon : faGithub,
    link : "https://github.com/KineshLohar"
  }, 
  {
    id : 4,
    name : "Website",
    icon : faGlobe,
    link : "https://kineshlohar.github.io/portfolio/"
  },
  
]

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the AR Experience!</h1>
      <p className="text-lg mb-8 text-center">
        This is a fun project demonstrating augmented reality with face tracking. Explore the features and enjoy the experience!
      </p>
      <p className="text-lg mb-8 text-center font-semibold">Created by Kinesh Lohar</p>
      <NavLink to="/scene">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Start AR
        </button>
      </NavLink>
      <div className="mt-12 flex flex-col items-center">
        <p className="text-lg mb-2">Follow me on social media:</p>
        <div className="flex space-x-4">
          {
            socials.map(social => {
              return (
                <NavLink
                  to={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.id}
                  className="text-gray-900 hover:text-gray-700 transition"
                >
                  <FontAwesomeIcon icon={social.icon} size='2xl' />
                </NavLink>
              );
            })
          }
         
        </div>
      </div>
    </div>
  );
};

export default HomePage;
