import './CircleNumber.css';
import { useState } from 'react';

type CircleNumberProps = {
  num : string
}

export const CircleNumber = (props: CircleNumberProps) => {

  const {num} = props;

  const [isTouch, setIsTouch] = useState(false)

  const circleClassName = isTouch ? 'circle-number stateTouch' : 'circle-number'

  const handleClick = () => {
    setIsTouch(!isTouch);
    // onSelect?.(elemento);
  }

  return (
    <section className='container-circle-number'>
      <div className={circleClassName} onClick={handleClick} >{num}</div>
    </section>
    // {data.map((elemento:string) =>(<div className={circleClassName} key={elemento} onClick={()=>handleClick(elemento)} >{elemento}</div>))}
  )
}