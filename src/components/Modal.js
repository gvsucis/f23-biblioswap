import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="bg-gray-900 rounded-lg max-w-xl max-h-3/4 p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
