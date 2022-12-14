import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import { technology } from "../data.json";

import image from "../assets/technology/image-launch-vehicle-landscape.jpg";
function Technology() {
	const [activeContent, setActiveContent] = useState(technology[0]);
	const [screenWidth, setScreenWidth] = useState(0);
	const [imageUrl, setImageUrl] = useState(activeContent.images.landscape);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		if (screenWidth > 750) {
			setImageUrl(activeContent.images.portrait);
		} else setImageUrl(activeContent.images.landscape);
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	}, [activeContent, screenWidth]);

	return (
		<div className="technology body">
			<Head>
				<title>Space Tourism Website</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<main
				id="main"
				className="grid-container grid-container--technology flow"
			>
				<h1 className="numbered-title">
					<span aria-hidden="true">03</span>Space Launch 101
				</h1>
				<img src={imageUrl} alt="The spaceship" />
				<div className="flex grid-container--technology-content">
					<div class="tab-list flex ">
						<button
							onClick={() => {
								setActiveContent(technology[0]);
							}}
							aria-selected={
								activeContent.name === technology[0].name ? "true" : "false"
							}
							className="fs-600 small-button "
						>
							<span class="sr-only">1</span>1
						</button>
						<button
							onClick={() => {
								setActiveContent(technology[1]);
							}}
							aria-selected={
								activeContent.name === technology[1].name ? "true" : "false"
							}
							className="fs-600  small-button"
						>
							<span class="sr-only">2</span>2
						</button>
						<button
							onClick={() => {
								setActiveContent(technology[2]);
							}}
							aria-selected={
								activeContent.name === technology[2].name ? "true" : "false"
							}
							className="fs-600 small-button"
						>
							<span class="sr-only">3</span>3
						</button>
					</div>
					<article className="technology-details flow">
						<header className="flow flow--space--small">
							<h2 className="fs-400 ff-sans-cond uppercase">
								The Terminology...
							</h2>
							<p className="fs-700 uppercase ff-serif text-white">
								{activeContent.name}
							</p>
						</header>
						<p>{activeContent.description}</p>
					</article>
				</div>
			</main>
		</div>
	);
}

export default Technology;
