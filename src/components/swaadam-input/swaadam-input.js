import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SwaadamInput extends Component {
    render() {
    let {...props} = this.props;
        return (
            <View>
                <Text>{props.name}</Text>
                <Text>{props.label}</Text>
                <Text>{props.placeholder}</Text>
            </View>
        )
    }
}

export default SwaadamInput;

