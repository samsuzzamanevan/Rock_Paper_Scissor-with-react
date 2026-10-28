import React, { useState } from 'react'
import Heading1 from './components/Heading1'
import Peragraph from './components/Peragraph'
import Button from './components/Button'
import { FaHandRock } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaHandScissors } from "react-icons/fa";




function Page() {

    
    let [answer,setAnswer] = useState(null)
    
    let [number,setNumber] = useState(0)
    let [type,setType] = useState(true)
    let [resText,setResText] = useState('')
    
    let arr = ['Rock','Paper','Scissor']
    
    
    function result(){
        if(answer === null){
            return alert('Please Choose an Option')
        }
        let newvalue = Math.floor(Math.random()*3)
        setNumber(newvalue)
            
        

        setType(false)

        if(newvalue === answer){
         return   setResText('Match Draw')
        }

        else if(newvalue === 0 && answer === 1){
            return setResText('you win')
        }
        else if(newvalue === 0 && answer === 2){
            return setResText('you loss')
        }
        else if(newvalue === 1 && answer === 0){
            return setResText('you loss')
        }
        else if(newvalue === 1 && answer === 2){
            return setResText('you win')
        }
        else if(newvalue === 2 &&  answer === 0){
            return setResText('you win')
        }
        else if(newvalue === 2 && answer === 1){
            return setResText('you loss')
        }
    }

     
  





    return (
        <div className='h-screen bg-[#434242] flex items-center'>
            {

                type === true?
                <div className='w-120 bg-[#292c2b] rounded-2xl mx-auto py-10'>
                <Heading1 Hea1Texh='Rock_Paper_Scissor' className='text-white font-[raleway] text-3xl font-medium text-center py-6' />
                <Peragraph pText='Choose An Option' className='font-[roboto] text-xl font-medium text-amber-100 text-center pt-2 pb-4' />
                <div>

                    {
                        answer === 0
                        ?<div className='font-[raleway] text-xl font-medium text-zinc-400 bg-[#9ac3ad7a]  w-[70%] py-1.5 px-3 rounded-2xl mx-auto cursor-pointer' onClick={()=> setAnswer(0)}><FaHandRock className='inline-block align-middle me-2'/> Rock</div>
                        :<div className='font-[raleway] text-xl font-medium text-zinc-400 bg-[#8a89897a]  w-[70%] py-1.5 px-3 rounded-2xl mx-auto cursor-pointer' onClick={()=> setAnswer(0)}><FaHandRock className='inline-block align-middle me-2'/> Rock</div>
                    }

                  {
                    answer === 1
                    ?  <div className='font-[raleway] text-xl font-medium text-zinc-400 bg-[#9ac3ad7a]  w-[70%] py-1.5 px-3 rounded-2xl mx-auto my-4 cursor-pointer' onClick={()=> setAnswer(1)}><IoNewspaperOutline className='inline-block align-middle me-2'/> Paper</div> 
                    :  <div className='font-[raleway] text-xl font-medium text-zinc-400 bg-[#8a89897a]  w-[70%] py-1.5 px-3 rounded-2xl mx-auto my-4 cursor-pointer' onClick={()=> setAnswer(1)}><IoNewspaperOutline className='inline-block align-middle me-2'/> Paper</div> 
                  }  


                {
                    answer === 2
                    ?<div className='font-[raleway] text-xl font-medium text-zinc-400 bg-[#9ac3ad7a]  w-[70%] py-1.5 px-3 rounded-2xl mx-auto cursor-pointer'  onClick={()=> setAnswer(2)}> <FaHandScissors className='inline-block align-middle me-2'/>Scessor</div>  
                    :<div className='font-[raleway] text-xl font-medium text-zinc-400 bg-[#8a89897a]  w-[70%] py-1.5 px-3 rounded-2xl mx-auto cursor-pointer'  onClick={()=> setAnswer(2)}> <FaHandScissors className='inline-block align-middle me-2'/>Scessor</div>  
                }

                </div>
                <Button btnText='Submit' className='font-[roboto] text-base text-[#211c1c] bg-[#787575] py-2 px-5 rounded-xl ms-80 mt-6 cursor-pointer' onclick={result}/>
            </div>

            : 
            <>
                <div className=' bg-gray-600 mx-auto font-bold text-amber-50 py-15.5 rounded-2xl px-8 w-100'>
                    <div className='font-[raleway] text-3xl text-center text-amber-50'>{resText}</div>
                    <div className='font-[roboto] text-xl font-medium text-amber-50 text-center my-2.5'>{`Your Choice : ${arr[answer]}`}</div>
                    <div className='font-[roboto] text-xl font-medium text-amber-50 text-center'>{`Computer's Choice : ${arr[number]}`}</div>
                </div>
            </>
            }
        </div>
    )
}

export default Page
