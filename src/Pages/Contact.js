import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Correct from '../components/Correct';

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "52f2c0bd-1b70-46a1-8831-c7025a49ba4b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setShowSuccess(true);
      formRef.current.reset(); // Reset the form fields
    }
  };

  return (
    <div className="bg-blue-950 overflow-hidden h-screen relative">
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
        <div className="text-gray-400 text-[30px] sm:text-[40px] md:text-[50px] font-bold mt-4 text-center">
          Contact Me
        </div>
      </div>

      <div className="mt-[120px] lg:mt-[150px] h-[calc(100vh-200px)] lg:h-auto lg:flex lg:items-center lg:justify-center overflow-y-auto lg:overflow-hidden">
        <div className='flex justify-between items-center xl:mx-48 mx-16 mt-16'>
          <div className='w-full h-fit bg-white rounded-md p-8 pb-8 relative'>
            {showSuccess && <Correct onClose={() => setShowSuccess(false)} />}
            <form ref={formRef} onSubmit={onSubmit}>
              <div className='xl:flex'>
                <input type="text" name="firstname" placeholder='Enter First Name' required className='bg-gray-300 text-md md:text-lg lg:text-xl w-full xl:w-[780px] p-2 rounded-md font-semibold text-gray-800 xl:mr-4 mt-4' required />
                <input type="text" name="lastname" placeholder='Enter Last Name' required className='bg-gray-300 text-md md:text-lg lg:text-xl w-full xl:w-[780px] p-2 rounded-md font-semibold text-gray-800 mt-4' required />
              </div>
              <input type="email" name="email" placeholder='Enter Email Address' required className='bg-gray-300 text-md md:text-lg lg:text-xl w-full  p-2 rounded-md font-semibold text-gray-800 mt-4' required />
              <textarea name="message" placeholder='Enter Message' required className='bg-gray-300 text-md md:text-lg lg:text-xl w-full h-[300px] p-2 rounded-md font-semibold text-gray-800 mt-4' required></textarea>
              <div className='flex justify-end mt-4'>
                <button type="submit" className="bg-yellow-500 w-40 md:w-50 lg:w-60 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg font-semibold text-lg md:text-xl lg:text-2xl hover:bg-yellow-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
