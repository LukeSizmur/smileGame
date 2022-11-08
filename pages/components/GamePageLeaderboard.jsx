import React from 'react'

export default function GamePageLeaderboard() {
    return (
        <div>
            <section className=' bg-white text-center h-screen pt-5'>
                <h1 className=' font-bold text-4xl'>Leaderboard</h1>
                <p className=' font-light'>number of questions answered</p>
                <div>
                    <p>Placeholder text</p>
                </div>
                <button className='rounded-sm
                 w-24 
                 m-2 
                 drop-shadow-md              
                 duration-300 
                 border-2
                 border-blue-400
                 hover:bg-blue-400
                 hover:text-white'>Refresh</button>
            </section>
        </div>  
       
    )
}