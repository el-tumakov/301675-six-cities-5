import React from "react";
import PropTypes from "prop-types";

const CityList = (props) => {
  const {offers} = props;

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
          {cities.map((city, index) => (
            <li key={index} className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CityList;
