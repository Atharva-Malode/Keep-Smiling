import React from "react";
import NavButton from "../../components/btn";

function HomePage() {
  return (
    <div className="text-center p-8 mx-4 w-3/4">
      <img
        src="./Home image.jpeg"
        alt="BIRAC AGC JanCare Project"
        className="mx-auto w-1/2 h-auto"
      />

      <h2 className="font-sans text-2xl font-medium text-gray-700 leading-snug mt-4">
        Smart Web Based Application for Dental Disease Detection using Artificial Intelligence
      </h2>

      <p className="font-sans text-gray-500 text-lg italic mt-2">
        Smile with Confidence
      </p>

      <div className="flex items-center justify-center mt-4 space-x-4">
        <NavButton text="Let's get started" destination="/info" />
        <select
          className="border border-gray-300 rounded-md p-2 bg-white text-gray-700"
          defaultValue="english"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="gujarati">Gujarati</option>
          <option value="marathi">Marathi</option>
        </select>
      </div>
    </div>
  );
}

export default HomePage;
