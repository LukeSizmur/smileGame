import React, {useState, useEffect, useRef} from 'react'
import BoardPageButton from './BoardPageButton'
import QuestionPanel from './QuestionPanel';

// this a method needed for the toast notification


export default function BoardPageMain() {
     // sets a default state
     const [gameStateCorrect, setGameStateCorrect] = useState(false);
    //  this sets the deafult loading state
     const [isLoading, setisLoading] = useState(false);
    //  this sets the question state
     const [question, setQuestion] = useState(null);
    //  this sets the answer to the question
     const [solution, setSolution] = useState(null);
    //  this sets the input from the user (updates on every change)
     const [userSelectedAnswer, setUserSelectedAnswer] = useState('');
    //  this then takes the final answer when the button 'Submit Answer' is clicked
     const [updatedUserAnswer, setUpdatedUserAnswer] = useState(userSelectedAnswer);

 
     useEffect(() => {
         // updates the loading state
         console.log("use effect")
        //  if it is loading then do not refresh or if it has a question
        
        if (isLoading) {
            return
        }

        setisLoading(true);

        console.log("loading state=", isLoading);  
 
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
                 console.log(gameStateCorrect)
             })
             .finally(setisLoading(false), setGameStateCorrect(false))

     }, [gameStateCorrect]);

     const checkAnswer = () => {
        setUpdatedUserAnswer(userSelectedAnswer)
        console.log("User's choice =",userSelectedAnswer)

        if (userSelectedAnswer === solution) {
            alert("Correct!")
            setGameStateCorrect(true)
            document.getElementById("answerForm").reset()
            console.log("game state inside true statement",gameStateCorrect)
        } else {
            alert("Try again!")
            document.getElementById("answerForm").reset()
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
                        <h1 className=' text-5xl 
                        font-bold 
                        pt-10 
                        lg:pt-5 
                        text-transparent 
                        bg-clip-text 
                        bg-gradient-to-r from-purple-500 to-pink-600'>Your Question</h1>
                    </section>
                </div>
                {/* column 3 */}
                <div className='text-center'>
                    {/* TODO: Use variables questions answered */}
                    <h1 className=' text-3xl font-bold pt-5' id="userTotalText">Your Total: </h1>
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
                    <section className=' pt-10 lg:pt-0 '>
                        {isLoading ? <img src="/LoadingSVG.svg" width="50"></img> : <QuestionPanel question={question}/> }
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
                <div className='text-center '>
                    
                </div>

                {/* column 1 */}
                <div className='text-center lg:h-20'>
                    
                </div>
                {/* column 2 */}
                <div className=''>
                    <section className='text-center pt-10'>
                        {/* <BoardPageButton /> */}
                        <form id="answerForm">
                            <input placeholder="Enter your answer" type="number" name="userAnswer" className="p-1 w-4/6 pl-2 rounded-full text-2xl dark:text-white" onChange={handleChange} ></input>
                        </form>
                    </section>
                </div>
                {/* column 3 */}
                <div className='text-center lg:h-20'>
                    
                </div>
            </div>
        </div>
        
    )
}