import React, { createContext, useContext, useState } from "react";

export interface IState {
	chat: boolean;
	cart: boolean;
	userProfile: boolean;
	notification: boolean;
	close: boolean;
}

interface IStateContext {
	activeMenu: boolean;
	setActiveMenu: (value: boolean) => void;
	isClicked: IState;
	setIsClicked: (value: IState) => void;
	handleClick: (clicked: keyof IState) => void;
	screenSize: number | undefined;
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
	currentColor: string;
	currentMode: string;
	setCurrentColor: (value: any) => void;
	setCurrentMode: (value: any) => void;
	setThemeSettings: (value: any) => void;
	themeSettings: boolean;
	setMode: (value: any) => void;
	setColor: (value: any) => void;
}

const initialState: IState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
	close: true,
};

const StateContext = createContext<IStateContext>({
	activeMenu: true,
	setActiveMenu: () => {},
	isClicked: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
		close: true,
	},
	setIsClicked: () => {},
	handleClick: () => {},
	screenSize: 1920,
	setScreenSize: () => {},
	currentColor: "#03C9D7",
	currentMode: "Light",
	setCurrentColor: () => {},
	setCurrentMode: () => {},
	setThemeSettings: () => {},
	themeSettings: false,
	setMode: () => {},
	setColor: () => {},
});

interface IPropsContextProvider {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<IPropsContextProvider> = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState<IState>(initialState);
	const [screenSize, setScreenSize] = useState<number | undefined>(1920);
	const [currentColor, setCurrentColor] = useState(localStorage.getItem("colorMode") || "#03C9D7");
	const [currentMode, setCurrentMode] = useState(localStorage.getItem("themeMode") || "Light");
	const [themeSettings, setThemeSettings] = useState(false);

	const setColor = (e: any) => {
		setCurrentColor(e);

		localStorage.setItem("colorMode", e);
	};

	const setMode = (e: any) => {
		setCurrentMode(e.target.value);

		localStorage.setItem("themeMode", e.target.value);
	};
	const handleClick = (clicked: keyof IState) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};

	return (
		<>
			<StateContext.Provider
				value={{
					activeMenu,
					setActiveMenu,
					isClicked,
					setIsClicked,
					handleClick,
					screenSize,
					setScreenSize,
					currentColor,
					currentMode,
					setCurrentColor,
					setCurrentMode,
					themeSettings,
					setThemeSettings,
					setMode,
					setColor,
				}}
			>
				{children}
			</StateContext.Provider>
		</>
	);
};

export const useStateContext = () => useContext(StateContext);
