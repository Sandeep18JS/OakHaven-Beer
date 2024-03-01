import React from 'react'

const About = () => {
    return (
        <div className='w-3/4 flex flex-col justify-center items-center mx-auto gap-10 mt-24'>
            <h3 className='font-primary text-primary text-[35px] '>About us</h3>
            <div className='flex flex-col justify-center gap-8'>
                <h3 className='font-secondary text-secondary text-[40px] text-justify tracking-wide'>
                    Welcome to the Flavors of Tradition, where each brew whispers tales of heritage and camaraderie. Step into our welcoming haven, a sanctuary for those who appreciate the finer things in life. </h3>
                <div className='flex gap-10 '>
                    <p className='font-tertiary text-secondary font-thin leading-8 '>Founded in 2056, we're dedicated to crafting exceptional brews that blend tradition with innovation. Each batch is meticulously brewed using the finest ingredients and time-honored techniques to deliver unparalleled flavor. </p>
                    <p className='font-tertiary text-secondary font-thin leading-8 '>As active  of our community, we're committed to sustainability and supporting local initiatives. Join us on our journey to share our passion for great beer and unforgettable moments. Cheers!</p>

                </div>
            </div>

            <p className='font-secondary text-secondary tracking-wider text-[24px] mt-4'>Warning: Oakhaven beers may cause extreme relaxation and enjoyment.</p>
        </div>
    )
}

export default About