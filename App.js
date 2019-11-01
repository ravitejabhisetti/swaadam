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
        console.log('user details main to check---', userDetails);
        console.log('parsed user details to check---', parsedUserDetails);
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
    const RenderApp = createRootNavigator(this.state.signedIn);
    const RenderAppContainer = createAppContainer(RenderApp);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <RenderAppContainer />
      </SafeAreaView>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserDetails: (userDetails, userPresence) => dispatch(updateUserDetails(userDetails, userPresence))
  }
}

export default connect(null, mapDispatchToProps)(App);
