import React from "react";
import {motion} from "framer-motion"

export default function OptionSelection({ arrayItems, selectOption, selectPrompt }) {
  function select(option, prompt) {
    selectOption(option)
    selectPrompt(prompt)
  }
  return (
    <>
      <h1 className="heading">👋 تحدث مع شخصيتك التاريخية المفضلة</h1>

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <motion.div
              className="grid-child"
              onClick={() => select(item.option, item.prompt)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img style={{height: "100px" }} src={item.img} />
              <h3>{item.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}