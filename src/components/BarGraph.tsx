import React from "react";
import {
  XYPlot,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 1 },
  { x: 10, y: 8 },
  { x: 11, y: 7 },
];

const BarGraph = () => {
  return (
    <XYPlot height={300} width={800}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <VerticalBarSeries data={data} barWidth={0.6} color="#ffa000" />
      <XAxis />
      <YAxis />
    </XYPlot>
  );
};

export default BarGraph;
