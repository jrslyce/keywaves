import { Button } from "@nextui-org/react";
import React from "react";

interface Game {
  title: string;
  logo: string;
  description: string;
}

const GamePage = ({ game }: { game: Game }) => {
	const handleApply = () => {
		// Logic to apply for the game key
	};

	return (
		<div>
			<h1>{game.title}</h1>
			<img src={game.logo} alt={`${game.title} logo`} />
			<div>{game.description}</div>
			<Button onClick={handleApply}>Apply</Button>
		</div>
	);
};

export default GamePage;
