import React, { useState } from 'react'
import '../../src/AnimalShow.css';

import bird from '../../src/svg/bird.svg';
import cat from '../../src/svg/cat.svg'
import cow from '../../src/svg/cow.svg'
import dog from '../../src/svg/dog.svg'
import gator from '../../src/svg/gator.svg'
import horse from '../../src/svg/horse.svg'
import heart from '../../src/svg/heart.svg'

const svgMap ={
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}
const AnimalShow = ({type}) => {
    const [clicks, setClicks] = useState(0);
    const handleClick = () =>{
        setClicks(clicks+1);
    }
  return (
    <div className='animal-show' onClick={handleClick}>
        <img className='animal' alt='animal' src={svgMap[type]} />
        <img className='heart' alt='heart' src={heart} style={{width: 10 + 10*clicks +'px'}} />
    </div>
  )
}

export default AnimalShow