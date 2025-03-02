import React from 'react';
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom';

const Page = () => {
  const handleButtonClick = (type) => {
    toast.success(`${type} clicked`);
  };

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      <div className="bg-richblack-600 rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-3xl text-white font-semibold mb-8">Choose an Option</h2>
        <div className="space-y-4">
        

          <Link to='/dashboard/create-journal'>
          <button
            onClick={() => handleButtonClick('Journal')}
            className="w-full px-6 py-2 bg-yellow-50 text-black rounded-md hover:bg-yellow-500"
          >
            Journal
          </button>
          
          </Link>
          <Link to='/dashboard/create-conference'>
          <button
            onClick={() => handleButtonClick('Conference')}
            className="w-full px-6 py-2 bg-richblack-500 text-white rounded-md hover:bg-green-600"
          >
            Conference
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Page;
