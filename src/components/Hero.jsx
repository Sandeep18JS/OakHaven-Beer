import React from 'react'
import World from './canvas/World'

const Hero = () => {
    return (
        <>
            <div className='flex flex-col relative w-full  justify-center items-center'>

                <div className='h-[550px] w-full'>
                    <World />

                </div>
                <button className='bg-primary font-secondary text-tertiary text-[16px] font-bold w-52 h-12 rounded-3xl'><a href='#ordernow'> ORDER NOW </a>
                </button>
            </div>
            <div className='w-full h-[2px] bg-secondary mt-28'></div>

        </>
    )
}

export default Hero