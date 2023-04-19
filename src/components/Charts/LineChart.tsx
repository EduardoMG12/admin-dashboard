import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	Tooltip,
	LineSeries,
} from "@syncfusion/ej2-react-charts";
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "src/contexts/ContextProvider";

const LineChart: React.FC = () => {
	const { currentMode } = useStateContext();
	return (
		<ChartComponent
			id="line-chart"
			height="420px"
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === "Dark" ? "#33373E" : "#fff"}
			legendSettings={{
				background: `${currentMode === "Dark" ? "#33373E" : "#fff"}`,
				textStyle: { color: `${currentMode === "Dark" ? "#fff" : "#33373E"}` },
			}}
		>
			<Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default LineChart;
