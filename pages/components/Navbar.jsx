import React from 'react';

export default function Navbar() {
    return (
        <div className="Navbar flex p-1">
            <h2 className="font-bold text-xl mr-auto mt-5">Smile Game</h2>
            <button className="
            rounded-full 
            px-5
            py-1
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white 
            text-lg
            mt-5
            hover:drop-shadow-md">Login</button>
        </div>
    )
}