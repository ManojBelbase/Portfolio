import React from "react";

const Education = () => {
  const educationDetails = [
    {
      degree: "Secondary Level Education",
      institution: "Kanti Secondary School (+2 Science)",
      duration: "2018 - 2020",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Butwal Kalika Campus",
      duration: "2020 - Present",
    },
  ];

  return (
    <div className="mt-10 px-4">
      {/* Section Header */}
      <div className="flex items-center text-2xl font-bold mb-6">
        <span className="text-secondary text-3xl mr-2">#</span>
        <h1 className="text-white">Education</h1>
      </div>

      {/* Education Cards */}
      <div className="grid gap-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-neutral-800 text-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Degree and Institution */}
            <h2 className="text-xl font-semibold">{edu.degree}</h2>
            <p className="text-sm text-secondary">{edu.institution}</p>

            {/* Duration */}
            <p className="mt-2 text-sm text-accent">{edu.duration}</p>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
