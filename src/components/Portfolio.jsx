import React from "react";
import BlackClover from '../assets/Portfolio/BlackClover.jpg'
import Naruto from '../assets/Portfolio/Naruto.jpg'
import high from '../assets/Portfolio/high.jpg'
import myhero from '../assets/Portfolio/myhero.jpg'
import darwin from '../assets/Portfolio/darwin.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: BlackClover,
    },
    {
      id: 2,
      src: Naruto,
    },
    {
      id: 3,
      src: high,
    },
    {
      id:4,
      src: myhero,
    },
    {
      id : 5,
      src: darwin,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Top Anime!
          </p>
          <p className="py-6">Suggested to watch!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;