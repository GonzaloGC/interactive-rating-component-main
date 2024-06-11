import "./Card.css";
import { useState } from "react";

export const Card = () => {

  const[change, setChange] = useState(false)

  const handleClick = ()=>{
    setChange(!change)
  }

  const num = [1, 2, 3, 4, 5]

  return (
    <section className="container-card">
      <div className="divTest">
        <div className="circle">
          <img
            className="iconStar"
            src="src/assets/images/icon-star.svg"
            alt="icon star"
          />
        </div>
        <div className="container-t-p">
          <span className="title-card">How did we do?</span>
          <p className="p-card">
            Please let us Know how we did with your support request. All
            feedback is appreciated to help us improve our offerinq!
          </p>
        </div>
        <div className="container-button-circle-number">
          {num.map(dataNum => <button className="button-circle-number">
            <span className="circle-number">{dataNum}</span>
          </button>)}
        </div>
        <button onClick={handleClick} className="btn-submit">Submit</button>
      </div>
    </section>
  );
};
