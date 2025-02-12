import React, { useState } from "react"
import Image from "next/image"

const Modal = ({isVisible, onClose , onSave})=>{
  
  let [rank , setRank] = useState('')
  let [percentile , setPercentile] = useState('')
  let [currentScore , setCurrentScore] = useState('')

  

  let handleSave = ()=> {
    if(!rank.trim() || !percentile.trim() || !currentScore.trim() ){
    alert('all fields are mandatory')
    }
   else if (  Number(rank) < 0 ||  Number(rank) > 15 ){
      alert ('rank is not within range')
    }else if(Number(percentile) < 0 || Number(percentile > 100)){
      alert('Percentile is not within range')

    } else if(Number(currentScore) < 0 || Number (currentScore)>15){
      alert ('Current scrore is not within range')
    }
    else{
      onSave( { rank : Number(rank) , percentile : Number(percentile) , currentScore: Number(currentScore)  })
      onClose()
    }
  
  }
   


    if(!isVisible) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start">
            <div className="w-[600px]">
                <div className="bg-white p-2 rounded">
                  <div className="flex items-center justify-between p-2">
                    <h4 className="font-bold">Update Scores</h4>
                   <Image 
                              src="/images/html.png" 
                              alt="html" 
                              width={30} 
                              height={30} 
                              className="rounded-md"
                            />  
                  </div>  
                  <div className="flex justify-between items-center p-4  rounded-md shadow-sm">
                 <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">1</span>
                    <span className="text-gray-800 font-medium">Update your <span className="font-bold">Rank</span> </span>
                    </div>  
                    <div><input onChange={(e)=> setRank(e.target.value)} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 hover:border-red-500 transition duration-300 no-spinner" placeholder="update rank" type="number"/></div> 
                  </div>
                  <div className="flex justify-between items-center p-4  rounded-md shadow-sm">
                 <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">2</span>
                    <span className="text-gray-800 font-medium">Update your <span className="font-bold">Percentile</span> </span>
                    </div>  
                    <div><input onChange={(e)=> setPercentile(e.target.value)}  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 hover:border-red-500 transition duration-300 no-spinner" placeholder="update percentile" type="number"/></div> 
                  </div>
                  <div className="flex justify-between items-center p-4  rounded-md shadow-sm">
                 <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">3</span>
                    <span className="text-gray-800 font-medium">Update your <span className="font-bold">Current Score (out of 15)</span> </span>
                    </div>  
                    <div><input onChange={(e)=> setCurrentScore(e.target.value)} className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 hover:border-red-500 transition duration-300 no-spinner" placeholder="update current score" type="number"/></div> 
                  </div>
                 
                <div className="flex gap-4 right-4">
                    <button onClick={()=>onClose()} className="bg-white-100 text-black px-4 py-2 rounded-lg shadow-md">Cancel</button>
                    <button onClick={ ()=>  handleSave() } className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"> Save </button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Modal