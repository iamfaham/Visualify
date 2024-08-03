'use client';

import React from 'react';

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-xl font-bold mb-4">Try this at your own risk</h2>
        <p className="mb-4">
          If you click save image after the transformation, it will show up in the recent edits to other users as well.
          If you directly download it will not show up on recent edits.
        </p>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
