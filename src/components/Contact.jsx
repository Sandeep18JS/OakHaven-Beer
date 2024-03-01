import React from 'react'
import mapImage from '../assets/map.png'
import facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png'
import twitter1 from '../assets/icons/twitter1.png'
import email from '../assets/icons/email.png'
import telephone from '../assets/icons/telephone.png'
import location from '../assets/icons/home.png'


const Contact = () => {
    return (
        <div className=' bg-secondary flex flex-col items-center'>
            <h3 className='font-primary text-primary text-[35px] mt-10'>contact us</h3>
            <div className='w-full h-[500px] flex justify-center items-center gap-14'>
                <div className='w-2/5 h-4/5 bg-secondary text-tertiary font-secondary text-[30px]  rounded-lg flex flex-col gap-12 mt-10'>

                    <div className='ml-16 gap-10 flex flex-col'>
                        <div className='flex gap-8 '>
                            <img className='w-6 h-6 mt-[8px]' src={email} alt='email' />
                            <p className='tracking-wider text-[22px]'>oakhaven@gmail.com</p>
                        </div>
                        <div className='flex gap-8 '>
                            <img className='w-6 h-6 mt-[8px]' src={telephone} alt='telephone' />
                            <p className='tracking-wider text-[22px]'>+91 6551153535</p>
                        </div>
                        <div className='flex gap-8'>
                            <img className='w-8 h-8 mt-[6px]' src={location} alt='location' />
                            <p className='mt-1 tracking-wider text-[22px]'>36719 Dario Field, Shadburgh, India 30556</p>
                        </div>
                    </div>
                    <div className='w-[420px] border border-tertiary p-1 rounded-md ml-32'>
                        <div className='relative'>
                            <input className='w-52  bg-secondary text-[18px] rounded-md focus:outline-none ml-8' />
                            <button className='ml-10 absolute w-32 h-11 mt-[0.5px]   text-[18px] bg-tertiary text-secondary rounded-md'>Subscribe</button>
                        </div>
                    </div>

                    <div className='flex gap-5 mt-4 justify-end'>
                        <img className='w-8 h-8' src={facebook} alt='facebook' />
                        <img className='w-8 h-8' src={twitter1} alt='facebook' />
                        <img className='w-8 h-8' src={Instagram} alt='facebook' />

                    </div>
                </div>

                <div className='w-2/5 h-4/5 border-2 bg-cover bg-no-repeat bg-center rounded-lg' style={{ backgroundImage: `url(${mapImage})` }}></div>
            </div>
        </div>

    )
}

export default Contact