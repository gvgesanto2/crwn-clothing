import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsLoadingUserAuth } from '../../redux/user/user.selectors';
import CustomButton from './custom-button.component';
import withSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingUserAuth
});

const CustomButtonWithSpinner = compose(
  connect(mapStateToProps),
  withSpinner
)(CustomButton);

export default CustomButtonWithSpinner;