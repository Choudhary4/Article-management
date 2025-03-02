import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePickerStyles.css';
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const CreateJournalForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    authors: [{ name: '', affiliation: '', email: '' }],
    picture: '',
    category: '',
    publicationDate: '',
    volume: '',
    issue: '',
    pages: { start: '', end: '' },
    venue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuthorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAuthors = [...formData.authors];
    updatedAuthors[index][name] = value;
    setFormData({ ...formData, authors: updatedAuthors });
  };

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: '', affiliation: '', email: '' }]
    });
  };

  const handlePageChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, pages: { ...formData.pages, [name]: value } });
  };
 
  const handleSubmit = async (e) => {

   
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:3000/api/v1/article/createJournal', formData, {
        headers: {
          Authorization: `Bearer ${token}` // Replace with your authentication logic
        }
      });
      console.log('Journal created:', response.data);
      
      toast.success('Journal created successfully')

     
      
    } catch (error) {
      console.error('Error creating journal:', error);
    
      toast.error('An error occurred while creating the journal');
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, publicationDate: date.toISOString() }); // Ensure date is in ISO format
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-richblack-800 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">Create Journal</h2>

      <div className="mb-4">
        <label className="block text-white">Title:</label>
        <input
          placeholder='Title'
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 bg-richblack-600 text-white py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white">Authors:</label>
        {formData.authors.map((author, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={author.name}
              onChange={(e) => handleAuthorChange(index, e)}
              required
              className="w-full px-4 py-2 mb-2 text-white bg-richblack-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="affiliation"
              placeholder="Affiliation"
              value={author.affiliation}
              onChange={(e) => handleAuthorChange(index, e)}
              className="w-full px-4 py-2 mb-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={author.email}
              onChange={(e) => handleAuthorChange(index, e)}
              className="w-full px-4 py-2 border rounded-md text-white bg-richblack-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addAuthor}
          className="mt-2 px-4 py-2 bg-yellow-50 text-black rounded-md hover:bg-blue-600"
        >
          Add Author
        </button>
      </div>

    

      <div className="mb-4">
        <label className="block text-white">Category:</label>
        <input
          placeholder='Category'
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white">Publication Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          placeholderText="dd-mm-yyyy"
          className="w-full px-4 py-2 border bg-richblack-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white">Volume:</label>
        <input
          placeholder='Volume'
          type="number"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
          min="1"
          className="w-full px-4 py-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white">Issue:</label>
        <input
          placeholder='Issue'
          type="number"
          name="issue"
          value={formData.issue}
          onChange={handleChange}
          min="1"
          className="w-full px-4 py-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white">Pages:</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="start"
            placeholder="Start Page"
            value={formData.pages.start}
            onChange={handlePageChange}
            min="1"
            className="w-full px-4 py-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="end"
            placeholder="End Page"
            value={formData.pages.end}
            onChange={handlePageChange}
            min="1"
            className="w-full px-4 py-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-white">Venue:</label>
        <input
          placeholder='International Journal of Computer Science'
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border text-white bg-richblack-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-yellow-50 text-black rounded-md hover:bg-green-600"
      >
        Create Journal
      </button>
    </form>
  );
};

export default CreateJournalForm;
