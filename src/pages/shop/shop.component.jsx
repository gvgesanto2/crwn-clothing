import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Switch>
          <Route 
            path={`${match.path}/:collectionId`} 
            render={(props) =>
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            } 
          />
          <Route 
            exact 
            path={`${match.path}`} 
            render={(props) => 
              <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);