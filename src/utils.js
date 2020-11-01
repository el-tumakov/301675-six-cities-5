export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const adaptToClient = (offers) => {
  const adaptedOffers = offers.map((offer) => {
    const adaptedOffer = Object.assign(
        {},
        offer,
        {
          owner: {
            id: offer.host.id,
            avatar: offer.host.avatar_url,
            name: offer.host.name,
            super: offer.host.is_pro
          },
          photos: offer.images,
          favorite: offer.is_favorite,
          premium: offer.is_premium,
          guests: offer.max_adults,
          preview: offer.preview_image,
          features: offer.goods
        }
    );

    delete adaptedOffer.host;
    delete adaptedOffer.images;
    delete adaptedOffer.is_favorite;
    delete adaptedOffer.is_premium;
    delete adaptedOffer.max_adults;
    delete adaptedOffer.preview_image;
    delete adaptedOffer.goods;


    return adaptedOffer;
  });

  return adaptedOffers;
};
