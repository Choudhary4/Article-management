import React, { useState } from 'react';
import axios from 'axios';

const JournalSearch = () => {
  const [authorName, setAuthorName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [journals, setJournals] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setJournals([]);

    try {
      const response = await axios.get('http://localhost:3000/api/v1/article/getJournal', {
        params: { authorName, startDate, endDate },
      });

      if (response.data.success) {
        setJournals(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while fetching journals.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-12">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Journal Search</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="authorName" className="block text-lg text-gray-600 font-medium mb-2">Author Name:</label>
          <input
            id="authorName"
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-lg text-gray-600 font-medium mb-2">Start Date:</label>
          <input
            id="startDate"
            type="date"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-lg text-gray-600 font-medium mb-2">End Date:</label>
          <input
            id="endDate"
            type="date"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>

      {error && <p className="text-red-600 mt-4 font-medium">{error}</p>}

      <div className="mt-8">
        {journals.length > 0 ? (
          <ul className="space-y-6">
            {journals.map((journal, index) => (
              <li key={index} className="border border-gray-300 bg-gray-50 p-5 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800">{journal.title}</h3>
                <p className="text-gray-600 mt-2">
                  <strong>Author(s):</strong> {journal.authors.map((author) => author.name).join(', ')}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Publication Date:</strong> {new Date(journal.publicationDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Venue:</strong> {journal.venue}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          !error && <p className="text-gray-500 mt-4 text-center">No journals found.</p>
        )}
      </div>
    </div>
  );
};

export default JournalSearch;
