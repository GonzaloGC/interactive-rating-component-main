import "./Card.css";
import { useState } from "react";
import { CardThankYou } from "../CardThankYou/CardThankYou";
import classNames from "classnames";

interface ButtonColors {
  [key: number]: string;
}

const initialButtonColors: ButtonColors = {
  1: "button-circle-number",
  2: "button-circle-number",
  3: "button-circle-number",
  4: "button-circle-number",
  5: "button-circle-number",
};

export const Card = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [renderedNumber, setRenderedNumber] = useState<number | null>(null);
  const [change, setChange] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonColors, setButtonColors] = useState<ButtonColors>(initialButtonColors);

  const handleSelectStyle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedValue = event.currentTarget.textContent;

    if (selectedValue) {
      const number = parseInt(selectedValue, 10);
      setSelectedNumber(number);
      setIsOptionSelected(true);

      const newButtonColors: ButtonColors = {
        1: number === 1 ? "button-circle-number-selected" : "button-circle-number",
        2: number === 2 ? "button-circle-number-selected" : "button-circle-number",
        3: number === 3 ? "button-circle-number-selected" : "button-circle-number",
        4: number === 4 ? "button-circle-number-selected" : "button-circle-number",
        5: number === 5 ? "button-circle-number-selected" : "button-circle-number",
      };

      setButtonColors(newButtonColors);
    }
  };

  const handleSubmit = () => {
    setRenderedNumber(selectedNumber);
  };

  const handleClick = () => {
    if (isOptionSelected) {
      setChange(!change);
    } else {
      alert("Please select an option first");
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget.textContent;
    setButtonText(buttonText || "Submit");
    handleSubmit();
    handleClick();
  };

  const submitCard = classNames("container-card", {
    "container-card-out": change,
  });

  return (
    <>
      <section className={submitCard}>
        <div className="container-circle-title-p">
          <div className="circle">
            <img
              className="iconStar"
              src="/icon-star.svg"
              alt="icon star"
            />
          </div>
          <div className="container-t-p">
            <span className="title-card">How did we do?</span>
            <p className="p-card">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
        </div>
        <div className="divTest">
          <div className="container-button-circle-number">
            {[1, 2, 3, 4, 5].map((number) => (
              <button
                key={number}
                onClick={handleSelectStyle}
                className={buttonColors[number]}
              >
                {number}
              </button>
            ))}
          </div>
          <button onClick={handleButtonClick} className="btn-submit">
            {buttonText}
          </button>
        </div>
      </section>
      {renderedNumber !== null && (
        <CardThankYou selectMessage={renderedNumber} />
      )}
    </>
  );
};