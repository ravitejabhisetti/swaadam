import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Constants from '../../common/swaadam-constants';
import { Styles } from './swaadam-option-style';

class SwaadamOption extends Component {
    render() {
        return (
            <View style={Styles.iconEntity}>
                <Icon color={Constants.Black} size={24} name={this.props.option.iconName}></Icon>
            </View>
        )
    }
}

export default SwaadamOption;