import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const JournalChart = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/article/getJournal', {
        params: {
          startDate,
          endDate,
        },
      });

      if (response.data.success) {
        const journals = response.data.data;

        // Group journals by date
        const dateCountMap = journals.reduce((acc, journal) => {
          const publicationDate = new Date(journal.publicationDate).toISOString().split('T')[0]; // YYYY-MM-DD
          acc[publicationDate] = (acc[publicationDate] || 0) + 1;
          return acc;
        }, {});

        // Prepare data for the chart
        const labels = Object.keys(dateCountMap).sort();
        const data = labels.map((date) => dateCountMap[date]);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Number of Journals',
              data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while fetching journals');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Journal Count in a Time Period</h2>
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700 mb-2">Start Date:</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">End Date:</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleFetchData}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Generate Graph
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6">
        {chartData ? (
          <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        ) : (
          !error && <p className="text-gray-500 mt-4">No data to display</p>
        )}
      </div>
    </div>
  );
};

export default JournalChart;
