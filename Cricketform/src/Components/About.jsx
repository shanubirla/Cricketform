import React from 'react';
import image from '../images/image.png'
const About = () => {
  return (
    <div className="text-center p-10">
     
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-6">About the Cricket League</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          The Cricket League is an exciting platform designed for cricket enthusiasts to showcase their talent and passion for the sport.
          Whether you're an amateur cricketer or a seasoned professional, the league offers opportunities to compete at various levels.
          Our mission is to foster a vibrant cricketing community, promote sportsmanship, and provide a space where players can enhance their
          skills and grow within the sport.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          With matches held across various venues and teams representing different regions, the Cricket League has grown to become one of the most 
          anticipated tournaments. We focus on ensuring every player has a memorable experience, from the intense matches to the collaborative 
          team spirit that defines cricket.
        </p>
        <img 
          src={image} 
          alt="Cricket League" 
          className="rounded-md shadow-lg mx-auto"
        />
      </div>

  
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-6">Registration Process</h2>
        <div className="max-w-4xl mx-auto text-left">
          <p className="text-lg text-gray-700 mb-6">
            The registration process is straightforward and involves multiple steps to ensure all participants provide accurate details for smooth participation. Here's how you can register:
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-blue-600">Step 1: Personal Information</h3>
              <p className="text-gray-700 mt-2">
                Fill in your name, email, contact number, and age. This information helps us stay connected with you and update you about upcoming events.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-blue-600">Step 2: Team Selection</h3>
              <p className="text-gray-700 mt-2">
                Choose the team you wish to represent or sign up as a free agent. If you're signing up with friends, make sure to mention your team preferences.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-blue-600">Step 3: Confirmation & Payment</h3>
              <p className="text-gray-700 mt-2">
                After completing the form, review your details and submit. You'll receive a confirmation email along with a payment link to finalize your registration.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a href="/registration" className="bg-green-600 text-white py-3 px-8 rounded-lg transition duration-300 hover:bg-green-800">
              Start Registration Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
