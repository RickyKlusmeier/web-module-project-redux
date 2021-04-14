import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

const mapDispatchToState = dispatch => {
  return {
    remFeat: (feat) => dispatch(removeFeature(feat))
  }
}

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.remFeat(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, mapDispatchToState)(AddedFeature);
