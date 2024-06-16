import "./CardThankYou.css";
import { motion } from "framer-motion";
import { LinkBackwardIcon } from "../icon/LinkBackwardIcon";
import { useState } from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface LocationState {
  renderedNumber: number | null;
}

export function CardThankYou() {
  const location = useLocation();
  const state = location.state as LocationState;
  const renderedNumber = state?.renderedNumber ?? null;

  const [changedPage, setChangePage] = useState(<Card />);

  const handleClick = () => {
    setChangePage(changedPage);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="container-card-thank-you container-card-thank-you-out">
        <div className="container-info-card">
          <Link
            onClick={handleClick}
            to="/home"
            className="container-animate-update"
            title="Return"
          >
            <div className="animate-update">
              <LinkBackwardIcon />
              {/* <GoSync style={{ transformOrigin: "center" }} /> */}
            </div>
          </Link>
          <div className="container-images">
            <img
              className="imgThank"
              src="/illustration-thank-you.svg"
              alt="image thank you"
            />
          </div>
          <div className="messageSelected">
            <span className="text-messageSelected">
              You selected {renderedNumber} out of 5
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
    </motion.div>
  );
}
