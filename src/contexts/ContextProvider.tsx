import React, { createContext, useContext, useState } from "react";

interface IState {
	chat: boolean;
	cart: boolean;
	userProfile: boolean;
	notification: boolean;
}

interface IStateContext {
	activeMenu: boolean;
	setActiveMenu: (value: boolean) => void;
	isClicked: IState;
	setIsClicked: (value: IState) => void;
	handleClick: (clicked: keyof IState) => void;
	screenSize: number | undefined;
	setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const initialState: IState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

const StateContext = createContext<IStateContext>({
	activeMenu: true,
	setActiveMenu: () => {},
	isClicked: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	},
	setIsClicked: () => {},
	handleClick: () => {},
	screenSize: 1920,
	setScreenSize: () => {},
});

interface IPropsContextProvider {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<IPropsContextProvider> = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState<boolean>(true);
	const [isClicked, setIsClicked] = useState<IState>(initialState);
	const [screenSize, setScreenSize] = useState<number | undefined>(1920);

	const handleClick = (clicked: keyof IState) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};

	return (
		<>
			<StateContext.Provider
				value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}
			>
				{children}
			</StateContext.Provider>
		</>
	);
};

export const useStateContext = () => useContext(StateContext);
