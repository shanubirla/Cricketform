import React, { useState } from 'react';

const feedbacks = [
  { name: 'Virat Kohli', role: 'Player', feedback: 'This league is amazing! The organization and the competitive spirit are unmatched.' },
  { name: 'MS Dhoni', role: 'Coach', feedback: 'Coaching in this league has been a fantastic experience. The talent is unbelievable.' },
  { name: 'Rohit Sharma', role: 'Player', feedback: 'Every match here is intense. I love being part of this community.' },
  { name: 'Anil Kumble', role: 'Coach', feedback: 'Watching the young players grow through the league has been very rewarding.' }
];

const FeedbackSlider = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedback((prevFeedback) => (prevFeedback + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((prevFeedback) => (prevFeedback - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="relative max-w-xl mx-auto text-center">
      <div className="bg-white p-6 shadow-lg rounded-md">
        <h3 className="text-xl font-bold">{feedbacks[currentFeedback].name}</h3>
        <p className="text-sm text-gray-600 mb-4">{feedbacks[currentFeedback].role}</p>
        <p className="text-lg text-gray-800 italic">"{feedbacks[currentFeedback].feedback}"</p>
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevFeedback} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
        &#8249;
      </button>
      <button 
        onClick={nextFeedback} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
        &#8250;
      </button>
    </div>
  );
};

export default FeedbackSlider;
