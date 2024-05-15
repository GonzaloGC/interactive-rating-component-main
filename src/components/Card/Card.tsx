import "./Card.css";
import { CircleStar } from "../CircleStar/CircleStar";
import { CircleNumber } from "../CircleNumber/CircleNumber";
import { ButtonSubmit } from "../ButtonSubmit/ButtonSubmit";

export const Card = () => {
  return (
    <section className="container-card">
      <CircleStar />
      <h1 className="title-card">How did we do?</h1>
      <p className="p-card">
        Please let us Know how we did with your support request. All feedback is
        appreciated to help us improve our offerinq!
      </p>
      <div className="container-circle-number">
        <CircleNumber number="1" />
        <CircleNumber number="2" />
        <CircleNumber number="3" />
        <CircleNumber number="4" />
        <CircleNumber number="5" />
      </div>
      <ButtonSubmit nameButton="submit"/>
    </section>
  );
};
