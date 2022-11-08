import React from 'react'

export default function GamePageMain() {
    // this gets the current date from the built in Date method
    const current = new Date();
    // then it is formatted by seperating each one by a /
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        // TODO: change the hard coded username
        <div className=' pt-5' class="column">
            <h1 className=' text-6xl font-bold '>Welcome, xszmr</h1>
            <p>Today's Date is {date}</p>
            <section className=' pt-40'>
                <h1 className=' text-4xl font-bold'>Start Playing</h1>
                <h3 className=' font-bold'>The Rules:</h3>
                <p>The aim of the game is to find the missing number within the
                    sequence on the board. <br></br> The number is hidden under an emoji.
                </p>
                <button className=' rounded-sm bg-white w-24 m-2 inline'>Let's Go!</button>
                <button className=' rounded-sm bg-white w-24 m-2 inline'>Read More</button>
            </section>
        </div>
        
    )
}