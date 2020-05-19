import React from 'react';

import SignInContainer from '../../components/sign-in/sign-in.container';
import SignUpContainer from '../../components/sign-up/sign-up.container';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInContainer />
      <SignUpContainer />
    </div>
  );
}

export default SignInAndSignUp;