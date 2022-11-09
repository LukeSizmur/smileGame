import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import GamePageLeaderboard from './GamePageLeaderboard';

export default function GamePageMain() {
    // this gets the current date from the built in Date method
    const current = new Date();
    // then it is formatted by seperating each one by a /
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        // TODO: change the hard coded username
        <div className=' lg:grid lg:grid-cols-3 lg:gap-6'>
            {/* column 1 */}
            <div className=' pt-5'>

                <h1 className=' text-6xl 
                font-bold 
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r from-purple-500 to-pink-600'>Welcome, xszmr</h1>

                <p>Today's Date is {date}</p>
                <section className=' pt-10'>
                <h1 className=' text-4xl font-bold'>Start Playing</h1>
                <h3 className=' font-bold'>The Rules:</h3>
                <p>The aim of the game is to find the missing number within the
                    sequence on the board. <br></br> The number is hidden under an emoji.
                </p>
                <Link href="/boardPage">
                    <button className=' 
                    rounded-sm 
                    bg-white 
                    w-24 
                    m-2 
                    inline 
                    duration-300 
                    border-2 
                    border-blue-400 
                    hover:bg-blue-400 
                    hover:text-white '>Let's Go!</button>
                </Link>

                <button className=' 
                rounded-sm 
                bg-white 
                w-24 
                m-2 
                inline 
                duration-300 
                hover:bg-black 
                hover:text-white border-2 
                border-black'>Read More</button>

                <button className=' 
                rounded-sm 
                bg-white 
                w-24 
                m-2 
                font-bold 
                lg:mt-72 
                block 
                border-2 
                border-red-500 
                hover:bg-red-500 
                hover:text-white 
                duration-300'>Sign Out</button>

            </section>
            </div>
            {/* column 2 */}
            <div>
                <section className=' text-center'>
                    <Image src="/partying_face_3d-Enhanced.png" alt="Party Emoji" width={200} height={200} className=' mr-auto ml-auto mt-5' />
                    {/* this render a down arrow which is only visible on small devices (below 768px) */}
                    <button className=' 
                    rounded-full 
                    bg-purple-500 
                    w-8 
                    h-8 
                    text-2xl 
                    text-white 
                    animate-bounce 
                    mt-14
                    mb-6 
                    lg:invisible'>&#8595;</button>

                </section>
            </div>
            {/* column 3 */}
            <div className=' pt-0'>
                <GamePageLeaderboard />
            </div>
            
        </div>
        
    )
}