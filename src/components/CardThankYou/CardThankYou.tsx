import "./CardThankYou.css";

type cardThankYouProps = {
  selectMessage: number
}

export function CardThankYou(props: cardThankYouProps) {

  const{selectMessage} = props;

  return (
    <section className="container-card-thank-you container-card-thank-you-out">
      <div className="container-info-card">
        <img
          className="imgThank"
          src="/illustration-thank-you.svg"
          alt="image thank you"
        />
        <div className="messageSelected">
          <span className="text-messageSelected">
            You selected {selectMessage} out of 5
          </span>
        </div>
        <div className="title-paragr">
          <h2 className="titleThank">Thank you!</h2>
          <p className="paragraphThank">
            <span>We appreciate you taKinq the time to qive a rating. </span>
            <span>
              If you ever need more support, don't hesitate to get in touch!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}