import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions/actions'



const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeat(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.AdditionalFeatures,
    additionalPrice: state.additionalPrice
}
}

const mapDispatchToState = (dispatch) => {
  return {
    addFeat: (feature) => dispatch(addFeature(feature))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(AdditionalFeature);
