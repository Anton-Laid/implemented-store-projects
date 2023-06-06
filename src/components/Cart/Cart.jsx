import React from "react";
import arrowW from "../../images/arrow-w.png";
import arrowG from "../../images/arrow-g.png";
import "./Cart.scss";

const Cart = ({ src, title, city }) => {
  return (
    <section className="cart">
      <img src={src} alt="фото магазина" className="cart__image" />
      <h4 className="cart__title">{title}</h4>
      <p className="cart__city">{city}</p>
      <div className="cart__box-btn">
        <button className="cart__button btn-green">
          Получить КП
          <img src={arrowW} alt="стрелка" className="cart__arrow" />
        </button>

        <button className="cart__button btn-gray">
          Подробнее
          <img src={arrowG} alt="стрелка" className="cart__arrow" />
        </button>
      </div>
    </section>
  );
};

export default Cart;
