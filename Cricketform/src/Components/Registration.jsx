import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    alternateEmail: '',
    age: '',
    fatherName: '',
    address: '',
    team: '',
    previousExperience: '',
    totalMatchesPlayed: '',
    documents: null,
    captcha: '',
    payment: '',
  });

  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState('');

  
  const generateCaptcha = () => {
    const randomCode = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomCode);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateStep = () => {
    let stepErrors = {};
    if (step === 1) {
      if (!formData.name) stepErrors.name = 'Name is required';
      if (!formData.email) stepErrors.email = 'Email is required';
      if (!formData.alternateEmail) stepErrors.alternateEmail = 'Alternate Email is required';
      if (!formData.age) stepErrors.age = 'Age is required';
      if (!formData.fatherName) stepErrors.fatherName = 'Father\'s Name is required';
      if (!formData.address) stepErrors.address = 'Address is required';
      if (!formData.captcha || formData.captcha !== captcha) stepErrors.captcha = 'CAPTCHA verification is incorrect';
    } else if (step === 2) {
      if (!formData.team) stepErrors.team = 'Please select a team';
      if (!formData.previousExperience) stepErrors.previousExperience = 'Previous experience is required';
      if (!formData.totalMatchesPlayed) stepErrors.totalMatchesPlayed = 'Total matches played is required';
      if (!formData.documents) stepErrors.documents = 'Document upload is required';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form Data Submitted:', formData);
      alert('Registration Completed!');
    }
  };

  const renderStepBubbles = () => {
    const steps = [
      { stepNumber: 1, label: 'Personal Info' },
      { stepNumber: 2, label: 'Team Selection' },
      { stepNumber: 3, label: 'Confirmation & Payment' },
    ];

    return (
      <div className="flex justify-center items-center mb-8">
        {steps.map((s) => (
          <div key={s.stepNumber} className="flex items-center">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${step >= s.stepNumber ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}>
              {s.stepNumber}
            </div>
            {s.stepNumber !== 3 && (
              <div className={`w-16 h-1 mx-2 ${step > s.stepNumber ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-center mb-6">Register for Cricket League</h2>
      {renderStepBubbles()}
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="flex">
           
            <div className="w-1/2 pr-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="alternateEmail">Alternate Email</label>
                <input type="email" id="alternateEmail" name="alternateEmail" value={formData.alternateEmail} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
                {errors.alternateEmail && <p className="text-red-500">{errors.alternateEmail}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
                {errors.age && <p className="text-red-500">{errors.age}</p>}
              </div>
            </div>

           
            <div className="w-1/2 pl-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="fatherName">Father's Name</label>
                <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
                {errors.fatherName && <p className="text-red-500">{errors.fatherName}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
                <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required></textarea>
                {errors.address && <p className="text-red-500">{errors.address}</p>}
              </div>
              <div className="mb-4 flex items-center">
                <div className="w-2/3">
                  <label className="block text-gray-700 mb-2" htmlFor="captcha">CAPTCHA: {captcha}</label>
                  <input type="text" id="captcha" name="captcha" value={formData.captcha} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
                  {errors.captcha && <p className="text-red-500">{errors.captcha}</p>}
                </div>
                <button type="button" onClick={generateCaptcha} className="ml-2 mt-4 bg-gray-600 text-white py-2  rounded-md hover:bg-gray-700">
                  Regenerate CAPTCHA
                </button>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={nextStep} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Next</button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="team">Select Team</label>
              <select id="team" name="team" value={formData.team} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required>
                <option value="">Choose a team...</option>
                <option value="Team A">Team A</option>
                <option value="Team B">Team B</option>
                <option value="Team C">Team C</option>
              </select>
              {errors.team && <p className="text-red-500">{errors.team}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="previousExperience">Previous Experience</label>
              <textarea id="previousExperience" name="previousExperience" value={formData.previousExperience} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required></textarea>
              {errors.previousExperience && <p className="text-red-500">{errors.previousExperience}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="totalMatchesPlayed">Total Matches Played</label>
              <input type="number" id="totalMatchesPlayed" name="totalMatchesPlayed" value={formData.totalMatchesPlayed} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
              {errors.totalMatchesPlayed && <p className="text-red-500">{errors.totalMatchesPlayed}</p>}
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="documents">Upload Documents</label>
              <input type="file" id="documents" name="documents" onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required />
              {errors.documents && <p className="text-red-500">{errors.documents}</p>}
            </div>
            <div className="flex justify-between col-span-2">
              <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">Previous</button>
              <button type="button" onClick={nextStep} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl mb-4">Confirm Your Details & Make Payment</h3>
           
            <div className="mb-4">
              <strong>Name:</strong> {formData.name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {formData.email}
            </div>
            <div className="mb-4">
              <strong>Alternate Email:</strong> {formData.alternateEmail}
            </div>
            <div className="mb-4">
              <strong>Age:</strong> {formData.age}
            </div>
            <div className="mb-4">
              <strong>Father's Name:</strong> {formData.fatherName}
            </div>
            <div className="mb-4">
              <strong>Address:</strong> {formData.address}
            </div>
            <div className="mb-4">
              <strong>Team:</strong> {formData.team}
            </div>
            <div className="mb-4">
              <strong>Previous Experience:</strong> {formData.previousExperience}
            </div>
            <div className="mb-4">
              <strong>Total Matches Played:</strong> {formData.totalMatchesPlayed}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="payment">Payment Method</label>
              <select id="payment" name="payment" value={formData.payment} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md" required>
                <option value="">Choose payment method...</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
              </select>
              {errors.payment && <p className="text-red-500">{errors.payment}</p>}
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">Previous</button>
              <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Registration;
