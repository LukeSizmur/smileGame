import React from 'react';
import LoginButton from '../components/LoginButton';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const {data:session} = useSession()

    return (
        <div className="Navbar flex p-1">
            <h2 className="font-bold text-xl mr-auto mt-5">Smile Game</h2>
            {session && <button className="
            rounded-full 
            px-5
            py-1
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white 
            text-lg
            mt-5
            hover:drop-shadow-md" onClick={() => signOut()}>Sign Out</button>}

        </div>
    )
}