import PropTypes from "prop-types";

export const oneOfferProps = PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
  }),
  description: PropTypes.string,
  favorite: PropTypes.bool,
  features: PropTypes.arrayOf(PropTypes.string),
  guests: PropTypes.number,
  id: PropTypes.number,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  }),
  owner: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    super: PropTypes.bool
  }),
  photos: PropTypes.arrayOf(PropTypes.string),
  premium: PropTypes.boold,
  preview: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string
}).isRequired;

export const offersProps = PropTypes.arrayOf(oneOfferProps).isRequired;

export const userDataProps = PropTypes.shape({
  "id": PropTypes.number,
  "email": PropTypes.string,
  "name": PropTypes.string,
  "avatar_url": PropTypes.string,
  "is_pro": PropTypes.bool
}).isRequired;

export const reviewProps = PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    "avatar_url": PropTypes.string,
    "id": PropTypes.number,
    "is_pro": PropTypes.bool,
    "name": PropTypes.string
  })
}).isRequired;
