import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import ShopPage from './shop.component';

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const ShopPageContainer = compose(
  connect(null, mapDispatchToProps)
)(ShopPage);

export default ShopPageContainer;
