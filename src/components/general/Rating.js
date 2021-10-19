import React from "react";
import "./Rating.css";

export default function Rating({ count }) {
  let arr = Array(5).fill((e, i) => i);
  return (
    <div>
      {arr.map((e, i) => {
        console.log("Doing");
        return (
          <span
            key={i}
            className={i < count ? "fa fa-star active" : "fa fa-star"}
          />
        );
      })}
    </div>
  );
}
