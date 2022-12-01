import React from 'react';

export default function RestrictedView() {
    return (
        <div className=" h-screen bg-white flex justify-center">
            <div>
                <div className=" text-center bg-red-400 rounded-md shadow-lg p-10 w-96">
                    <p>You are not signed in.</p>
                </div>
            </div>
        </div>
    )
}