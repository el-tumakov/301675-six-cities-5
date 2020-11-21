import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OffersList from "../offers-list/offers-list";
import Sort from "../sort/sort";
import {sortOffers} from "../../sort";
import {offersProps} from "../../prop-types";
import {ScreenTypes} from "../../const";


const CitiesOffers = (props) => {
  const {sort, offers, onChangeSort, city} = props;

  const sortedCityOffers = sortOffers(sort, offers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedCityOffers.length} places to stay in {city}</b>
      <Sort
        activeSort={sort}
        onChangeSort={onChangeSort}
      />
      <OffersList
        offers={sortedCityOffers}
        screenType={ScreenTypes.MAIN}
      />
    </section>
  );
};

CitiesOffers.propTypes = {
  sort: PropTypes.string.isRequired,
  offers: offersProps,
  onChangeSort: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = ({PROCESS}) => ({
  sort: PROCESS.sort,
  city: PROCESS.city
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(sort) {
    dispatch(ActionCreator.changeSort(sort));
  }
});

export {CitiesOffers};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesOffers);
