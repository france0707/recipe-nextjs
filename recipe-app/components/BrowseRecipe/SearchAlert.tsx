"use client";
import { useRecipeContext } from "@/context/RecipeContext";
import React from "react";

const SearchAlert = () => {
	const { recipes, loading } = useRecipeContext();

	return (
		<div
			role="alert"
			className="alert bg-base-300 my-4 mx-auto w-auto flex flex-row items-center text-center font-medium"
		>
			{loading ? (
				<div className="flex items-center">
					<span className="loading loading-spinner loading-md mr-2"></span>
					<span>Searching</span>
				</div>
			) : (
				<div className="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 shrink-0 stroke-current mr-2"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>{recipes.length} Recipes Found.</span>
				</div>
			)}
		</div>
	);
};

export default SearchAlert;
