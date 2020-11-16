const LeafletMock = jest.genMockFromModule(`leaflet`);


class OfferMarkerMock extends LeafletMock.Marker {
  constructor(coordinates, options) {
    super(coordinates, options);

    this.options.offerId = options.offerId;
  }
}

module.exports = {
  map: (id, options) => new LeafletMock.Map(id, options),
  icon: (options) => new LeafletMock.Icon(options),
  marker: (coordinates, options) => new OfferMarkerMock(coordinates, options),
  tileLayer: (url, options) => new LeafletMock.TileLayer(url, options),
};
