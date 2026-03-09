'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export function TrafficChart() {
  return (
    <Line
      data={{
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
        datasets: [{ label: 'Trafic', data: [1200, 1900, 2400, 2100, 3200, 3600], borderColor: '#2563eb' }]
      }}
    />
  );
}

export function LeadsChart() {
  return (
    <Bar
      data={{
        labels: ['SEO', 'Pub', 'Formulaire'],
        datasets: [{ label: 'Leads', data: [18, 15, 9], backgroundColor: ['#4f46e5', '#0ea5e9', '#10b981'] }]
      }}
    />
  );
}
