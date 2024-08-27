import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecipeProvider } from "@/context/RecipeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kookit",
	description: "Created by France Salvador",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RecipeProvider>
			<html data-theme="retro" lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</RecipeProvider>
	);
}
