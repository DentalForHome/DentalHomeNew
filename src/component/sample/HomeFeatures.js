import React from "react";
import FeatureCard from "./FeatureCard";

function HomeFeatures() {
  const featureData = [
    // {
    //     img: 'abc',
    //     title: 'Regular dental checkups',
    //     content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
    // },
    {
      id: 0,
      img: "abc",
      content: "Video Consultancy",
    },
    {
      id: 1,
      img: "abc",
      content: "Video Consultancy",
    },
    {
      id: 2,
      img: "abc",
      content: "Video Consultancy",
    },
    {
      id: 3,
      img: "abc",
      content: "Video Consultancy",
    },
    {
      id: 4,
      img: "abc",
      content: "Video Consultancy",
    },
  ];
  console.log(featureData);

  return (
    <div id='home-about' className="home-features-container">
      <div className="features-title">
        <p>Our Features</p>
      </div>
      <div className="features-content">
        {featureData.map((data, key) => (
            <FeatureCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomeFeatures;