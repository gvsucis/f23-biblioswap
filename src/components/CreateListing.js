import React, { useState } from 'react';
import { db } from '../firebase'; // Make sure this path is correct
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase'; // Import your storage reference

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    contactEmail: '',
    imageUrl: '',
    description: '',
  });

  const [file, setFile] = useState(null); // State to store the uploaded file

  // Update form data as the user types
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle file upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the file to state
  };

  const handleImageUpload = async () => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Image upload error: ", error);
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageUrl = await handleImageUpload(); // Upload the image first and get the URL
    try {
      await addDoc(collection(db, 'listings'), {
        ...formData,
        imageUrl, // Add the image URL to the document
      });
      // Clear form, reset file, give success message, etc.
      setFormData({ title: '', author: '', contactEmail: '', imageUrl: '', description: '' });
      setFile(null);
    } catch (error) {
      // Handle errors, such as displaying a user-friendly error message
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-5 text-3xl block uppercase tracking-wide font-bold">
            Insert Book Details
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="title">
              Book Title
            </label>
            <input className="appearance-none block w-full text-gray-700 bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Enter book title" name="title" value={formData.title} onChange={handleChange} />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-whiteborder rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="author" type="text" placeholder="Enter author's name" name="author" value={formData.author} onChange={handleChange} />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="contactEmail">
              Contact Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="contactEmail" type="email" placeholder="Enter contact email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="description" placeholder="Enter a brief description" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="image-upload">
              Upload Image
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image-upload" type="file" onChange={handleFileChange} />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button className="bg-blue-700 hover:bg-blue-500 transition duration-300 text-white font-bold py-2 px-4 rounded" type="submit">
              Submit Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
