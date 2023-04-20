import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	Inject,
	AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

interface IPropsPie {
	id: string;
	data: { x: string; y: number; text: string }[];
	legendVisiblity: boolean;
	height: string;
}

const Pie: React.FC<IPropsPie> = ({ id, data, legendVisiblity, height }) => {
	const { currentMode } = useStateContext();

	return (
		<AccumulationChartComponent
			id={id}
			legendSettings={{
				visible: legendVisiblity,
				background: `${currentMode === "Dark" ? "#33373E" : "#fff"}`,
				textStyle: { color: `${currentMode === "Dark" ? "#fff" : "#33373E"}` },
			}}
			height={height}
			background={currentMode === "Dark" ? "#33373E" : "#fff"}
			tooltip={{ enable: true }}
		>
			<Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					name="Sale"
					dataSource={data}
					xName="x"
					yName="y"
					innerRadius="40%"
					startAngle={0}
					endAngle={360}
					radius="70%"
					explode
					explodeOffset="10%"
					explodeIndex={2}
					dataLabel={{
						visible: true,
						name: "text",
						position: "Inside",
						font: {
							fontWeight: "600",
							color: "#fff",
						},
					}}
				/>
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	);
};

export default Pie;
