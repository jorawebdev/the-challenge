/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import LuckyNumberDisplay from 'components/LuckyNumberDisplay/LuckyNumberDisplay';
import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  // TODO: Get values from Redux store
  firstName: state.get(CONTAINER_KEY).user.firstName,
  lastName: state.get(CONTAINER_KEY).user.lastName,
  luckyNumber: state.get(CONTAINER_KEY).luckyNumber
});

export default connect(mapStateToProps)(LuckyNumber);
