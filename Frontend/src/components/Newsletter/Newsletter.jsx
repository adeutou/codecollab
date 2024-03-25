import React, { useState } from 'react';
import axios from 'axios';
import { images } from '../../constants';
  


const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/subscribe', { email });console.log(email);
            alert('Subscription successful!');
        } catch (error) {
            alert('Subscription failed. Please try again.');
        }
    };

    return (
        <>
            {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
            <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    <div className="col-span-12 bg-imagee">
                        <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
                            <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">Newsletter.</h3>
                            <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                                Inscrivez-vous à notre Newsletter pour rester informé <br /> sur de nouveaux sujets, tutoriels et bien plus encore.
                            </h3>

                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
                                        <input 
                                            type="email" 
                                            name="q" 
                                            className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" 
                                            placeholder="Entrer votre adresse email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            autoComplete="off" 
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                            <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                                <img src={images.imgSend} alt="send-icon" width={30} height={30} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Newsletter;