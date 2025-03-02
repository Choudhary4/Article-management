import React, { useState } from 'react';
import { addArticleDetails } from '../../services/operations/articleDetailsAPI'; // Adjust the import path as necessary

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    
    authors: [{ name: '', affiliation: '', email: '' }],
    abstract: '',
    category: '',
    introduction: '',
    literatureReview: '',
    methodology: '',
    results: '',
    discussion: '',
    conclusion: '',
    acknowledgements: '',
    references: [''],
    appendices: [''],
    figuresAndTables: [''],
  });

  const [picture, setPicture] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAuthorChange = (index, field, value) => {
    const newAuthors = [...formData.authors];
    newAuthors[index][field] = value;
    setFormData({ ...formData, authors: newAuthors });
  };

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: '', affiliation: '', email: '' }],
    });
  };

  const handleReferenceChange = (index, value) => {
    const newReferences = [...formData.references];
    newReferences[index] = value;
    setFormData({ ...formData, references: newReferences });
  };

 // Function to handle changes in array inputs
const handleArrayChange = (e, fieldName, index) => {
    const { value } = e.target;
    setFormData((prevFormData) => {
      const updatedArray = [...prevFormData[fieldName]];
      updatedArray[index] = value;
      return {
        ...prevFormData,
        [fieldName]: updatedArray,
      };
    });
  };
  
  // Function to add an empty element to an array field
  const handleAddToArray = (fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: [...prevFormData[fieldName], ""],
    }));
  };
  
  // Function to remove an element from an array field
  const handleRemoveFromArray = (fieldName, index) => {
    setFormData((prevFormData) => {
      const updatedArray = prevFormData[fieldName].filter((_, i) => i !== index);
      return {
        ...prevFormData,
        [fieldName]: updatedArray,
      };
    });
  };
  
  const handleFileChange = (e) => {
    setPicture(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Replace with actual token management
  
    try {
    //   // Assuming `authors` is a string (e.g., from an input field)
      if (typeof formData.authors === "string") {
        // If it's a string, parse it into an array of objects
        formData.authors = JSON.parse(formData.authors);
        console.log("authors",authors)
      }
  
      // Now, ensure `authors` is an array of objects
      if (!Array.isArray(formData.authors)) {
        throw new Error("Authors should be an array of objects.");
      }
  
      // Continue with the API call
      await addArticleDetails(
        formData.title,
        formData.authors,
        formData.abstract,
        formData.category,
        formData.introduction,
        formData.literatureReview,
        formData.methodology,
        formData.results,
        formData.discussion,
        formData.conclusion,
        formData.acknowledgements,
        formData.references,
        formData.appendices,
        formData.figuresAndTables,
        picture,
        token
      );
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Submit Your Article</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Authors Section */}
      <h3 className="text-lg font-semibold mb-4">Authors</h3>
      {formData.authors.map((author, index) => (
        <div key={index} className="mb-4 p-4 border rounded-md bg-gray-50">
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            value={author.name}
            onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block text-gray-700 font-semibold mb-2">Affiliation:</label>
          <input
            type="text"
            value={author.affiliation}
            onChange={(e) => handleAuthorChange(index, 'affiliation', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            value={author.email}
            onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      ))}
      <button type="button" onClick={addAuthor} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">
        Add Author
      </button>

      {/* Abstract Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Abstract:</label>
        <textarea
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Introduction Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Introduction:</label>
        <textarea
          name="introduction"
          value={formData.introduction}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      {/* Literature Review */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Literature Review:</label>
  <textarea
    name="literatureReview"
    value={formData.literatureReview}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
  ></textarea>
</div>

{/* Methodology */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Methodology:</label>
  <textarea
    name="methodology"
    value={formData.methodology}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  ></textarea>
</div>

{/* Results */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Results:</label>
  <textarea
    name="results"
    value={formData.results}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  ></textarea>
</div>

{/* Discussion */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Discussion:</label>
  <textarea
    name="discussion"
    value={formData.discussion}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  ></textarea>
</div>

{/* Conclusion */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Conclusion:</label>
  <textarea
    name="conclusion"
    value={formData.conclusion}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  ></textarea>
</div>

{/* Acknowledgements */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Acknowledgements:</label>
  <textarea
    name="acknowledgements"
    value={formData.acknowledgements}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
  ></textarea>
</div>

{/* References */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">References:</label>
  {formData.references.map((reference, index) => (
    <div key={index} className="flex items-center mb-2">
      <input
        type="text"
        value={reference}
        onChange={(e) => handleArrayChange(e, 'references', index)}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => handleRemoveFromArray('references', index)}
        className="ml-2 text-red-500"
      >
        Remove
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={() => handleAddToArray('references')}
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
  >
    Add Reference
  </button>
</div>

{/* Appendices */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Appendices:</label>
  {formData.appendices.map((appendix, index) => (
    <div key={index} className="flex items-center mb-2">
      <input
        type="text"
        value={appendix}
        onChange={(e) => handleArrayChange(e, 'appendices', index)}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => handleRemoveFromArray('appendices', index)}
        className="ml-2 text-red-500"
      >
        Remove
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={() => handleAddToArray('appendices')}
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
  >
    Add Appendix
  </button>
</div>

{/* Figures and Tables */}
<div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2">Figures and Tables:</label>
  {formData.figuresAndTables.map((figureOrTable, index) => (
    <div key={index} className="flex items-center mb-2">
      <input
        type="text"
        value={figureOrTable}
        onChange={(e) => handleArrayChange(e, 'figuresAndTables', index)}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => handleRemoveFromArray('figuresAndTables', index)}
        className="ml-2 text-red-500"
      >
        Remove
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={() => handleAddToArray('figuresAndTables')}
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
  >
    Add Figure/Table
  </button>
</div>


      {/* Picture Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Upload Pictures:</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
        />
      </div>

    

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Submit Article
      </button>
    </form>
  );
};

export default ArticleForm;
