"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import RecipeInfo from "@/components/RecipeInfo/RecipeInfo";
import { useParams } from "next/navigation";
import React from "react";

const RecipePage = () => {
	const params = useParams();
	const recipeId = Array.isArray(params.id) ? params.id[0] : params.id;

	return (
		<main>
			<NavBar />
			<RecipeInfo recipeId={recipeId} />
			<Footer />
		</main>
	);
};

export default RecipePage;
