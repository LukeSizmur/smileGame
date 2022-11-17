import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import BoardPageButton from './BoardPageButton'
import QuestionPanel from './QuestionPanel';

export default function BoardPageMain() {
     // sets a default state
     const [gameState, setGameState] = useState(null)
     const [loading, setLoading] = useState(false)
     const [question, setQuestion] = useState(null)
     const [answer, setAnswer] = useState(false)
 
     useEffect(() => {
         // updates the loading state
         setLoading(true)
 
         fetch('http://marcconrad.com/uob/smile/api')
             .then(res => {
                 return res.json()
             })
             .then((data) => {
                 console.log(data)
                 const {question, answer} = data
                 setQuestion(question)
                 setAnswer(answer)
             })
             .finally(setLoading(false))

         
     }, []);

    return (
        // TODO: change the hard coded username
        // grid gap-4 grid-cols-3 grid-rows-3
        <div className=" h-screen">
            <div className=' md:grid md:gap-4 md:grid-cols-3 md:grid-rows-3 '>
                {/* column 1 */}
                <div className='text-center'>
                    <section>  
                
                    </section>
                </div>
                {/* column 2 */}
                <div>
                    <section className='text-center '>
                        {/* TODO: add the image from the API */}
                        <h1 className=' text-5xl font-bold pt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>Your Question</h1>
                    </section>
                </div>
                {/* column 3 */}
                <div className='text-center'>
                    {/* TODO: Use variables questions answered */}
                    <h1 className=' text-3xl font-bold pt-5'>Your Total: 36</h1>
                </div>

                {/* column 1 */}
                <div className='text-center pt-10'>
                    <section>
                        <h1 className=' text-left text-2xl font-bold'>Info:</h1>
                        <p className=' text-left'>Upon completing the question a new one will automatically generate.
                        There is a chance that the same question might render again, simply count yourself lucky! </p>
                    </section>
                </div>
                {/* column 2 */}
                <div className=" text-center">
                    <section className='text-center pt-10'>
                        {loading ? <p>loading</p> : <QuestionPanel question={question}/> }
                        {answer ? <button className='rounded-sm
                        w-24 
                        mt-10 
                        drop-shadow-md              
                        duration-300 
                        border-2
                        border-blue-400
                        hover:bg-blue-400
                        hover:text-white'>Refresh</button> : <button className='rounded-sm
                        w-24 
                        mt-10 
                        drop-shadow-md              
                        duration-300 
                        border-2
                        border-blue-400
                        hover:bg-blue-400
                        hover:text-white'>Next Question</button> }
                        
                    </section>
                </div>
                {/* column 3 */}
                <div className='text-center'>
                    
                </div>

                {/* column 1 */}
                <div className='text-center '>
                    
                </div>
                {/* column 2 */}
                <div className=''>
                    <section className='text-center pt-10'>
                        <BoardPageButton />
                    </section>
                </div>
                {/* column 3 */}
                <div className='text-center'>
                    
                </div>
            </div>
        </div>
        
    )
}