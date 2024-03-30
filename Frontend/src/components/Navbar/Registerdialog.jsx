import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
//import axios from 'axios';
//import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../../redux/actions/userAction";
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { images } from '../../constants';


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});



const Register = () => {
    //const navigate = useNavigate();

    let [isOpen, setIsOpen] = useState(false);
    let [error, setError] = useState(null);

    const closeModal = () => {
        setIsOpen(false)
    };

    const openModal = () => {
        setIsOpen(true)
    };

   const dispatch = useDispatch();

   const formik = useFormik({
     initialValues: {
       name: "",
       email: "",
       password: "",
     },
     validationSchema: validationSchema,
     onSubmit: (values, actions) => {
       //  alert(JSON.stringify(values, null, 2));
       dispatch(userSignUpAction(values));
       actions.resetForm();
     },
   });


    return (
      <>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
          <div className="hidden lg:block">
            <button
              className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
              onClick={openModal}
            >
              Sign up
            </button>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                      <div className="w-full max-w-md space-y-8">
                        <div>
                          <img
                            className="mx-auto h-12 w-auto"
                            src={images.logo}
                            alt="Your Company"
                          />
                          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Créér un compte
                          </h2>
                        </div>
                        <form
                          onSubmit={formik.handleSubmit}
                          className="mt-8 space-y-6"
                        >
                          <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                          />
                          <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                              <label htmlFor="name" className="sr-only">
                                User Name
                              </label>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Nom d'utilisateur"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                  formik.touched.name &&
                                  Boolean(formik.errors.name)
                                }
                                helperText={
                                  formik.touched.name && formik.errors.name
                                }
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="sr-only">
                                Email address
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Adresse e-mail"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                  formik.touched.email &&
                                  Boolean(formik.errors.email)
                                }
                                helperText={
                                  formik.touched.email && formik.errors.email
                                }
                              />
                            </div>
                            <div>
                              <label htmlFor="password" className="sr-only">
                                Password
                              </label>
                              <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Mot de passe"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                  formik.touched.password &&
                                  Boolean(formik.errors.password)
                                }
                                helperText={
                                  formik.touched.password &&
                                  formik.errors.password
                                }
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                              >
                                Se souvenir de moi
                              </label>
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon
                                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                  aria-hidden="true"
                                />
                              </span>
                              S'inscrire
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 "
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
};

export default Register;
