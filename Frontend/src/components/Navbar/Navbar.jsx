import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import { images } from "../../constants";
import { userLogoutAction } from '../../redux/actions/userAction';

const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'Bibliothèque de code', href: '/codesnippet', current: false },
    { name: 'Forum', href: '/forum', current: false },
    { name: 'Tutoriels', href: '/tutoriel', current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({ to, onClick, children }) => {
    return (
        <Link to={to} passhref>
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

    const { userInfo } = useSelector((state) => state.signIn);
    const isLoggedIn = !!userInfo;
    const dispatch = useDispatch();

    const handleLinkClick = (href) => {
        setCurrentLink(href);
    };

    const handleLogout = () => {
        dispatch(userLogoutAction());
        setTimeout(() => {
            window.location.href = '/'; 
        }, 2000);
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
                                            to={item.href}
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

                        {isLoggedIn ? (
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                    <img className="block h-14 w-40" src={images.user_img} alt="user"/>
                                    <ChevronDownIcon className="-ml-11 mt-8 w-5 text-gray-400" aria-hidden="true" />
                                </Menu.Button>
                                </div>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <button
                                            type="submit"
                                            className={classNames(
                                                active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                                "block w-full px-4 py-2 text-left text-sm"
                                            )}
                                            onClick={handleLogout}
                                            >
                                            Se deconnecter
                                            </button>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                                </Transition>
                            </Menu>
                            ) : (
                            <>
                                {/* SIGNIN DIALOG */}

                                <Signdialog />

                                {/* REGISTER DIALOG */}

                                <Registerdialog />
                            </>
                            )
                        }

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
