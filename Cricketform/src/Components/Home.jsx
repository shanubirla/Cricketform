import React from 'react';
import { Link } from 'react-router-dom';
import TeamSlider from './TeamSlider.jsx';
import FeedbackSlider from './Feedback.jsx';
import image from '../images/image.png'
import image1 from '../images/image01.png';
import image2 from '../images/image03.png';
import image3 from '../images/image04.png';
import image4 from '../images/111.png';
import video from '../images/Kohli, Gayle take RCB upto 2nd spot with thumping win over KXIP.mp4'
const Home = () => {
  return (
    <div className="text-center p-10">
      {/* Welcome Section */}
      <h1 className="text-5xl font-bold text-green-600 animate-bounce">Welcome to the Cricket League</h1>
      <p className="mt-4 text-lg text-gray-700">Join the action. Register to participate!</p>
      <div className="mt-10">
        <Link to="/registration">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg transition duration-300 hover:bg-blue-800">
            Register Now
          </button>
        </Link>
      </div>

      {/* Introduction Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">About the Cricket League</h2>
        <div className="flex flex-col md:flex-row items-center justify-center ml-32 gap-8">
          {/* Intro Text */}
          <div className="md:w-1/2 text-left">
            <p className="text-lg text-gray-700 mb-4 ">
              The Cricket League is a professional sports league that celebrates the passion and energy of cricket. 
              Whether you're a seasoned player or a fan of the sport, we bring together the best talent and offer 
              an exciting platform for cricket enthusiasts. Experience the thrill of the game, from nail-biting 
              matches to inspiring sportsmanship.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our goal is to foster a community that loves the spirit of cricket. Players of all skill levels 
              are welcome to participate and showcase their talent. Join us for an unforgettable cricket experience!
            </p>
          </div>
          {/* Intro Image */}
          <div className="md:w-1/2 ml-24">
            <img 
              src={image} 
              alt="Cricket League" 
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Video Testimonial Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Hear from the Players</h2>
        <div className="max-w-2xl mx-auto">
          <iframe
            className="w-full h-64 rounded-md shadow-lg"
            src={video}
            title="Cricket Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Image Cards Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Experience Cricket Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <img src={image1} alt="Cricket Match 1" className="rounded-md shadow-lg" />
          <img src={image2} alt="Cricket Match 2" className="rounded-md shadow-lg" />
          <img src={image3} alt="Cricket Match 3" className="rounded-md shadow-lg" />
          <img src={image4} alt="Cricket Match 4" className="rounded-md shadow-lg" />
        </div>
      </div>

      {/* Our Teams Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Our Teams</h2>
        <TeamSlider />
      </div>

      {/* Feedback Slider Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">What Players and Coaches Say</h2>
        <FeedbackSlider />
      </div>
    </div>
  );
};

export default Home;
