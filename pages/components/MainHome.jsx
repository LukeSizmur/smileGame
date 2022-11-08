import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MainHome() {
    return (
        <div className="Container">
                <div className='bg-white p-5 rounded-xl drop-shadow-2xl h-98 mt-48'>
                    <h1 className='text-3xl font-bold text-center '>Welcome to the Smile Game</h1>
                    <h4 className='p-4 
                    text-center 
                    text-lg 
                    text-transparent
                    bg-clip-text
                    font-bold
                    bg-gradient-to-r from-orange-500 to-purple-500
                    '>A sudoku like game, with a personality</h4>
                    <h5 className=' text-left
                     font-bold
                     text-xl 
                     bg-clip-text
                     text-transparent
                     bg-gradient-to-r from-orange-500 to-purple-500'>How to play:</h5>
                    <p>The aim of the game is to find the missing number (it will only be a single digit)
                    within the sequence on the board. The number
                    is hidden under an emoji. Below is an example:</p>
                    <Image src='/exampleImage.png' alt='example of the game' width={400} height={300} className=' mr-auto ml-auto mt-3'/>
                    <Link href="/gamePage">
                        <button className=' rounded-2xl
                        bg-gradient-to-r from-orange-500 to-purple-500 
                        w-20 
                        text-white 
                        text-2xl 
                        font-bold
                        hover:drop-shadow-md'>PLAY</button>
                    </Link>
                </div>
        </div>
        
    )
}