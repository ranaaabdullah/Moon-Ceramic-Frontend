import React from "react";
import Head from "../../components/about/Head";
import AboutCard from "../../components/about/AboutCard";
import image1 from "../../assets/about/banner1.png";

const About = () => {
  return (
    <div>
      <Head />
      <AboutCard
        img={image1}
        heading={"1910"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
        }
      />
    </div>
  );
};

export default About;
