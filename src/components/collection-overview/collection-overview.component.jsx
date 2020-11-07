import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
