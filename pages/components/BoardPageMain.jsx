import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function BoardPageMain() {
    return (
        // TODO: change the hard coded username
        <div className=' grid gap-4 grid-cols-3 grid-rows-3'>
            {/* column 1 */}
            <div className='text-center'>
                <section>
                    <h1>Your Question 1</h1>
                </section>
            </div>
            {/* column 2 */}
            <div>
                <section className='text-center '>
                    {/* TODO: add the image from the API */}
                    <h1 className=' text-5xl font-bold pt-10 bg-red-500'>Your Question</h1>
                </section>
            </div>
            {/* column 3 */}
            <div className='text-center'>
                {/* TODO: Use variables for username and questions answered */}
                <h1 className=' text-4xl font-bold pt-10'>xszmr Total: 32</h1>
            </div>

            {/* column 1 */}
            <div className='text-center'>
                <section>
                    <h1 className=' text-left text-2xl font-bold'>Info</h1>
                    <p className=' text-left'>Upon completing the qestion a new one will automatically generate</p>
                </section>
            </div>
            {/* column 2 */}
            <div>
                <section className='text-center '>
                    {/* TODO: add the image from the API */}
                    <h1>Your Question 5</h1>
                </section>
            </div>
            {/* column 3 */}
            <div className='text-center'>
                <h1>Your Question 6</h1>
            </div>
            
        </div>
        
    )
}