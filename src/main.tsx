import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import AllCharts from './components/AllCharts';
import './index.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
)
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/charts" element={<AllCharts />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
