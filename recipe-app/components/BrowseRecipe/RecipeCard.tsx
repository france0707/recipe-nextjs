import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Recipe {
	id: number;
	title: string;
	image: string;
}

interface RecipeCardProps {
	recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
	return (
		<Link href={`/recipes/${recipe.id}`}>
			<div className="card card-compact w-80 shadow-xl hover:scale-105 ease-in-out duration-200 cursor-pointer">
				<figure>
					<Image
						src={recipe.image}
						alt={recipe.title}
						width={500}
						height={500}
						priority
					/>
				</figure>
				<div className="card-body bg-base-100 flex justify-center text-center items-center rounded-md h-28">
					<h2 className="card-title">{recipe.title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default RecipeCard;
