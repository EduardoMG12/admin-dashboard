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
});

interface IPropsContextProvider {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<IPropsContextProvider> = ({
	children,
}) => {
	const [activeMenu, setActiveMenu] = useState<boolean>(true);
	const [isClicked, setIsClicked] = useState<IState>(initialState);
	const handleClick = (clicked: string) => {
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
				}}
			>
				{children}
			</StateContext.Provider>
		</>
	);
};

export const useStateContext = () => useContext(StateContext);
