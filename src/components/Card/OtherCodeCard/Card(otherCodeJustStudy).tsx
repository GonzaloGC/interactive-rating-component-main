// FIRST CODE

// import "./Card.css";
// import { useState } from "react";
// import { CardThankYou } from "../CardThankYou/CardThankYou";
// import classNames from "classnames";

// export const Card = () => {
//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [renderedNumber, setRenderedNumber] = useState(null);
//   const [change, setChange] = useState(false);
//   const [isOptionSelected, setIsOptionSelected] = useState(false);
//   const [buttonText, setButtonText] = useState("Submit");
//   const [buttonColor, setButtonColor] = useState("button-circle-number");
//   const [buttonColor2, setButtonColor2] = useState("button-circle-number");
//   const [buttonColor3, setButtonColor3] = useState("button-circle-number");
//   const [buttonColor4, setButtonColor4] = useState("button-circle-number");
//   const [buttonColor5, setButtonColor5] = useState("button-circle-number");

//   const handleSelect = (number: null) => {
//     setSelectedNumber(number);
//   };
//   const handleSelectStyle = () => {
//     setIsOptionSelected(true);
//     if (event && event.target) {
//       const textContent = event.target.textContent;
//       handleSelect(textContent);
//       const styleCircle = textContent;
//       const styleCircle2 = textContent;
//       const styleCircle3 = textContent;
//       const styleCircle4 = textContent;
//       const styleCircle5 = textContent;

//       const styleBgCircle = classNames({
//         "button-circle-number-selected": styleCircle === "1",
//         "button-circle-number": styleCircle !== "1",
//       });
//       setButtonColor(styleBgCircle);

//       const styleBgCircle2 = classNames({
//         "button-circle-number-selected": styleCircle2 === "2",
//         "button-circle-number": styleCircle2 !== "2",
//       });
//       setButtonColor2(styleBgCircle2);

//       const styleBgCircle3 = classNames({
//         "button-circle-number-selected": styleCircle3 === "3",
//         "button-circle-number": styleCircle3 !== "3",
//       });
//       setButtonColor3(styleBgCircle3);

//       setButtonColor(styleBgCircle);
//       const styleBgCircle4 = classNames({
//         "button-circle-number-selected": styleCircle4 === "4",
//         "button-circle-number": styleCircle4 !== "4",
//       });
//       setButtonColor4(styleBgCircle4);

//       const styleBgCircle5 = classNames({
//         "button-circle-number-selected": styleCircle5 === "5",
//         "button-circle-number": styleCircle5 !== "5",
//       });
//       setButtonColor5(styleBgCircle5);
//     } else {
//       console.error("Error: event or event.target not defined");
//     }
//   };

//   const handleSubmit = () => {
//     setRenderedNumber(selectedNumber);
//   };

//   const handleClick = () => {
//     if (isOptionSelected) {
//       setChange(!change);
//     } else {
//       alert("Please select an option first");
//     }
//   };
  
//     const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//       const buttonText = event.target.textContent;
//       setButtonText(buttonText);
//       handleSubmit();
//       handleClick();
//     };
  

//   const submitCard = change
//     ? "container-card container-card-out"
//     : "container-card";

