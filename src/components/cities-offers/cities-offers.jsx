import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OffersListMain from "../offers-list-main/offers-list-main";
import Sort from "../sort/sort";
import {sortOffers} from "../../sort";
import {offersProps} from "../../prop-types";


const CitiesOffers = (props) => {
  const {sort, offers, onChangeSort} = props;

  const sortedCityOffers = sortOffers(sort, offers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedCityOffers.length} places to stay in Amsterdam</b>
      <Sort
        activeSort={sort}
        onChangeSort={onChangeSort}
      />
      <OffersListMain offers={sortedCityOffers}/>
    </section>
  );
};

CitiesOffers.propTypes = {
  sort: PropTypes.string.isRequired,
  offers: offersProps,
  onChangeSort: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  sort: PROCESS.sort,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(sort) {
    dispatch(ActionCreator.changeSort(sort));
  }
});

export {CitiesOffers};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesOffers);
