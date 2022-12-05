import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import closeIcon from "../public/assets/shared/icon-close.svg";

function Nav() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const router = useRouter();

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};
	return (
		<header className="primary-header flex">
			<div>
				<svg
					className="logo"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
				>
					<g fill="none" fill-rule="evenodd">
						<circle cx="24" cy="24" r="24" fill="#FFF" />
						<path
							fill="#0B0D17"
							d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
						/>
					</g>
				</svg>
			</div>
			<button
				onClick={toggleNav}
				className="mobile-nav-toggle"
				aria-controls="primary-navigation"
				style={{
					backgroundImage:
						toggleMenu && `url(../public/assets/shared/icon-close.svg)`,
				}}
			>
				<span className="sr-only" aria-expanded={toggleMenu}>
					Menu
				</span>
			</button>
			<nav>
				<ul
					style={{ transform: toggleMenu && "translateX(0)" }}
					id="primary-navigation"
					className={"primary-navigation underline-indicators flex"}
				>
					<li className={router.pathname == "/" ? "active" : ""}>
						<Link
							className={"ff-sans-cond uppercase text-white letter-spacing-2"}
							href="/"
						>
							<span aria-hidden="true">00</span>Home
						</Link>
					</li>
					<li className={router.pathname == "/Destination" ? "active" : ""}>
						<Link
							className="ff-sans-cond uppercase text-white letter-spacing-2"
							href="/Destination"
						>
							<span aria-hidden="true">01</span>Destination
						</Link>
					</li>
					<li className={router.pathname == "/Crew" ? "active" : ""}>
						<Link
							className="ff-sans-cond uppercase text-white letter-spacing-2"
							href="/Crew"
						>
							<span aria-hidden="true">02</span>Crew
						</Link>
					</li>
					<li className={router.pathname == "/Technology" ? "active" : ""}>
						<Link
							className="ff-sans-cond uppercase text-white letter-spacing-2"
							href="/Technology"
						>
							<span aria-hidden="true">03</span>Technology
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
