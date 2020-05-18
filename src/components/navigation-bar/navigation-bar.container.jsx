import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import NavigationBar from './navigation-bar.component';
import { signOutStart } from '../../redux/user/user.actions';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

const NavigationBarContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(NavigationBar);

export default NavigationBarContainer;
