import { ImageData } from '../context/context'
import { useState } from 'react';

import './Slider.css'


function Slider(){

  const [index, setIndex] = useState(0);

  function handleClickRight(){
    if (index === 3){
      setIndex(0);
    } else{
      setIndex(index + 1);
    }
  }

  function handleClickLeft(){
    if (index === 0){
      setIndex(3);
    } else{
      setIndex(index - 1);
    }
  }

  let image = ImageData[index];
  return(
    <div className='slider image'>
      <img id={image.id}
        alt={image.type} 
        src={require(`../images/${image.url}`)}
      />
      <span className='left'
        onClick={handleClickLeft}>
        <i class="fa-solid fa-chevron-left"></i>
      </span>

      <span className='right'
        onClick={handleClickRight}>
        <i class="fa-solid fa-chevron-right"></i>
      </span>
    </div>
  )
}
export default Slider;