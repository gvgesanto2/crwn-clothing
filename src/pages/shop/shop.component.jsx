import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route 
            path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer} 
          />
          <Route 
            exact 
            path={`${match.path}`} 
            component={CollectionsOverviewContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default ShopPage;