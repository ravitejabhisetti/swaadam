/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, AsyncStorage, SafeAreaView } from 'react-native';
import { createRootNavigator } from './router';
import * as Constants from './src/common/swaadam-constants';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import { updateUserDetails } from './src/store/actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    signedIn: false
  }
  componentDidMount() {
    AsyncStorage.getItem(Constants.User_Details).then((userDetails) => {
      if (userDetails) {
        const parsedUserDetails = JSON.parse(userDetails);
        this.props.updateUserDetails(parsedUserDetails, true);
        this.setState((state) => {
          return {
            ...state,
            signedIn: userDetails ? true : false
          }
        });
      }
    })
  }
  render() {
    const RenderApp = createRootNavigator(this.state.signedIn || this.props.userSignedIn);
    const RenderAppContainer = createAppContainer(RenderApp);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <RenderAppContainer />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userSignedIn: state.userDetails.userSignedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserDetails: (userDetails, userPresence) => dispatch(updateUserDetails(userDetails, userPresence))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
