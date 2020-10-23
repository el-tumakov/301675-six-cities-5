import React, {PureComponent} from 'react';
import OfferCard from "../../components/offer-card/offer-card";

const withOfferCard = (Component) => {
  class WithOfferCard extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
        renderOfferCard={(screenType) => {
          return (
            <OfferCard
              screenType={screenType}
            />
          );
        }}
      />;
    }
  }

  return WithOfferCard;
};

export default withOfferCard;
