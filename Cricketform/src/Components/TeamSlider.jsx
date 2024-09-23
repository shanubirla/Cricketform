import React from 'react';
import image1 from '../images/image4.png';
import image2 from '../images/image3.png';
import image3 from '../images/image2.png';
import image4 from '../images/image1.png';
const teams = [
  { name: 'Delhi capitals', logo: image2 },
  { name: 'Royal Challengers Bangalore', logo: image1 },
  { name: 'Mumbai Indians', logo: image3 },
  { name: 'Chennai Super Kings', logo: image4 },
];

const TeamSlider = () => {
  return (
    <div className="flex space-x-8 justify-center overflow-x-auto py-4">
      {teams.map((team, index) => (
        <div key={index} className="min-w-[150px] text-center">
          <img src={team.logo} alt={team.name} className="w-24 h-24 mx-auto rounded-full" />
          <h3 className="text-lg font-bold mt-4">{team.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default TeamSlider;
