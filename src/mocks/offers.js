import {FEATURES, OFFERS_TYPE, CITIES} from "../const";

const PHOTOS_COUNT = 6;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getPhotos = () => {
  const photos = [];

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push(`https://picsum.photos/id/${getRandomInt(50)}/260/200`);
  }

  return photos;
};

export default [
  {
    id: 1,
    photos: getPhotos(),
    title: `Sed laoreet non odio a dapibus.`,
    description: `Donec eget nunc egestas, scelerisque risus id, cursus turpis. Sed sollicitudin ipsum id quam posuere, hendrerit faucibus lorem ultricies.`,
    premium: false,
    type: OFFERS_TYPE[0],
    rating: 4,
    bedrooms: 2,
    guests: 4,
    price: 50,
    features: FEATURES,
    ownerId: 1,
    city: CITIES[3],
    favorite: false,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    photos: getPhotos(),
    title: `Proin tortor quam, rhoncus sed magna nec, interdum venenatis felis.`,
    description: `Duis non faucibus sapien, eget lacinia metus. Ut volutpat, purus in dapibus tempus, elit magna facilisis lectus, ut imperdiet massa risus eget magna.`,
    premium: true,
    type: OFFERS_TYPE[1],
    rating: 4.5,
    bedrooms: 3,
    guests: 6,
    price: 80,
    features: FEATURES,
    ownerId: 2,
    city: CITIES[3],
    favorite: true,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    photos: getPhotos(),
    title: `Etiam dignissim diam enim, ut aliquam ipsum consequat nec.`,
    description: `Aenean lacus diam, dapibus sit amet magna quis, hendrerit sollicitudin magna. Ut aliquet tempor neque, sed dapibus eros mollis ut.`,
    premium: false,
    type: OFFERS_TYPE[2],
    rating: 3.8,
    bedrooms: 1,
    guests: 2,
    price: 30,
    features: FEATURES,
    ownerId: 3,
    city: CITIES[4],
    favorite: false,
    coordinates: [53.54956388, 9.99082893]
  },
  {
    id: 4,
    photos: getPhotos(),
    title: `Cras interdum malesuada odio, at iaculis ipsum gravida eget.`,
    description: `Quisque quam felis, malesuada ac risus nec, tempus condimentum turpis. Etiam ut augue sodales, commodo magna eget, convallis dui.`,
    premium: true,
    type: OFFERS_TYPE[3],
    rating: 4.4,
    bedrooms: 2,
    guests: 3,
    price: 60,
    features: FEATURES,
    ownerId: 4,
    city: CITIES[4],
    favorite: true,
    coordinates: [53.55211352, 10.00353187]
  }
];
