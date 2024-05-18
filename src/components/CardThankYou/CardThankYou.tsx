import "./CardThankYou.css";

export function CardThankYou({ selectMessage }: { selectMessage: string }) {
  return (
    <section className="container-card-thank-you">
      <div className="container-info-card">
        <img
          className="imgThank"
          src="src/assets/images/illustration-thank-you.svg"
          alt="image thank you"
        />
        <div className="messageSelected">
          <span className="text-messageSelected">{selectMessage}</span>
        </div>
        <div className="title-paragr">
          <h2 className="titleThank">Thank you!</h2>
          <p className="paragraphThank">
            We appreciate you taKinq the time to qive a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}
