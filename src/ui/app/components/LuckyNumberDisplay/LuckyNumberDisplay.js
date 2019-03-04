/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
    const { firstName, lastName, luckyNumber } = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <p>Hello, {firstName} {lastName}!</p>
        <p>Your Lucky Number is</p>
        <p>{luckyNumber}</p>
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  luckyNumber: PropTypes.number
};

export default LuckyNumberDisplay;
