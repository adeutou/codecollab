import React from 'react';
import { images } from '../../constants';

const Banner = () => {
    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <img src={images.check} alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>C'est toujours mieux ensemble.</h3>
                        </div>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Améliorez vos <b>skills</b> tout en ayant du <b>fun</b>.</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>La puissance du code, décuplée par la collaboration.</h3>

                        <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0">
                            <a href="#about" id="moreAbout" className="py-6 lg:py-8 w-full opacity-80 focus:outline-none focus:shadow-outline bg-Blueviolet hover:bg-midnightblue duration-150 ease-in-out rounded-full">Plus de détails</a>
                        </div>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <img src={images.checkCircle} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={images.checkCircle} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>biblithèque de code</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={images.checkCircle} alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Communauté</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <img src={images.imgCollab} alt="nothing"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;