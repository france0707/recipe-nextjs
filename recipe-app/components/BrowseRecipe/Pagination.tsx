import React, { useEffect } from "react";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPages,
	currentPage,
	setCurrentPage,
}) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [currentPage]);

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div className="join mx-auto m-4">
			<button
				className="join-item btn"
				onClick={handlePrevious}
				disabled={currentPage === 1}
			>
				«
			</button>
			<span className="join-item btn">
				Page {currentPage} of {totalPages}
			</span>
			<button
				className="join-item btn"
				onClick={handleNext}
				disabled={currentPage === totalPages}
			>
				»
			</button>
		</div>
	);
};

export default Pagination;
