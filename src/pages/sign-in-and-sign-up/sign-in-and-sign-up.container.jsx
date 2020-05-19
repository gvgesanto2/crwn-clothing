import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignInAndSignUp from './sign-in-and-sign-up.component';
import { selectIsLoadingUserAuth } from '../../redux/user/user.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingUserAuth
});

const SignInAndSignUpContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(SignInAndSignUp);

export default SignInAndSignUpContainer;

