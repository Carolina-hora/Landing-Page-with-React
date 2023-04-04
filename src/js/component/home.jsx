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
		<div><Navbar />
		<Jumbotron />
		<Cards buttonLabel="Find More"
		buttonUrl="https://www.google.com/"
		imageUrl="https://picsum.photos/id/10/500/325"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		title="My title"/>
		<Cards buttonLabel="Find More"
		buttonUrl="https://www.google.com/"
		imageUrl="https://picsum.photos/id/10/500/325"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		title="My title"/>
		<Cards buttonLabel="Find More"
		buttonUrl="https://www.google.com/"
		imageUrl="https://picsum.photos/id/10/500/325"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		title="My title"/>
		<Cards buttonLabel="Find More"
		buttonUrl="https://www.google.com/"
		imageUrl="https://picsum.photos/id/10/500/325"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		title="My title"/>
		<Footer />		

		</div>
		
	);
};

export default Home;
