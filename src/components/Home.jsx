// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the AR Experience!</h1>
      <p className="text-lg mb-8 text-center">
        This is a fun project demonstrating augmented reality with face tracking. Explore the features and enjoy the experience!
      </p>
      <Link to="/scene">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Start AR
        </button>
      </Link>
      <div className="mt-12 flex flex-col items-center">
        <p className="text-lg mb-2">Follow me on social media:</p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition"
          >
            Twitter
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
