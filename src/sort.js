import {SortTypes} from "./const";

export const sortOffers = (sortType, offers) => {
  let sortedOffers = offers.slice();

  switch (sortType) {
    case SortTypes.POPULAR:
      return sortedOffers;

    case SortTypes.TO_LOW:
      return sortedOffers.sort((previous, next) => (previous.price - next.price));

    case SortTypes.TO_HIGH:
      return sortedOffers.sort((previous, next) => (next.price - previous.price));

    case SortTypes.TOP_RATED:
      return sortedOffers.sort((previous, next) => (next.rating - previous.rating));
  }

  return sortedOffers;
};
