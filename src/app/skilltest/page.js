"use client"
import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Image from "next/image";
import Studentchart from "../components/Studentchart";



const Skilltest = () => {
  const [ score , setScore ] = useState({ 
    rank: 1 ,
    percentile: 30 ,
    currentScore: 10
  }) 
    const [showModal, setShowModal] = useState(false)
    return (

<>
<div className="flex flex-wrap justify-around">
    <div className="w-full md:w-[45%]">
<div className="div 1">

    <p className="pb-4">Skill Test</p>
    <div className="flex items-center border border-gray-300 p-4 rounded-lg shadow-md justify-around mb-8">
    <div >
   <Image 
            src="/images/html.png" 
            alt="company logo" 
            width={60} 
            height={0} 
            className="rounded-md"
          />  
    </div>
    <div className="flex-1">
        <h4 className="text-lg font-semibold">Hyper Text Markup Language</h4>
        <p className="text-sm text-gray-600">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <div>
        <button onClick={()=>setShowModal(true)} className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-300 transition duration-300">
          Update
        </button>
      </div>
     


    </div>
    <Modal  isVisible={showModal} 
  onClose={()=>setShowModal(false)}


  onSave = { (score) => setScore(score)}
    
    />
</div>

<div className="border border-gray-300 p-4 rounded-lg shadow-md">
<h4 className="text-lg font-semibold">Quick Statistics</h4>
<div className="flex item-center">
<div className="flex items-center gap-2 p-4 border-r border-gray-300 mr-5">
<Image 
            src="/images/trophy.webp" 
            alt="company logo" 
            width={30} 
            height={30} 
            className="rounded-md shadow-sm object-contain"
          /> 
          <div>
            <h4 className="text-xl font-bold"> {score.rank}</h4>
            <p className="text-xs text-gray-500">YOUR RANK</p>
          </div>
</div>
<div className="flex items-center gap-2 p-4 border-r border-gray-300 mr-5">
<Image 
            src="/images/calender.avif" 
            alt="company logo" 
            width={30} 
            height={30} 
            className="rounded-md shadow-sm object-contain"
          /> 
          <div>
            <h4 className="text-xl font-bold"> {score.percentile} %</h4>
            <p className="text-xs text-gray-500">PERCENTILE</p>
          </div>
</div>
<div className="flex items-center gap-2 p-4 mr-5">
<Image 
            src="/images/tick.png" 
            alt="company logo" 
            width={30} 
            height={30} 
            className="rounded-full shadow-sm object-contain"
          /> 
          <div>
            <h4 className="text-xl font-bold">{score.currentScore}/15</h4>
            <p className="text-xs text-gray-500">CORRECT ANSWERS</p>
          </div>
</div>

 
</div>

</div>

 <div className="  border border-gray-300 p-4 rounded-lg shadow-md mb-8">
 <h4 className="text-lg font-semibold">Comparison Graph</h4>
  <div className="flex justify-between ">
  <div><span className="font-bold">You scored {score.percentile} %percentile</span> which is lower than the average 72% of all the engineers who took the assessment </div> 
  <div className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10 shadow-mg"> 
  <Image
  src="/images/graph.jpg"
  alt='image'
  width={30}
  height={60}
  className="object-cover"
  
  />
  <div>
    <Studentchart/>
  </div>
  </div>
 {/* we include the graph */}
  </div>


    </div>


    
</div>

<div className="mt-10 w-full md:w-[45%]">
    <div className="div1 border border-gray-300 shadow-md rounded-lg p-4 mb-4">
    <h4 className="text-lg font-semibold pb-4">Syllabus Wise Analysis</h4>
<div className="each color div">
    <div className="pb-8">
        <p className="pb-4">HTML Tools, Forms, History</p>
        <div className="flex items-center gap-4">
           <div className="w-full border border-black-100 h-4 rounded-md bg-gray-100 shadow-md">
           <div className="rounded-md bg-blue-500 h-full " style={{width:'80%'}}></div>
           
            </div>
            <span className="font-bold text-blue-500">80%</span>
        </div>
    </div>
    <div className="mb-4">
        <p className="pb-4">Tags and References in HTML</p>
        <div className="flex items-center gap-4">
           <div className="w-full border border-black-100 h-4 rounded-md bg-gray-100 shadow-md">
           <div className="rounded-md bg-orange-300 h-full style={{width: '20%'}}" style={{width:'60%'}}></div>
           
            </div>
            <span className="font-bold text-orange-300">60%</span>
        </div>
    </div>
    <div className="mb-4">
        <p className="pb-4">Tables and References in HTML</p>
        <div className="flex items-center gap-4">
           <div className="w-full border border-black-100 h-4 rounded-md bg-gray-100 shadow-md">
           <div className="rounded-md bg-orange-700 h-full" style={{width:'24%'}}></div>
           
            </div>
            <span className="font-bold text-orange-700">60%</span>
        </div>
    </div>

    <div className="mb-4">
        <p className="pb-4">Tables and CSS Basics</p>
        <div className="flex items-center gap-4">
           <div className="w-full border border-black-100 h-4 rounded-md bg-gray-100 shadow-md">
           <div className="rounded-md bg-green-500 h-full" style={{width:'96%'}}></div>
           
            </div>
            <span className="font-bold text-green-500">96%</span>
        </div>
    </div>

</div>
    </div>

    <div className="div2 border border-gray-300 shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold pb-4">Question Analysis</h4>
        <span className="font-bold text-blue-500">{score.currentScore}/15</span>

        </div>
    
<p>You scored {score.currentScore} questions correct out of 15. However it still needs improvement</p>
    </div>

</div>
</div>







</>



    )
}

export default Skilltest