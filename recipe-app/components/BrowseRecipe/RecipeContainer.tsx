"use client";
import React, { useState } from "react";
import { useRecipeContext } from "@/context/RecipeContext";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import SearchAlert from "./SearchAlert";

const RecipeContainer: React.FC = () => {
	const { recipes } = useRecipeContext();
	const recipesPerPage = 9;
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate the range of recipes to display
	const lastRecipeIndex = currentPage * recipesPerPage;
	const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
	const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

	// Calculate the total number of pages
	const totalPages = Math.ceil(recipes.length / recipesPerPage);

	return (
		<section className="min-h-fit min-w-dvh flex flex-col justify-center">
			<SearchAlert />
			<div className="mx-auto w-fit min-h-dvh p-4 gap-6 grid place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{currentRecipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>
			{recipes.length > recipesPerPage && (
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</section>
	);
};

export default RecipeContainer;
