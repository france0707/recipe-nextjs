"use client";
import { useRecipeContext } from "@/context/RecipeContext";
import React from "react";

const ListR = () => {
	const { recipes } = useRecipeContext();

	console.log(recipes);

	return (
		<div>
			recipe here
			{recipes.map((recipe) => (
				<div key={recipe.id}>
					<h3>{recipe.title}</h3>
				</div>
			))}
		</div>
	);
};

export default ListR;
