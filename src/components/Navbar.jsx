import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'

const Navbar = () => {
    return (
        <nav>
            < div className=' flex justify-between items-center p-3 lg:mx-10' >
                <Link to='/'>
                    <div className='flex gap-2'>

                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <div className='w-12 h-[6.5px] bg-secondary'></div>
                            <div className='w-8  h-[6.5px] bg-primary'></div>
                            <div className='w-4  h-[6.5px] bg-secondary'></div>

                        </div>
                        <h3 className='font-primary text-primary text-[40px] tracking-wide '>OAKHAVEN</h3>
                    </div>
                </Link>


                <ul className='hidden lg:flex  gap-14 text-[22px] font-secondary mt-1 text-secondary '>
                    <li onClick={() => window.scrollTo(0, 1000)}><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#ourbeers'>OurBeers</a></li>
                </ul>

                <div className='hidden lg:flex gap-5 '>
                    <img className='w-8 h-8' src={facebook} alt='facebook' />
                    <img className='w-8 h-8' src={twitter} alt='facebook' />
                    <img className='w-8 h-8' src={Instagram} alt='facebook' />

                </div>


            </div >
        </nav >

    )
}

export default Navbar