import "./Card.css";
import { useState } from "react";
import { CardThankYou } from "../CardThankYou/CardThankYou";

// type cardProps = {
//   handleClick: ()=> void
// }

export const Card = () => {
  // const{handleClick} = props
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [renderedNumber, setRenderedNumber] = useState(null);
  const [change, setChange] = useState(false);
  const [style1, setStyle1] = useState(false);

  const handleSelect = (number) => {
    setSelectedNumber(number);
  };
  const handleStyle1 = () => {
    setStyle1(!style1);
  };

  const handleSelectStyle = (Number) => {
    console.log(`Botón cliqueado: ${event.target.textContent}`)
    handleStyle1();
    handleSelect(Number);
  };

  const handleSubmit = () => {
    setRenderedNumber(selectedNumber);
  };
  const handleClick = () => {
    setChange(!change);
  };

  const handleButtonClick = (e) => {
    console.log(`${e.target.textContent}`)
    handleSubmit();
    handleClick();
  };
 
  // const hund =(e)=>{

  // }

  const styleSelect1 = style1
    ? "button-circle-number num3"
    : "button-circle-number";
  const styleSelect2 = style1
    ? "button-circle-number num3"
    : "button-circle-number";
  const styleSelect3 = style1
    ? "button-circle-number num3"
    : "button-circle-number";
  const styleSelect4 = style1
    ? "button-circle-number num4"
    : "button-circle-number";
  const styleSelect5 = style1
    ? "button-circle-number num5"
    : "button-circle-number";

  const submitCard = change
    ? "container-card container-card-out"
    : "container-card";

  return (
    <>
      <section className={submitCard}>
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
            <button
              onClick={() => handleSelectStyle(1)}
              className={`sel ${styleSelect1}`}
            >
              1
            </button>
            <button
              onClick={() => handleSelectStyle(2)}
              className={`sel ${styleSelect2}`}
            >
              2
            </button>
            <button
              onClick={() => handleSelectStyle(3)}
              className={`sel ${styleSelect3} `}
            >
              3
            </button>
            <button
              onClick={() => handleSelectStyle(4)}
              className={`sel ${styleSelect4} `}
            >
              4
            </button>
            <button
              onClick={() => handleSelectStyle(5)}
              className={`sel ${styleSelect5}`}
            >
              5
            </button>
            {/* <button onClick={handleStyle2} className={styleSelect2}>2</button>
            <button onClick={handleStyle3} className={styleSelect3}>3</button>
            <button onClick={handleStyle4} className={styleSelect4}>4</button>
            <button onClick={handleStyle5} className={styleSelect5}>5</button> */}
          </div>
          <button onClick={handleButtonClick} className="btn-submit">
            Submit
          </button>
        </div>
      </section>
      {renderedNumber !== null && (
        <CardThankYou selectMessage={renderedNumber} />
      )}
    </>
  );
};
