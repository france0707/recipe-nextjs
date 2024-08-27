"use client";
import React, { useState } from "react";
import { useRecipeContext } from "@/context/RecipeContext";
import { useRouter } from "next/navigation";

const SearchInput: React.FC = () => {
	const [query, setQuery] = useState("");
	const { updateRecipes } = useRecipeContext();
	const router = useRouter();

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
		<div>
			<div className="input input-bordered flex items-center gap-2 text-base font-normal focus-within:outline-none">
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					onKeyDown={handleEnter}
					className="grow lg:w-96 rounded-2xl p-4 h-6 placeholder:text-black placeholder:opacity-60"
					placeholder="Search"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-5 w-5 opacity-70"
				>
					<path
						fillRule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="m-4">
				<button onClick={handleSearch} className="btn btn-accent">
					Search Recipe
				</button>
			</div>
		</div>
	);
};

export default SearchInput;
