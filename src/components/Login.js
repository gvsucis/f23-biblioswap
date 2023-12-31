import React, { useState } from 'react';
import { auth } from '../firebase';
import Modal from './Modal';
import Signup from './Signup';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = ({ show, onClose }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [error, setError] = useState('');

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onClose(); //close the modal on success
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Modal show={show} onClose={onClose}>
        <div className="bg-gray-900  rounded-lg p-8 w-96">
          <button onClick={onClose} className="float-right bg-blue-700 hover:bg-blue-500 transition duration-300 text-white rounded pl-4 pr-4 p-2">Close</button>
          <h2 className="text-3xl text-white mb-12 pt-1"><strong>Login</strong></h2>
          <form onSubmit={login} className="space-y-6">
            <h3 className="text-2xl font-medium text-white">Sign into our platform</h3>
            <div>
              <label htmlFor="email" className="text-md font-medium text-white block mb-2">Your email</label>
              <input 
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border text-white sm:text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400"
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
              <div className='text-center'>{error && <p className="text-red-500">{error}</p>}</div>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-500 transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
            <div className="text-sm pt-5 font-medium text-gray-500">
              Not registered?
              <button 
                onClick={() => {
                  setShowSignupModal(true);
                }} 
                className="text-blue-700 hover:text-blue-500 transition duration-300 hover:underline ml-3"
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
