import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItemContainer from '../collection-item/collection-item.container';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 
        className="title" 
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {
          items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItemContainer key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
}

export default withRouter(CollectionPreview);