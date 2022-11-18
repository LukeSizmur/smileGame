import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import BoardPageButton from './BoardPageButton'
import QuestionPanel from './QuestionPanel';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// this a method needed for the toast notification


export default function BoardPageMain() {
     // sets a default state
     const [gameState, setGameState] = useState(null);
    //  this sets the deafult loading state
     const [loading, setLoading] = useState(false);
    //  this sets the question state
     const [question, setQuestion] = useState(null);
    //  this sets the answer to the question
     const [solution, setSolution] = useState(null);
    //  this sets the input from the user (updates on every change)
     const [userSelectedAnswer, setUserSelectedAnswer] = useState('');
    //  this then takes the final answer when the button 'Submit Answer' is clicked
     const [updatedUserAnswer, setUpdatedUserAnswer] = useState(userSelectedAnswer);

     const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
     useEffect(() => {
         // updates the loading state
         console.log("use effect")
        //  if it is loading then do not refresh or if it has a question

        setLoading(true)
 
         fetch('https://marcconrad.com/uob/smile/api')
             .then(res => {
                 return res.json()
             })
             .then((data) => {
                 console.log(data)
                 const {question, solution} = data
                 setQuestion(question)
                 setSolution(solution)
                 console.log(solution)
             })
             .finally(setLoading(false))

         

         
     }, []);

     const checkAnswer = () => {
        setUpdatedUserAnswer(userSelectedAnswer)
        console.log("User's choice =",userSelectedAnswer)

        if (userSelectedAnswer === solution) {
            // console.log("It is the same!", userSelectedAnswer, solution)
            alert("Correct Answer!")
        } else {
            alert("Try again!")
        }


     };

     const handleChange = (event) => {
        setUserSelectedAnswer(parseInt(event.target.value))
     }

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
                    <h1 className=' text-3xl font-bold pt-5'>Your Total: </h1>
                </div>

                {/* column 1 */}
                <div className='text-center pt-10'>
                    <section>
                        <h1 className=' text-left text-2xl font-bold'>Info:</h1>
                        <p className=' text-left'>Upon completing the question a new one will automatically generate.
                        There is a chance that the same question might render again, simply count yourself lucky! <br></br> Remember 
                        that the answer will only be a single digit from 0 - 9 </p>
                    </section>
                </div>
                {/* column 2 */}
                <div className=" text-center flex justify-center">
                    <section className=' pt-10'>
                        {loading ? <img src="/LoadingSVG.svg" width="50"></img> : <QuestionPanel question={question}/> }
                        <button className='rounded-sm
                        w-36
                        text-xl 
                        mt-10 
                        drop-shadow-md              
                        duration-300 
                        border-2
                        border-blue-400
                        hover:bg-blue-400
                        hover:text-white' onClick={checkAnswer}>Submit Answer</button>
                        
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
                        {/* <BoardPageButton /> */}

                        <input placeholder="Enter your answer" type="number" name="userAnswer" className="p-1 rounded-2xl text-2xl" onChange={handleChange} ></input>
                        
                        {/* {buttons.map(button => (
                            <button key={button} className=" 
                            p-3 
                            m-1 
                            bg-white 
                            rounded-md 
                            font-bold 
                            text-3xl 
                            hover:drop-shadow-lg 
                            focus:outline-none 
                            focus:ring 
                            focus:ring-pink-500" value={1}>{button}</button>
                        ))} */}
                    </section>
                </div>
                {/* column 3 */}
                <div className='text-center'>
                    
                </div>
            </div>
        </div>
        
    )
}