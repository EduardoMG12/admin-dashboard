import React from "react";
import { Header, LineChart } from "../../components";

const Line: React.FC = () => {
	return (
		<div className="m-4 nd:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg dark:text-white rounded-3xl">
			<Header category="Chart" title="Inflation Rate" />
			Line
			<div className="w-full">
				<LineChart />
			</div>
		</div>
	);
};

export default Line;
