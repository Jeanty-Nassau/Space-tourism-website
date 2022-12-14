import React, { useState } from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import { crew } from "../data.json";

function Crew() {
	const [activeContent, setActiveContent] = useState(crew[0]);

	return (
		<div className="crew body">
			<Head>
				<title>Space Tourism Website</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<main id="main" className="grid-container grid-container--crew flow">
				<h1 className="numbered-title">
					<span aria-hidden="true">02</span> Meet your crew
				</h1>
				<div class="dot-indicators flex">
					<button
						onClick={() => {
							setActiveContent(crew[0]);
						}}
						aria-selected={
							activeContent.name === crew[0].name ? "true" : "false"
						}
					>
						<span class="sr-only">The commander</span>
					</button>
					<button
						onClick={() => {
							setActiveContent(crew[1]);
						}}
						aria-selected={
							activeContent.name === crew[1].name ? "true" : "false"
						}
					>
						<span class="sr-only">The mission specialist</span>
					</button>
					<button
						onClick={() => {
							setActiveContent(crew[2]);
						}}
						aria-selected={
							activeContent.name === crew[2].name ? "true" : "false"
						}
					>
						<span class="sr-only">The pilot</span>
					</button>
					<button
						onClick={() => {
							setActiveContent(crew[3]);
						}}
						aria-selected={
							activeContent.name === crew[3].name ? "true" : "false"
						}
					>
						<span class="sr-only">The crew engineer</span>
					</button>
				</div>
				<article className="crew-details flow">
					<header className="flow flow--space--small">
						<h2 className="fs-600 ff-serif uppercase">{activeContent.role}</h2>
						<p className="fs-700 uppercase ff-serif">{activeContent.name}</p>
					</header>
					<p>{activeContent.bio}</p>
				</article>

				<img src={activeContent.images.png} alt="Douglas Hurley" />
			</main>
		</div>
	);
}

export default Crew;
