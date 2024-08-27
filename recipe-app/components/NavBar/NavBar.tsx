"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useRecipeContext } from "@/context/RecipeContext"; // Import your context
import { useRouter } from "next/navigation"; // Import router for navigation

const NavBar = () => {
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [query, setQuery] = useState(""); // Add query state
	const inputRef = useRef<HTMLInputElement>(null);
	const { updateRecipes } = useRecipeContext(); // Use context for updating recipes
	const router = useRouter(); // Use router for navigation

	const handleSearchClick = () => {
		setIsInputVisible((prev) => !prev);
	};

	useEffect(() => {
		if (isInputVisible && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isInputVisible]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearch = () => {
		updateRecipes(query);
		router.push("/recipes");
	};

	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<nav className="navbar bg-accent">
			<div className="navbar-start">
				<Link href={"/"} className="btn btn-ghost text-2xl font-bold">
					Kookit
				</Link>
			</div>
			<div className="navbar-end">
				<div className="flex items-center">
					<input
						ref={inputRef}
						type="text"
						value={query}
						onChange={handleInputChange}
						onKeyDown={handleEnter}
						placeholder="Search Recipe"
						className={`input input-bordered mr-4 rounded-2xl h-10 placeholder:text-black placeholder:opacity-60 focus:outline-none transition-all duration-300 ease-in-out transform ${
							isInputVisible
								? "translate-x-0 opacity-100 w-32 md:w-96 pointer-events-auto"
								: "translate-x-full opacity-0 w-0 pointer-events-none"
						}`}
					/>
					<button
						className="btn btn-ghost btn-circle"
						onClick={handleSearchClick}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="3"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
