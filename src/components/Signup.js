import React, { useState } from 'react';
import { auth } from '../firebase';
import Modal from './Modal';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = ({ show, onClose }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onClose();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Modal show={show} onClose={onClose}>
     <div className="bg-gray-900 rounded-lg p-8 w-96 mb-24 mt-4">
      <button onClick={onClose} className="float-right bg-blue-700 text-white rounded p-2 px-4">Close</button>
      <h2 className="text-3xl text-white mb-12 pt-1"><strong>Sign up</strong></h2>
      <form onSubmit={register} className="space-y-6">
      <h3 className="text-2xl font-medium text-white">Create an Account</h3>
          <div>
            <label htmlFor="email" className="text-md font-medium block mb-2 text-gray-300">Your email</label>
            <input 
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-md font-medium text-white block mb-2">Your password</label>
            <input 
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border text-gray-900 sm:text-md rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400"
              required 
            />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
      </form>
      </div>
    </Modal>
  );
};

export default Signup;
