import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <p className="header__description">
        Мы разработали более 300 проектов магазинов под ключ по всей стране.
        Начиная от маленьких минимаркетов, заканчивая большими универсамами.
      </p>
      <h2 className="header__title">Реализованные проекты магазинов</h2>
    </header>
  );
};

export default Header;
