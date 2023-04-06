import React from "react";

interface IPropsButton {
	bgColor: string;
	color: string;
	size?: "xs" | "md" | "sm" | "base" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
	text: string;
	borderRadius: string;
}

const Button: React.FC<IPropsButton> = ({ bgColor, color, size, text, borderRadius }) => {
	return (
		<button
			type="button"
			style={{
				backgroundColor: bgColor,
				color,
				borderRadius,
			}}
			className={`text-${size} p-3 hover:drop-shadow-xl`}
		>
			{text}
		</button>
	);
};

export default Button;
