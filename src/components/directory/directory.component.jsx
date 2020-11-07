import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import Category from "../category/category.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...rest }) => (
      <Category key={id} {...rest}>
        {" "}
      </Category>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
