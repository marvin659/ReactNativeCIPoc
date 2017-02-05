import ReactNative from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import createReducer from '../../state/reducers';
import styles from './styles';
const { View, Text } = ReactNative;

// XX: https://github.com/leecade/react-native-swiper
import Swiper from 'react-native-swiper';

const slide1Style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB',
};

const slide2Style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#97CAE5',
};

const slide3Style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9',
};

const textStyle = {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold',
};

export class MainNavigation extends Component {
  render() {
    return (
      <Swiper showsButtons>
        <View style={slide1Style}>
          <Text style={textStyle}>Hello Swiper</Text>
        </View>
        <View style={slide2Style}>
          <Text style={textStyle}>Beautiful</Text>
        </View>
        <View style={slide3Style}>
          <Text style={textStyle}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

MainNavigation.propTypes = {
  //removeThisReducerOnceYouAddALegitOne: React.PropTypes.object.isRequired,
  //dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(createReducer, (removeThisReducerOnceYouAddALegitOne) => ({ removeThisReducerOnceYouAddALegitOne })),
  mapDispatchToProps
)(MainNavigation);
