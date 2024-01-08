import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "3 Jan",
  "4 Jan",
  "5 Jan",
  "6 Jan",
  "7 Jan",
  "8 Jan",
  "Today"
];

export default function SimpleLineChart() {
  return (
    <LineChart
      height={300}
      series={[
        { data: pData, label: 'Data A' },
        { data: uData, label: 'Data B' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
