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
        className="dark:bg-gray-900 rounded-lg p-8"
        style={{ width: '25%', height: '40%' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
