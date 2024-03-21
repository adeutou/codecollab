import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

const socialLinks = [
    {
        imgSrc: images.facebook,
        link: 'https://www.facebook.com',
        width: 10,
    },
    {
        imgSrc: images.insta,
        link: 'https://www.instagram.com',
        width: 14,
    },
    {
        imgSrc: images.twitter,
        link: 'https://www.twitter.com',
        width: 14,
    },
];

const products = [
    {
        id: 1,
        section: "Bibliothèque de code",
    },
    {
        id: 2,
        section: "Forum de discussion",
    },
    {
        id: 3,
        section: "Tutoriels",
    }
];

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
                {/* COLUMN-1 */}
                <div className="sm:col-span-6 lg:col-span-5">
                    <div className="flex flex-shrink-0 items-center border-right">
                        <img src={images.logo} alt="logo" width={214} height={66} />
                    </div>
                    <h3 className="text-xs font-medium text-gunmetalgray lh-160 mt-2 mb-4 lg:mb-16">
                        Apprenez les uns des autres, <br />boostez vos compétences en codage.  <br /> La clé d'un code plus <b>efficace</b> et plus <b>performant</b>.
                    </h3>
                    <div className="flex gap-4">
                        {socialLinks.map((items, i) => (
                            <Link href={items.link} key={i}>
                                <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine" id='socialIcon'>
                                    <img src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* COLUMN-2/3/4 */}
                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-lg font-medium mb-9">{product.section}</p>
                    </div>
                ))}
            </div>
            {/* All Rights Reserved */}
            <div className="py-10 md:flex items-center justify-center border-t border-t-gray-blue">
                <h4 className="text-dark-red opacity-75 text-sm text-center md:text-start font-normal">
                    @2023.CodeCollab - All rights reserved
                </h4>
            </div>
        </div>
  );
};

export default Footer;