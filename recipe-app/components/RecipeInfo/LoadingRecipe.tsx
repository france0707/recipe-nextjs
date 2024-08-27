import React from "react";

const LoadingRecipe = () => {
	return (
		<div
			role="alert"
			className="alert bg-base-300 my-4 mx-auto w-auto flex flex-row items-center text-center font-medium"
		>
			<div className="flex items-center">
				<span className="loading loading-spinner loading-md mr-2"></span>
				<span>Loading Recipe</span>
			</div>
		</div>
	);
};

export default LoadingRecipe;
