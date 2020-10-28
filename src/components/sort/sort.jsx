import React from "react";
import PropTypes from "prop-types";

export const SORT_NAMES = [
  {
    type: `popular`,
    title: `Popular`
  },
  {
    type: `to-low`,
    title: `Price: low to high`
  },
  {
    type: `to-high`,
    title: `Price: high to low`
  },
  {
    type: `top-rated`,
    title: `Top rated first`
  }
];

const Sort = (props) => {
  const {
    activeSort,
    onChangeSort,
    isSortOpened,
    onSortFocus,
    onSortBlur
  } = props;

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onFocus={onSortFocus}
      onBlur={onSortBlur}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {SORT_NAMES.find((item) => (item.type === activeSort)).title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={
        `places__options places__options--custom ${isSortOpened ? `places__options--opened` : `places__options--closed`}`
      }>
        {SORT_NAMES.map((item) => (
          <li
            key={item.type}
            className={`places__option ${item.type === activeSort ? `places__option--active` : ``}`}
            tabIndex="0"
            onMouseDown={() => {
              onChangeSort(item.type);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <select className="places__sorting-type visually-hidden" id="places-sorting" defaultValue={activeSort}>
        {SORT_NAMES.map((item) => (
          <option
            key={item.type}
            className="places__option"
            value={item.type}
          >
            {item.title}
          </option>
        ))}
      </select>
    </form>
  );
};

Sort.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  isSortOpened: PropTypes.bool.isRequired,
  onSortFocus: PropTypes.func.isRequired,
  onSortBlur: PropTypes.func.isRequired
};

export default Sort;
