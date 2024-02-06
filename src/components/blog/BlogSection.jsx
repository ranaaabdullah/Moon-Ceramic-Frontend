import React from "react";
import BannerCard from "../home/BannerCard";
import image1 from "../../assets/blog/image1.png";
import image2 from "../../assets/blog/image2.png";
import image3 from "../../assets/blog/image3.png";
import image4 from "../../assets/blog/image4.png";
import image5 from "../../assets/blog/image5.png";
import image6 from "../../assets/blog/image6.png";
import BlogCard from "./BlogCard";
import SearchInput from "../inputField/SearchInput";

const BlogSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <BlogCard
            image={image1}
            title={" How Can I Use Ceramic When I Decorate?"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices"
            }
          />{" "}
          <BlogCard
            image={image2}
            title={"The secrets to a Living Room set?"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis"
            }
          />
          <BlogCard
            image={image3}
            title={"How to Style a Beautiful House"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus"
            }
          />{" "}
          <BlogCard
            image={image4}
            title={"The secrets to a Living Room set?"}
            desc={
              " Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi."
            }
          />
          <BlogCard
            image={image5}
            title={"Chocolate Clementine Cake Recipe"}
            desc={
              " Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus"
            }
          />{" "}
          <BlogCard
            image={image6}
            title={" Holiday Food Traditions With Moon Family"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam ."
            }
          />
        </div>
        <div>
          <SearchInput placeholder={"Search for product..."} />
          <p>popular post</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
