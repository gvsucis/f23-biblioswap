import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800"> {/* Flex container with minimum height */}
      <Navbar />

      <div className="flex-grow"> {/* Content grows to fill available space */}
        {/* Header Section */}
        <div className="bg-gray-900 py-12 text-center border border-slate-800 text-white">
          <h1 className="text-4xl font-bold mb-6">Contact us Below</h1>
        </div>

        <div className="w-full flex justify-center bg-slate-800 py-12 text-center text-white mt-12">
          <p className="w-1/2 text-2xl">
            If you have any questions, suggestions, or need assistance, feel free to reach out to us at Biblioswap. You can contact us via email at <span className="underline">support@biblioswap.com</span>, or call us at <span className="underline">1-800-BIBLIO</span>.
          </p>
        </div>
        <div className="w-full flex justify-center bg-slate-800 py-12 text-center text-white">
          <p className="w-1/2 text-2xl">
            Our team is available Monday through Friday, 9 AM to 5 PM. We're here to help you with any inquiries regarding book swaps, membership, or our services. Your feedback and satisfaction are important to us!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;


