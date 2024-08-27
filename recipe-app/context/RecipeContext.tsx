"use client";
import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	ReactNode,
	useMemo,
} from "react";
import {
	fetchRecipes,
	fetchRecipeById,
	fetchRecipeInstructions,
} from "@/services/spoonacularApi";

interface RecipeContextType {
	recipes: any[];
	loading: boolean;
	updateRecipes: (query: string) => Promise<void>;
	getRecipeInfo: (id: number) => Promise<any>;
	getRecipeInstructions: (id: number) => Promise<any>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [recipes, setRecipes] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const updateRecipes = useCallback(async (query: string) => {
		try {
			setLoading(true);
			const data = await fetchRecipes(query);
			setRecipes(data.results);
		} catch (error) {
			console.error("Error updating recipes:", error);
		} finally {
			setLoading(false);
		}
	}, []);

	const getRecipeInfo = useCallback(async (id: number) => {
		try {
			const data = await fetchRecipeById(id);
			return data;
		} catch (error) {
			console.error("Error fetching recipe information:", error);
			throw error;
		}
	}, []);

	const getRecipeInstructions = useCallback(async (id: number) => {
		try {
			const data = await fetchRecipeInstructions(id);
			return data;
		} catch (error) {
			console.error("Error fetching recipe instructions:", error);
			throw error;
		}
	}, []);

	const contextValue = useMemo(
		() => ({
			recipes,
			loading,
			updateRecipes,
			getRecipeInfo,
			getRecipeInstructions,
		}),
		[recipes, loading, updateRecipes, getRecipeInfo, getRecipeInstructions]
	);

	return (
		<RecipeContext.Provider value={contextValue}>
			{children}
		</RecipeContext.Provider>
	);
};

export const useRecipeContext = () => {
	const context = useContext(RecipeContext);
	if (!context) {
		throw new Error(
			"useRecipeContext must be used within a RecipeProvider"
		);
	}
	return context;
};
