/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { createRootNavigator } from './router';
import * as Constants from './src/common/swaadam-constants';
import { createAppContainer } from 'react-navigation';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    signedIn: false
  }
  componentDidMount() {
    AsyncStorage.getItem(Constants.Is_App_Signed_In).then((isAppSignedIn) => {
      if (isAppSignedIn) {
        this.setSate((state) => {
          return {
            ...state,
            signedIn: true
          }
        });
      }
    })
  }
  render() {
    const { isSignedIn } = this.state;
    const RenderApp = createRootNavigator(isSignedIn);
    const RenderAppContainer = createAppContainer(RenderApp);
    return (
        <RenderAppContainer />
    )
  }
}

export default App;
