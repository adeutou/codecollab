import React from "react";

export const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            OOPS!
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Impossible de trouver cette page 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="
   rounded-md 
  
  px-3.5 
  py-2.5 
  text-sm 
  font-semibold 
  text-white 
  shadow-sm 
  transition-all 
  duration-300 
  ease-in-out 
  bg-Blueviolet hover:text-black hover:bg-semiblueviolet
  focus-visible:outline 
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
  focus-visible:outline-indigo
"
            >
              Retourner a l'accueil
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
