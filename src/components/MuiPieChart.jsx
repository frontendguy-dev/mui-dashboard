import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 5, label: 'Product A' },
            { id: 1, value: 15, label: 'Product B' },
            { id: 2, value: 10, label: 'Product C' },
            { id: 3, value: 40, label: 'Product D' },
          ],
        },
      ]}
      width={320}
      height={200}
    />
  );
}