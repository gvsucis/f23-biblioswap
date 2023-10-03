import React from 'react';
import Modal from './Modal';

const Signup = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
        <button onClick={onClose} className="float-right bg-blue-700 text-white rounded p-2 px-4">Close</button>
        <h2 className="text-3xl text-white mb-12 pt-1"><strong>Sign up</strong></h2>
      <form onSubmit={(e) => e.preventDefault()}  className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
      <h3 className="text-2xl font-medium text-gray-900 dark:text-white dark:bg-gray-900">Create an Account</h3>
          <div>
            <label htmlFor="email" className="text-md font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="text-md font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
      </form>
    </Modal>
  );
};

export default Signup;
