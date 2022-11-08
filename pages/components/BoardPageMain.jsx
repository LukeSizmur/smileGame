import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import BoardPageButton from './BoardPageButton'

export default function BoardPageMain() {
    return (
        // TODO: change the hard coded username
        <div className=' grid gap-4 grid-cols-3 grid-rows-3 pt-48'>
            {/* column 1 */}
            <div className='text-center'>
                <section>
                    
                </section>
            </div>
            {/* column 2 */}
            <div>
                <section className='text-center '>
                    {/* TODO: add the image from the API */}
                    <h1 className=' text-5xl font-bold pt-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600'>Your Question</h1>
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
                    <h1 className=' text-left text-2xl font-bold'>Info:</h1>
                    <p className=' text-left'>Upon completing the question a new one will automatically generate.
                    There is a chance that the same question might render again, simply count yourself lucky! </p>
                </section>
            </div>
            {/* column 2 */}
            <div>
                <section className='text-center '>
                    {/* TODO: add the image from the API */}
                    <h1>PLACE IMAGE HERE</h1>
                </section>
            </div>
            {/* column 3 */}
            <div className='text-center'>
                
            </div>

            {/* column 1 */}
            <div className='text-center'>
                
            </div>
            {/* column 2 */}
            <div>
                <section className='text-center '>
                    <BoardPageButton />
                </section>
            </div>
            {/* column 3 */}
            <div className='text-center'>
                
            </div>
            
        </div>
        
    )
}