import React from 'react'

export default function BoardPageButton() {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            {buttons.map(button => (
                <button key={button} className=" p-3 m-1 bg-white rounded-md font-bold text-3xl hover:drop-shadow-lg focus:outline-none focus:ring focus:ring-pink-500">{button}</button>
            ))}
        </div>
    )
}