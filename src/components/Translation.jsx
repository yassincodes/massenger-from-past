import React from "react";
import {motion} from "framer-motion"

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
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
        <input
          className="text-area"
          cols={55}
          rows={10}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="action-btn" onClick={doStuff}>
          send
        </button>
      </div>
    </div>
  );
}
