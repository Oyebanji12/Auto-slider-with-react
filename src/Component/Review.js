import React, { useEffect, useState } from 'react'
import Button from './Button.js'
import data from "./data.js"


const Review = () => {
    const [people, setPeople]= useState(data)
    const [index, setIndex]= useState(0)
    console.log(people)

    useEffect(()=>{
        const lastIndex= people.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }

    }, [index, people])

// auto slide
    useEffect(()=>{
     let slider = setInterval(() => {
            setIndex(index + 1)  
        }, 3000);
        // clean up function
        return()=> clearInterval(slider) 
     }, [index])
    
  return (
    <div>
        <div className="section-center">
          {people.map((person, personIndex)=>{
            const {id, image, name,title, quote}= person;
            console.log(personIndex)
            // more functionality 
            let position= "nextSlide"
            if(personIndex === index){
                position = "activeSlide";
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                position= "lastSlide"
            }
            console.log(personIndex)
            return(
                <article className={position} key={id}>
                    <img src={image} alt={name} className="person-img" />
                    <h4>{name}</h4>
                    <p className='title-1'>{title}</p>
                    <p className='text'>{quote}</p>
                </article>
            )
          })}
        </div>
        
        {/* <Button /> */}
        <Button  index={index} setIndex={setIndex} />
        <button></button>
    </div>
  )
}

export default Review