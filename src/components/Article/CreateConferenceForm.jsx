import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const CreateConferenceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organizer: '',
    startDate: '',
    endDate: '',
    location: '',
    category: '',
    venue: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, organizer, category, venue, location } = formData;
    if (!name || !organizer || !category || !venue || !location) {
      toast.error('Please fill all fields');
      return;
    }

    const token = localStorage.getItem('token');
    setIsSubmitting(true); 

    try {
      const response = await fetch('http://localhost:3000/api/v1/article/createConference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        toast.success(data.message);
        setFormData({
          name: '',
          organizer: '',
          startDate: '',
          endDate: '',
          location: '',
          category: '',
          venue: '',
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error creating conference:', error);
      toast.error('Failed to create conference');
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    
      

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-richblack-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-richblack-25 text-center mb-4">Create Research Conference</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter conference name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="organizer" className="block text-white">Organizer</label>
          <input
            id="organizer"
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            required
            placeholder="Enter organizer name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-white">Start Date</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="Select start date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block text-white">End Date</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="Select end date"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-white">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-white">Category</label>
          <input
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="Enter category"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="venue" className="block text-white">Venue</label>
          <input
            id="venue"
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            placeholder="Enter venue"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 bg-richblack-600"
          />
        </div>

        <div className="mt-4 text-center">
          <button
            type="submit"
            className="w-full bg-yellow-50 text-richblack-900 py-2 px-4 rounded-lg hover:bg-yellow-600"
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? 'Creating...' : 'Create Conference'}
          </button>
        </div>
      </form>
    
  );
};

export default CreateConferenceForm;
