import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import image1 from '../images/image01.png';
import image2 from '../images/image03.png';
import image3 from '../images/image04.png';
import image4 from '../images/111.png';
// Dummy images of previous tournaments (replace these with actual image URLs)
const images = [image1, image2, image3, image4];

const Tournament = () => {
  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      {/* Tournament Header */}
      <h2 className="text-4xl font-bold text-center mb-6">Cricket Tournament 2024</h2>
      <p className="text-center text-lg mb-10">
        Get ready for the most exciting cricket tournament of the year! Apply now and compete for glory!
      </p>

      {/* Image Slider for Previous Tournaments */}
      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Highlights from Previous Tournaments</h3>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Previous Tournament ${index + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Tournament Overview */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Tournament Overview</h3>
        <p className="mb-4">
          <strong>Total Teams:</strong> Up to 16 teams can apply to participate in the tournament.
        </p>
        <p className="mb-4">
          <strong>Start Date:</strong> The tournament kicks off on <span className="font-semibold">December 1, 2024</span>.
        </p>
      </section>

      {/* Team Categories */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Team Categories</h3>

        {/* Senior Teams */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Senior Teams</h4>
          <p className="mb-4">
            The Senior category is open to players above 18 years. Teams can consist of 11-15 players, with a maximum of 2 overseas players.
          </p>
        </div>

        {/* Junior Teams */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Junior Teams</h4>
          <p className="mb-4">
            Junior teams are for players under 18. Teams should have a minimum of 11 and a maximum of 13 players.
          </p>
        </div>
      </section>

      {/* Tournament Levels */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Tournament Levels</h3>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Selection Round</h4>
          <p className="mb-4">
            Teams will be evaluated in a selection round where initial matches will determine the strength of each team.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Group Stage</h4>
          <p className="mb-4">
            After selection, teams will be divided into groups and compete in a round-robin format.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Semi-Finals</h4>
          <p className="mb-4">
            The top teams from each group will advance to the semifinals, where they will compete in knockout rounds.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold mb-2">Finals</h4>
          <p>
            The best two teams will meet in the grand finale to battle for the championship title.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Application Process</h3>
        <p className="mb-4">
          Teams can apply through the official registration page. The application deadline is <strong>November 15, 2024</strong>.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Tournament;
