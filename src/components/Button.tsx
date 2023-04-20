import React, { ReactNode } from "react";
import { IState, useStateContext } from "../contexts/ContextProvider";

interface IPropsButton {
	bgColor?: string;
	color?: string;
	size?: "xs" | "md" | "sm" | "base" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
	text?: string;
	borderRadius: string;
	bgHoverColor?: string;
	icon?: ReactNode;
	width?: string;
	onClickArguments?: keyof IState;
}

const Button: React.FC<IPropsButton> = ({
	bgColor,
	color,
	size,
	text,
	borderRadius,
	icon,
	bgHoverColor,
	width,
	onClickArguments,
}) => {
	const { handleClick } = useStateContext();
	return (
		<button
			type="button"
			style={{
				backgroundColor: bgColor,
				color,
				borderRadius,
				width,
			}}
			onClick={() => (onClickArguments ? handleClick(onClickArguments) : undefined)}
			className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
		>
			{text}
			{icon}
		</button>
	);
};

export default Button;
