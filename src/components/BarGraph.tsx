import React from "react";
import {
  XYPlot,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import { CountType } from "../redux/equipments";

// remove the zero elements from the data object
const removeEmptyElements = (data: CountType): CountType => {
  const filteredObj: CountType = {};
  Object.keys(data)
    .filter((key) => data[key] !== 0)
    .forEach((key) => (filteredObj[key] = data[key]));
  return filteredObj;
};

// convert the data to chart data format, required by the library
const convertToChartData = (data: CountType) => {
  const chartData: { x: string; y: number }[] = [];
  Object.keys(data).forEach((key) => {
    chartData.push({ x: key, y: data[key] });
  });

  return chartData;
};

interface Props {
  data: CountType;
}

const BarGraph: React.FC<Props> = ({ data }) => {
  const filteredData = removeEmptyElements(data);

  return (
    <XYPlot xType="ordinal" height={300} width={800}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <VerticalBarSeries
        data={convertToChartData(filteredData)}
        barWidth={0.8}
        color="#ffa000"
      />
      <XAxis tickLabelAngle={-40.6} />
      <YAxis />
    </XYPlot>
  );
};

export default BarGraph;
