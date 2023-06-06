import React, { useState } from "react";
import "./Main.scss";
import { arrData, PAGE_WIDTH } from "../../util/consts";
import btnScrollLeft from "../../images/arrow1.png";
import btnScrollRight from "../../images/arrow2.png";
import Cart from "../Cart/Cart";

const Main = () => {
  const [offset, setOffset] = useState(0);

  const hedleScrollLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      console.log(newOffset);
      return Math.max(newOffset, -1300);
    });
  };

  const hedleScrollRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  return (
    <main className="main">
      <img
        alt="кнопа"
        src={btnScrollLeft}
        className="main__btn-scroll left"
        onClick={hedleScrollLeft}
      />
      <img
        alt="кнопа"
        src={btnScrollRight}
        className="main__btn-scroll right"
        onClick={hedleScrollRight}
      />
      <div className="window">
        <div
          className="scroll-win"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {arrData.map((i) => {
            return (
              <Cart key={i.id} src={i.src} title={i.title} city={i.city} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
