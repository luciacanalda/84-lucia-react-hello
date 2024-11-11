import React from "react";
import Card from "./Card"
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Footer from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const cards = [
	{
		image: "https://plus.unsplash.com/premium_photo-1664382466516-756b1e0721f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
		title: "Yoga",
		description: "Text",
	},
	{
		image: "https://images.unsplash.com/photo-1730033145309-1ae0ff9acd82?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Casa",
		description: "Text",
	},
	{
		image: "https://images.unsplash.com/photo-1731164131308-4c7a94cb7515?q=80&w=2975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Universo",
		description: "Text",
	},
	{
		image: "https://images.unsplash.com/photo-1731094091429-497ce4283efa?q=80&w=2966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Casa con puerta roja",
		description: "Text",
	}
];
const Home = () => {
	return (
		<div className="text-center">

			<Navbar />
			<Jumbotron />

			<div className="container" >
				<div class="row">
					{cards.map((item, index) => (

						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 p-3" key={index}>
							<Card cards={item} />
						</div>

					))}


				</div>
			</div>

			<Footer />
		</div>



	);
};


export default Home;
