import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import { images } from '../../constants';

const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'Bibliothèque de code', href: '#mentor', current: false },
    { name: 'Forum', href: '#forum', current: false },
    { name: 'Tutoriels', href: '#testimonial', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }) => {
    return (
        <Link href={href} passhref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href) => {
        setCurrentLink(href);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img
                                        className="block h-12 w-40 lg:hidden"
                                        src={images.logo}
                                        alt="dsign-logo"
                                    />
                                    <img
                                        className="hidden h-full w-full lg:block"
                                        src={images.logo}
                                        alt="dsign-logo"
                                    />
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        <Signdialog />

                        {/* REGISTER DIALOG */}

                        <Registerdialog />

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;