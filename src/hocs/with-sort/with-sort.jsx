import React, {PureComponent} from "react";

const withSort = (Component) => {
  class WithSort extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isSortOpened: false
      };
    }

    render() {
      const {isSortOpened} = this.state;

      return (
        <Component
          {...this.props}
          isSortOpened={isSortOpened}
          onSortFocus={(evt) => {
            evt.preventDefault();
            this.setState({
              isSortOpened: true
            });
          }}
          onSortBlur={(evt) => {
            evt.preventDefault();
            this.setState({
              isSortOpened: false
            });
          }}
        />
      );
    }
  }

  return WithSort;
};

export default withSort;
