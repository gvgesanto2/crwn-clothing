import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import ShopPage from './shop.component';

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const ShopPageContainer = compose(
  connect(null, mapDispatchToProps)
)(ShopPage);

export default ShopPageContainer;
