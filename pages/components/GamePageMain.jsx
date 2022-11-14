import React, {useState, useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import GamePageLeaderboard from './GamePageLeaderboard';

const GamePageMain = () => {
    // this gets the current date from the built in Date method
    const current = new Date();
    // then it is formatted by seperating each one by a /
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const leaderBoard = useRef(null)
    const executeScroll = () => leaderBoard.current.scrollIntoView() 

    const [showModal, setShowModal] = useState(false);

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
                <section className=' pt-10 lg:pt-36'>
                    <h1 className=' text-4xl font-bold lg:pb-5'>Start Playing</h1>
                    <h3 className=' font-bold lg:text-xl'>The Rules:</h3>
                    <p className=' text-lg'>The aim of the game is to find the missing number within the
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
                    border-black'
                    onClick={() => setShowModal(true)}>Read More</button>

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
                {/* Read More Modal UI */}
                {/* this shows the modal if it is not present on the screen */}
                {showModal ? (
                    <div>
                        <div className=" 
                        p-5
                        top-32
                        left-1
                        w-96 
                        rounded-lg 
                        shadow-lg 
                        bg-white 
                        absolute
                        z-10
                        md:left-4
                        md:w-8/12
                        lg:left-80
                        lg:top-40
                        lg:w-1/2">
                            <button onClick={() => setShowModal(false)} className=" text-3xl font-bold">&#10005;</button>
                            <h1 className=" text-center font-bold text-fuchsia-400 text-2xl">How To Play</h1>
                                
                            <div className="pt-5">
                                The aim of the game is to find the mssing number hidden under
                                the emoji(s). The number will be from 0-9. To chose your number,
                                click on the buttons at the bottom of the page. The concept is similar
                                to Sudoku (for those of you that have played it).
                            </div>
                            <div className="pt-5">
                                If successful then you will start to increase your 'number of questions answered'
                                and rise up the leaderboard! There is no time limit when answering the question, 
                                so take your time.
                            </div>
                            <div className="pt-5">
                                <h2>Example Below</h2>
                                <div className=" flex justify-center">
                                    <Image src="/exampleImage.png" alt="example of game" width={400} height={200}/>
                                </div>
                        </div>
                    </div>
                </div>
                ) : null}
                <section className=' text-center'>
                    <Image src="/partying_face_3d-Enhanced.png" alt="Party Emoji" width={200} height={200} className=' mr-auto ml-auto mt-5 lg:mt-72 lg:w-80' />
                    {/* this render a down arrow which is only visible on small devices (below 768px) */}
                    <button className=' 
                    rounded-full 
                    bg-purple-500 
                    w-8 
                    h-8 
                    text-2xl 
                    text-white 
                    animate-bounce 
                    mt-5
                    mb-6
                    z-0 
                    lg:invisible'
                    onClick={executeScroll}>&#8595;</button>

                </section>
            </div>
            {/* column 3 */}
            <div className=' pt-0' ref={leaderBoard}>
                <GamePageLeaderboard />
            </div>
            
        </div>
    );
};

export default GamePageMain;

