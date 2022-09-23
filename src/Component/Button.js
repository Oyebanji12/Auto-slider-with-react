import React from 'react'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Button = ({index, setIndex}) => {
  return (
    <div>
         <div>
            <button className='prev' onClick={()=> setIndex(index - 1)} >
            <FiChevronLeft />
            </button>
            <button className='next' onClick={()=> setIndex(index + 1)} >
            <FiChevronRight />
            </button>
        </div> 
    </div>
  )
}

export default Button