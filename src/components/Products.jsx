import React from 'react'


const Products = ({ products }) => {

    return (
        <div className='w-full flex flex-col justify-center items-center mx-auto gap-10 mb-28'>
            <div className='w-full h-[2px] bg-secondary mt-28'></div>

            <h3 className='font-primary text-primary text-[35px] lg:mt-14 mb-8'>Our Beers</h3>
            <div className='w-full lg:w-4/5 flex flex-col lg:flex-row  overflow-x-hidden  justify-center items-center lg:gap-20' >
                {products.map((product, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <div className='w-[350px] h-[350px]  overflow-x-hidden'>
                            <img className=' rounded-lg w-full h-full  bg-secondary' src={product.img} alt={product.name} />
                        </div>
                        <p className='font-secondary text-secondary text-[20px]  mt-2'>{product.name}<span className='ml-32'>{product.price} </span></p>
                        <p className='font-tertiary font-thin text-secondary mb-2'>{product.style}</p>
                        <button className='w-[300px] h-10 śfont-tertiary text-[14px] text-tertiary bg-secondary font-semibold rounded-lg'>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products