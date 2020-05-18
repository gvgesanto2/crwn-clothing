import { compose } from 'redux';
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import SignIn from './sign-in.component';

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password }))
});

const SignInContainer = compose(
  connect(null, mapDispatchToProps)
)(SignIn);

export default SignInContainer;

