import React from "react";
import { motion } from "framer-motion";

export default function Translation({ doStuff, setInput, result }) {
  const massengerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      viewBox="-149.1 -248.49675 1292.2 1490.9805"
    >
      <g transform="translate(-15 -11.5)">
        <linearGradient
          y2="1005.5"
          x2="512"
          y1="11.5"
          x1="512"
          gradientUnits="userSpaceOnUse"
          id="a"
        >
          <stop offset="0" stop-color="#00b2ff" />
          <stop offset="1" stop-color="#006aff" />
        </linearGradient>
        <path
          d="M512 11.5c-280 0-497 205.1-497 482.1 0 144.9 59.4 270.1 156.1 356.6 8.1 7.3 13 17.4 13.4 28.3l2.7 88.4c.9 28.2 30 46.5 55.8 35.2l98.6-43.5c8.4-3.7 17.7-4.4 26.5-2 45.3 12.5 93.6 19.1 143.9 19.1 280 0 497-205.1 497-482.1S792 11.5 512 11.5z"
          fill="url(#a)"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
        <path
          d="M213.6 634.6l146-231.6c23.2-36.8 73-46 107.8-19.9l116.1 87.1c10.7 8 25.3 7.9 35.9-.1l156.8-119c20.9-15.9 48.3 9.2 34.2 31.4L664.5 614c-23.2 36.8-73 46-107.8 19.9l-116.1-87.1c-10.7-8-25.3-7.9-35.9.1L247.8 666c-20.9 15.9-48.3-9.2-34.2-31.4z"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#fff"
        />
      </g>
    </svg>
  );
  return (
    <div>
      <div className="massenger-logo">{massengerIcon} messenger</div>
      <div className="result-text-container">
        <p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="result-text"
        >
          {result.length > 0 ? result : ""}
        </p>
      </div>
      <div className="send-area">
        <div>
          <input
            className="text-area"
            cols={55}
            rows={10}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3682/3682321.png"
            className="action-btn"
            onClick={doStuff}
          />
        </div>
      </div>
    </div>
  );
}
