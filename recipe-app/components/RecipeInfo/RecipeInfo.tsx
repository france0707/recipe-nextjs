import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRecipeContext } from "@/context/RecipeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faStar,
	faUserGroup,
	faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import LoadingRecipe from "./LoadingRecipe";

interface RecipeInfoProps {
	recipeId: string;
}

const RecipeInfo: React.FC<RecipeInfoProps> = ({ recipeId }) => {
	const { getRecipeInfo, getRecipeInstructions } = useRecipeContext();
	const [recipe, setRecipe] = useState<any>(null);
	const [instructions, setInstructions] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRecipeData = async () => {
			try {
				setLoading(true);
				const [recipeData, instructionsData] = await Promise.all([
					getRecipeInfo(Number(recipeId)),
					getRecipeInstructions(Number(recipeId)),
				]);
				setRecipe(recipeData);
				setInstructions(instructionsData[0]?.steps || []);
			} catch (err) {
				setError("Error fetching recipe information or instructions");
			} finally {
				setLoading(false);
			}
		};

		fetchRecipeData();
	}, [getRecipeInfo, getRecipeInstructions, recipeId]);

	if (loading) {
		return (
			<section className="min-h-dvh min-w-dvh flex flex-col justify-center">
				<LoadingRecipe />;
			</section>
		);
	}

	if (error) {
		return <div className="min-h-dvh text-center pt-10">{error}</div>;
	}

	return (
		<section className="hero bg-base-200 min-h-screen">
			<article className="hero-content flex-col">
				<h1 className="text-3xl sm:text-5xl font-bold text-center">
					{recipe?.title}
				</h1>
				<div className="p-4 flex flex-col sm:flex-row justify-center">
					{recipe?.image && (
						<Image
							src={recipe.image}
							alt={`Image of ${recipe.title}`}
							width={500}
							height={500}
							priority
							className="w-96 h-64 mb-4 rounded-2xl object-cover"
						/>
					)}
					<div className="flex flex-col ml-6 gap-2 sm:w-[20rem]">
						<p className="text-xl sm:text-2xl font-semibold">
							<FontAwesomeIcon
								icon={faUtensils}
								className="mr-2"
							/>
							{recipe.dishTypes
								.map(
									(dishType: string) =>
										dishType.charAt(0).toUpperCase() +
										dishType.slice(1)
								)
								.join(", ")}
						</p>
						<div className="flex flex-row gap-4">
							<p className="text-xl sm:text-2xl font-semibold">
								<FontAwesomeIcon
									icon={faUserGroup}
									className="mr-2"
								/>
								{recipe.servings}
							</p>
							<p className="text-xl sm:text-2xl font-semibold">
								<FontAwesomeIcon
									icon={faClock}
									className="mr-2"
								/>
								{recipe.readyInMinutes}
							</p>
							<p className="text-xl sm:text-2xl font-semibold">
								<FontAwesomeIcon
									icon={faStar}
									className="mr-2"
								/>
								{Math.floor(recipe.spoonacularScore)}
							</p>
						</div>
					</div>
				</div>

				<div>
					<h2 className="text-2xl sm:text-4xl font-bold text-center">
						Recipe Ingredients
					</h2>
					<p className="mx-12 mt-4">
						{recipe.extendedIngredients
							.map(
								(item: any) =>
									item.name.charAt(0).toUpperCase() +
									item.name.slice(1)
							)
							.join(", ")}
					</p>
				</div>

				<div className="my-6">
					<h2 className="text-2xl sm:text-4xl font-bold text-center">
						Steps to Prepare
					</h2>
					<ol className="list-decimal mx-12">
						{instructions.map((step, index) => (
							<li key={index} className="py-2">
								{step.step}
							</li>
						))}
					</ol>
				</div>
			</article>
		</section>
	);
};

export default RecipeInfo;
