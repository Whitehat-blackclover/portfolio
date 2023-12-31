import React from 'react'
import heroImage from '../assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

function home() {
  return (
    <div  name = "home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hey!</h2>
                <div className='text-4xl sm:text-7xl font-bold text-white pt-1'>
                <h2 className=''>
                I'm Vyom
                </h2>
                </div>
                <p className='text-gray-500 py-4 mx-w-md'>
                    This is my first complete personal portfolio project.<br/>
                    I made this using HTML, CSS, JS, React & Tailwind.<br/>
                    Check out this project.
                    And let me know if i could make it better.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Top Anime
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default home