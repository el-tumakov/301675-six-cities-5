import React from "react";
import PropTypes from "prop-types";

const CityList = (props) => {
  const {offers, onChangeCity, activeCity, getCityOffers} = props;

  const cities = offers.reduce((citiesList, offer) => {
    if (!citiesList.includes(offer.city)) {
      citiesList.push(offer.city);
    }

    return citiesList;
  }, []);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item, index) => (
            <li key={item + index} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${item === activeCity ? `tabs__item--active` : ``}`}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeCity(item);
                  getCityOffers();
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
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeCity: PropTypes.func.isRequired,
  getCityOffers: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CityList;
