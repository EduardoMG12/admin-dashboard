import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "src/contexts/ContextProvider";
import ChartsHeader from "@components/ChartsHeader";

const Area: React.FC = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 nd:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg dark:text-white rounded-3xl">
			<ChartsHeader category="Area" title="Inflation Rate in percentage" />
			<ChartComponent
				id="area-chart"
				height="420px"
				primaryXAxis={areaPrimaryXAxis}
				primaryYAxis={areaPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === "Dark" ? "#33373E" : "#fff"}
				legendSettings={{
					background: `${currentMode === "Dark" ? "#33373E" : "#fff"}`,
					textStyle: { color: `${currentMode === "Dark" ? "#fff" : "#33373E"}` },
				}}
			>
				<Inject services={[SplineAreaSeries, DateTime, Legend]} />
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Area;
