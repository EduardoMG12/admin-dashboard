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
	state: IState;
}

const StateContext = createContext<IStateContext>({
	activeMenu: true,
	setActiveMenu: () => {},
	state: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	},
});

interface IPropsContextProvider {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<IPropsContextProvider> = ({
	children,
}) => {
	const [activeMenu, setActiveMenu] = useState<boolean>(true);
	const [state, setState] = useState<IState>({
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	});

	return (
		<>
			<StateContext.Provider value={{ activeMenu, setActiveMenu, state }}>
				{children}
			</StateContext.Provider>
		</>
	);
};

export const useStateContext = () => useContext(StateContext);
