import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const baseUrl = "https://api.spoonacular.com";

const spoonacularApi = axios.create({
	baseURL: baseUrl,
	headers: {
		"x-api-key": apiKey,
	},
});

export const fetchRecipes = async (query: string) => {
	try {
		const response = await spoonacularApi.get("/recipes/complexSearch", {
			params: {
				query,
				number: 20,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching recipes:", error);
		throw error;
	}
};

export const fetchRecipeById = async (id: number) => {
	try {
		const response = await spoonacularApi.get(`/recipes/${id}/information`);
		return response.data;
	} catch (error) {
		console.error("Error fetching recipe information:", error);
		throw error;
	}
};

export const fetchRecipeInstructions = async (id: number) => {
	try {
		const response = await spoonacularApi.get(
			`/recipes/${id}/analyzedInstructions`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching recipe instructions:", error);
		throw error;
	}
};

export default spoonacularApi;
