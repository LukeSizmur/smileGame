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
        <div className=' grid grid-cols-3 gap-6'>
            {/* column 1 */}
            <div className=' pt-5'>
                <h1 className=' text-6xl font-bold '>Welcome, xszmr</h1>
                <p>Today's Date is {date}</p>
                <section className=' pt-40 '>
                <h1 className=' text-4xl font-bold'>Start Playing</h1>
                <h3 className=' font-bold'>The Rules:</h3>
                <p>The aim of the game is to find the missing number within the
                    sequence on the board. <br></br> The number is hidden under an emoji.
                </p>
                <Link href="/boardPage">
                    <button className=' rounded-sm bg-white w-24 m-2 inline duration-300 border-2 border-blue-400 hover:bg-blue-400 hover:text-white '>Let's Go!</button>
                </Link>
                <button className=' rounded-sm bg-white w-24 m-2 inline duration-300 hover:bg-black hover:text-white border-2 border-black'>Read More</button>
                <button className=' rounded-sm bg-white w-24 m-2 font-bold mt-72 block border-2 border-red-500 hover:bg-red-500 hover:text-white duration-300'>Sign Out</button>
            </section>
            </div>
            {/* column 2 */}
            <div>
                <section className=' pt-72'>
                    <Image src="/partying_face_3d-Enhanced.png" alt="Party Emoji" width={400} height={200} />
                </section>
            </div>
            {/* column 3 */}
            <div className=' pt-0'>
                <GamePageLeaderboard />
            </div>
            
        </div>
        
    )
}