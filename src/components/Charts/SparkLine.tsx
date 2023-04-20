import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

interface IPropsSparkLine {
	id: string;
	height: string;
	width: string;
	color: string;
	data: any;
	type?: "Line" | "Column" | "WinLoss" | "Pie" | "Area";
	currentColor: string;
}

const SparkLine: React.FC<IPropsSparkLine> = ({ id, height, width, color, data, type, currentColor }) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType="Numeric"
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName="x"
			yName="y"
			type={type}
			tooltipSettings={{
				visible: true,
				format: "${x} : data ${y}",
				trackLineSettings: {
					visible: true,
				},
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
};

export default SparkLine;