//   return (
//     <>
//       <section className={submitCard}>
//         <div className="container-circle-title-p">
//           <div className="circle">
//             <img
//               className="iconStar"
//               src="src/assets/images/icon-star.svg"
//               alt="icon star"
//             />
//           </div>
//           <div className="container-t-p">
//             <span className="title-card">How did we do?</span>
//             <p className="p-card">
//               Please let us Know how we did with your support request. All
//               feedback is appreciated to help us improve our offerinq!
//             </p>
//           </div>
//         </div>
//         <div className="divTest">
//           <div className="container-button-circle-number">
//             <button onClick={() => handleSelectStyle()} className={buttonColor}>
//               1
//             </button>
//             <button
//               className={buttonColor2}
//               onClick={() => handleSelectStyle()}
//             >
//               2
//             </button>
//             <button
//               onClick={() => handleSelectStyle()}
//               className={buttonColor3}
//             >
//               3
//             </button>
//             <button
//               onClick={() => handleSelectStyle()}
//               className={buttonColor4}
//             >
//               4
//             </button>
//             <button
//               onClick={() => handleSelectStyle()}
//               className={buttonColor5}
//             >
//               5
//             </button>
//           </div>
//           <button onClick={handleButtonClick} className="btn-submit">
//             {buttonText}
//           </button>
//         </div>
//       </section>
//       {renderedNumber !== null && (
//         <CardThankYou selectMessage={renderedNumber} />
//       )}
//     </>
//   );
// };

// SECOND CODE

// import "./Card.css";
// import { useState } from "react";
// import { CardThankYou } from "../CardThankYou/CardThankYou";
// import classNames from "classnames";

// export const Card = () => {
//   const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
//   const [renderedNumber, setRenderedNumber] = useState<number | null>(null);
//   const [change, setChange] = useState(false);
//   const [isOptionSelected, setIsOptionSelected] = useState(false);
//   const [buttonText, setButtonText] = useState("Submit");

//   const buttonInitialClass = "button-circle-number";
//   const [buttonColors, setButtonColors] = useState({
//     1: buttonInitialClass,
//     2: buttonInitialClass,
//     3: buttonInitialClass,
//     4: buttonInitialClass,
//     5: buttonInitialClass,
//   });

//   const handleSelectStyle = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const selectedValue = event.currentTarget.textContent;

//     if (selectedValue) {
//       const number = parseInt(selectedValue, 10);
//       setSelectedNumber(number);
//       setIsOptionSelected(true);

//       const newButtonColors = {
//         1: number === 1 ? "button-circle-number-selected" : buttonInitialClass,
//         2: number === 2 ? "button-circle-number-selected" : buttonInitialClass,
//         3: number === 3 ? "button-circle-number-selected" : buttonInitialClass,
//         4: number === 4 ? "button-circle-number-selected" : buttonInitialClass,
//         5: number === 5 ? "button-circle-number-selected" : buttonInitialClass,
//       };

//       setButtonColors(newButtonColors);
//     }
//   };

//   const handleSubmit = () => {
//     setRenderedNumber(selectedNumber);
//   };

//   const handleClick = () => {
//     if (isOptionSelected) {
//       setChange(!change);
//     } else {
//       alert("Please select an option first");
//     }
//   };

//   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const buttonText = event.currentTarget.textContent;
//     setButtonText(buttonText || "Submit");
//     handleSubmit();
//     handleClick();
//   };

//   const submitCard = classNames("container-card", {
//     "container-card-out": change,
//   });

//   return (
//     <>
//       <section className={submitCard}>
//         <div className="container-circle-title-p">
//           <div className="circle">
//             <img
//               className="iconStar"
//               src="src/assets/images/icon-star.svg"
//               alt="icon star"
//             />
//           </div>
//           <div className="container-t-p">
//             <span className="title-card">How did we do?</span>
//             <p className="p-card">
//               Please let us know how we did with your support request. All
//               feedback is appreciated to help us improve our offering!
//             </p>
//           </div>
//         </div>
//         <div className="divTest">
//           <div className="container-button-circle-number">
//             {[1, 2, 3, 4, 5].map((number) => (
//               <button
//                 key={number}
//                 onClick={handleSelectStyle}
//                 className={buttonColors[number]}
//               >
//                 {number}
//               </button>
//             ))}
//           </div>
//           <button onClick={handleButtonClick} className="btn-submit">
//             {buttonText}
//           </button>
//         </div>
//       </section>
//       {renderedNumber !== null && (
//         <CardThankYou selectMessage={renderedNumber} />
//       )}
//     </>
//   );
// };