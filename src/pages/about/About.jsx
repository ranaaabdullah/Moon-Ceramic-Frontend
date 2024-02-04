import React from "react";
import Head from "../../components/about/Head";
import AboutCard from "../../components/about/AboutCard";
import image1 from "../../assets/about/banner1.png";
import image2 from "../../assets/about/banner2.png";
import image3 from "../../assets/about/banner3.png";
import CardWork from "../../components/about/CardWork";
import TeamCard from "../../components/about/TeamCard";
import SectionTeam from "../../components/about/SectionTeam";
import EmailCard from "../../components/home/EmailCard";

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
      />{" "}
      <AboutCard
        img={image2}
        swap={true}
        heading={"1990"}
        desc={
          "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit "
        }
      />{" "}
      <AboutCard
        img={image3}
        heading={"2010"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."
        }
      />
      <CardWork />
      <SectionTeam />
      <EmailCard />
    </div>
  );
};

export default About;
