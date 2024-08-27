import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

const StartPage = () => {
	return (
		<section className="hero bg-base-100 min-h-dvh">
			<article className="hero-content min-w-full p-0 text-center flex flex-col justify-center mb-auto">
				<div className="w-full bg-accent py-2">
					<h1 className="text-4xl text center font-extrabold">
						Kookit
					</h1>
				</div>

				<figure className="flex justify-center">
					<Image
						src="/Chef.svg"
						width={500}
						height={500}
						alt="Illustration of a Chef"
						className="grow max-w-72"
						priority
					/>
				</figure>

				<SearchInput />
			</article>
		</section>
	);
};

export default StartPage;
