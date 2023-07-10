import React from 'react'

const About = () => {
  return (
    <div 
    name='about'
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
            <p className='text-xl mt-20 '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ab aliquam impedit sint earum illum atque qui maxime consequatur quis. Provident quibusdam ipsam molestiae debitis, atque minima quam dignissimos laudantium deleniti officiis, laborum ullam sint enim distinctio. Cumque ab, nesciunt laborum, saepe quo ullam earum sunt, illum accusantium labore repellat?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, optio. Accusamus sequi, facilis tempora voluptatem ea natus accusantium quibusdam hic maiores ut, ad exercitationem fugit provident et id reprehenderit quia aperiam laboriosam facere dolorem perspiciatis eligendi ipsam quas? Cum aperiam distinctio neque repellendus officia ducimus perspiciatis exercitationem minus vero nam?
            </p>
            </div>
    </div>
  )
}

export default About