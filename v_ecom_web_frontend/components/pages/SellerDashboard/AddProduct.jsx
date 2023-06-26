import React, { useState } from 'react';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data (e.g., send it to an API)

    // Reset the form fields
    setCategory('');
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-medium">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-medium">
            Image
          </label>
          <input
            type="text"
            id="image"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
