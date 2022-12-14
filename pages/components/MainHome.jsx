import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginButton from '../components/LoginButton';
import { useSession, signOut } from 'next-auth/react';

export default function MainHome() {
    const {data:session} = useSession()

    return (
        <div className="Container">
                <div className='bg-white p-5 rounded-xl drop-shadow-2xl h-98 mt-20 lg:mt-48'>
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
                    <Image src='/exampleImage.png' alt='example of the game' width={300} height={300} className=' mr-auto ml-auto mt-3'/>
                    <div className=' text-center mt-4'>
                        {/* <Link href="/gamePage"> */}
                            {/* <button className=' rounded-2xl
                            bg-gradient-to-r from-orange-500 to-purple-500 
                            w-20 
                            text-white 
                            text-2xl 
                            font-bold
                            hover:drop-shadow-md'>PLAY</button> */}
                            {/* <LoginButton /> */}
                            
                        {/* </Link> */}
                        {!session && <LoginButton />}
                        {session && 
                        <Link href="/gamePage">
                            <button className=" rounded-2xl bg-gradient-to-r from-orange-500 to-purple-500 w-20 text-white text-2xl font-bold hover:drop-shadow-lg">PLAY</button>
                        </Link>}

                    </div>
                    
                </div>
        </div>
        
    )
}