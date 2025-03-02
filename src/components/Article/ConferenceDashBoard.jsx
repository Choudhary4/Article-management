import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const ConferenceDashboard = () => {
  const [organizer, setOrganizer] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [conferences, setConferences] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setConferences([]);

    try {
      const response = await axios.get('http://localhost:3000/api/v1/article/conference', {
        params: {
          organizer,
          startDate,
          endDate,
        },
      });

      if (response.data.success) {
        setConferences(response.data.conferences);
        generateChartData(response.data.conferences);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while fetching conferences');
    }
  };

  const generateChartData = (conferences) => {
    const dateCountMap = conferences.reduce((acc, conference) => {
      const startDate = new Date(conference.startDate).toISOString().split('T')[0]; // YYYY-MM-DD
      acc[startDate] = (acc[startDate] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(dateCountMap).sort();
    const data = labels.map((date) => dateCountMap[date]);

    // Define an array of colors for the bars
    const barColors = [
      'rgba(75, 192, 192, 0.6)',  // Light green
      'rgba(153, 102, 255, 0.6)', // Light purple
      'rgba(255, 159, 64, 0.6)',  // Orange
      'rgba(255, 99, 132, 0.6)',  // Red
      'rgba(54, 162, 235, 0.6)',  // Blue
      'rgba(255, 206, 86, 0.6)',  // Yellow
      'rgba(201, 203, 207, 0.6)', // Grey
    ];

    const backgroundColor = barColors.slice(0, data.length); // Adjust based on the number of bars

    setChartData({
      labels,
      datasets: [
        {
          type: 'bar', // Bar chart dataset
          label: 'Number of Conferences (Bar Chart)',
          data,
          backgroundColor: backgroundColor, 
          borderColor: backgroundColor.map((color) => color.replace('0.6', '1')), 
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div className="bg-richblack-800 p-6">
      {/* Search Form and Conference Cards in a Row */}
      <div className="flex flex-wrap gap-6 mb-6">
        {/* Search Form */}
        <div className="flex flex-col border border-richblack-300 p-6 rounded-md shadow-md w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-white mb-4">Search Conferences</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Organizer:</label>
              <input
                placeholder="Organizer"
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-white mb-2">Start Date:</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-white mb-2">End Date:</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="w-full bg-yellow-50 text-black py-2 rounded-md hover:bg-blue-600 transition"
              >
                Search and Generate Graph
              </button>
            </div>
          </div>
        </div>

        {/* Conference Cards */}
        <div className="flex-1 space-y-4">
          {conferences.map((conference, index) => (
            <div
              key={index}
              className="bg-richblack-900 border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-caribbeangreen-600">{conference.title}</h3>
                  <p className="text-white mt-2">
                    <strong className="font-semibold text-yellow-50">Organizer:</strong> {conference.organizer}
                  </p>
                  <p className="text-white mt-1">
                    <strong className="font-semibold text-yellow-50">Start Date:</strong> {new Date(conference.startDate).toLocaleDateString()}
                  </p>
                  <p className="text-white mt-1">
                    <strong className="font-semibold text-yellow-50">End Date:</strong> {new Date(conference.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-white mt-1">
                    <strong className="font-semibold text-yellow-50">Venue:</strong> {conference.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex justify-center items-center mt-6 p-4 bg-gray-50 rounded-lg shadow-md space-y-6">
        {chartData ? (
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        ) : (
          conferences.length > 0 && <p className="text-white text-center mt-4">No data to display</p>
        )}
      </div>
    </div>
  );
};

export default ConferenceDashboard;
