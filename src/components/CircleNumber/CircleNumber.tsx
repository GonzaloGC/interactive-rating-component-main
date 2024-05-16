import './CircleNumber.css';
import { useState } from 'react';

export const CircleNumber = ({number}: {number:string}) => {

  const [isTouch, setIsTouch] = useState(false)

  const circleClassName = isTouch ? 'circle-number stateTouch' : 'circle-number'

  const handleClick = () => {
    setIsTouch(!isTouch)
  }

  return (
    <div className={circleClassName} onClick={handleClick} >{number}</div>
  )
}