import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="col-sm-9 col-md-9 col-lg-9 mx-auto m-4 d-lg-flex">
        <Cards
          buttonLabel="Find More"
          buttonUrl="https://www.google.com/"
          imageUrl="https://picsum.photos/id/10/500/325"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="My title"
        />
        <Cards
          buttonLabel="Find More"
          buttonUrl="https://www.google.com/"
          imageUrl="https://picsum.photos/id/10/500/325"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="My title"
        />
        <Cards
          buttonLabel="Find More"
          buttonUrl="https://www.google.com/"
          imageUrl="https://picsum.photos/id/10/500/325"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="My title"
        />
        <Cards
          buttonLabel="Find More"
          buttonUrl="https://www.google.com/"
          imageUrl="https://picsum.photos/id/10/500/325"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="My title"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
