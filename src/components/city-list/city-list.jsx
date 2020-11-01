import React from "react";
import PropTypes from "prop-types";
import {CITIES} from "../../const";

const CityList = (props) => {
  const {onChangeCity, activeCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((item, index) => (
            <li key={item + index} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${item === activeCity ? `tabs__item--active` : ``}`}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeCity(item);
                }}
              >
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CityList;
