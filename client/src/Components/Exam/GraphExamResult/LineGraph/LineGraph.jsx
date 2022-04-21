import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
const { faker } = require('@faker-js/faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Exam Result Marks',
    },
  },
};

const labels = ['Math', 'Chemistry', 'Physics', 'Technical Communication'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Internal',
      data: [45, 46, 49, 48],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'External',
      data: [89, 79, 92, 90],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Total',
      data: [134, 125, 141, 138],
      borderColor: 'rgb(247, 132, 25)',
      backgroundColor: 'rgba(153, 62, 35, 0.5)',
    },
  ],
};

export default function LineGraph() {
  return <Line className='bg-white m-3' options={options} data={data} />;
}
