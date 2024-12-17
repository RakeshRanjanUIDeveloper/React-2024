import React from 'react'
import Image from './Image'
import Text from './Text'

const Card = () => {
    const image ='https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png';
    const text="Hello Human";
  return (
    <div>
        <Image src={image} />
        <Text content={text} />
    </div>
  )
}

export default Card