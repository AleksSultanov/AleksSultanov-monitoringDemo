import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ChartComponent({ data_eror, data_succses, isfull = false }) {
  const chartData = {
    labels: Object.keys(data_succses),
    datasets: [
      {
        label: "Успешно",
        data: Object.values(data_succses),
        backgroundColor: "#4caf50",
      },
      {
        label: "Ошибки",
        data: Object.values(data_eror),
        backgroundColor: "#f44336",
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: isfull,
      },
    },
    plugins: {
      legend: isfull,
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

ChartComponent.propTypes = {
  data_eror: PropTypes.object,
  data_succses: PropTypes.object,
  isfull: PropTypes.bool,
};
