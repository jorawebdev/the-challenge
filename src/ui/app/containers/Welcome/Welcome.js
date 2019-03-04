/**
 * Welcome.js
 *
 * This container is the component initially displayed when the
 * application is loaded. It is used to collect user data, make
 * a service call, and then show the LuckyNumber container.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import WelcomeForm from 'components/WelcomeForm/WelcomeForm';

import { CONTAINER_KEY } from '../constants';
import saga from '../saga';
import reducer from '../reducer';
import Immutable from 'immutable';
import { fromPairs } from 'lodash';
import { getLuckyNumber, getUser } from '../actions';

class Welcome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  /**
   * This function is invoked when the Redux Form is submitted.
   *
   * @see https://redux-form.com/7.4.2/docs/gettingstarted.md/#step-4-of-4-reacting-to-submit
   * @param {*} values An immutable map of the Redux Form values
   */

  submit(values) {
    // TODO: Get the form values and invoke the service layer
    let [...user] = values.entries();
    user = _.fromPairs(user);
    const { dispatch } = this.props;
    dispatch(getLuckyNumber(user.userName));
    dispatch(getUser(user));
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Welcome</title>
        </Helmet>

        <div className="mt5 pa4 center w-25 bg-light-gray">
          <WelcomeForm onSubmit={this.submit} />
        </div>
        { this.props.error ? <div className="error-text mt3">{this.props.payload.message}</div> : null }
      </article>
    );
  }
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// These are some handy functions provided by the boilerplate project
// They take care of injecting the Saga and reducer
const mapStateToProps = (state) => {
  const error = state.getIn(['code-challenge/welcome'], 'error');
  if(state.getIn(['code-challenge/welcome'], 'error').error){
    return ({
      error: error.error,
      payload: error.payload
    });
  } else {
    return ({});
  }
};
const withConnect = connect(mapStateToProps);
const withSaga = injectSaga({ key: CONTAINER_KEY, saga });
const withReducer = injectReducer({ key: CONTAINER_KEY, reducer });

export default compose(withReducer, withSaga, withConnect)(Welcome);
