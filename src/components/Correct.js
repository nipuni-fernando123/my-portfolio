import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

function Correct({ onClose }) {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
      <div className='bg-gray-100 rounded-md shadow-md w-fit h-fit p-4 md:p-5 lg:p-6 xl:p-12'>
        <div className='flex justify-center text-xl md:text-[30px] lg:text-[45px] pb-2'>
          <FaCircleCheck color='gray' />
        </div>
        <div className='text-center text-md sm:text-lg md:text-xl lg:text-2xl font-semibold pb-2'>Success!</div>
        <div className='text-center text-sm sm:text-md md:text-lg lg:text-xl pb-4'>
          Message sent successfully
        </div>
        <div className='flex justify-center'>
          <button 
            className='bg-yellow-500 w-20 sm:w-24 md:w-30 lg:w-40 text-white px-2 py-1 rounded-lg font-semibold text-md md:text-lg lg:text-xl hover:bg-yellow-600'
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Correct;
