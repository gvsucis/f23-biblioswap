import React, { useState } from 'react';
import Modal from './Modal';
import Signup from './Signup';

const Login = ({ show, onClose }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <Modal show={show} onClose={onClose}>
        <div className="bg-gray-900  rounded-lg p-8 w-96"> {/* Setting width and padding here */}
          <button onClick={onClose} className="float-right bg-blue-700 text-white rounded p-2">Close</button>
          <h2 className="text-3xl text-white mb-12 pt-1"><strong>Login</strong></h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <h3 className="text-2xl font-medium text-white">Sign into our platform</h3>
            <div>
              <label htmlFor="email" className="text-md font-medium text-white block mb-2">Your email</label>
              <input type="email" name="email" id="email" className="border text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="text-md font-medium text-white block mb-2">Your password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="border text-gray-900 sm:text-md rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400" required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
            <div className="text-sm pt-5 font-medium text-gray-500">
              Not registered?
              <button 
                onClick={() => {
                  setShowSignupModal(true);
                }} 
                className="text-blue-700 hover:underline text-blue-500 ml-3"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Signup show={showSignupModal} onClose={() => {
          setShowSignupModal(false);
          onClose();
      }} />
    </>
  );
};

export default Login;
