import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './swaadam-started-button-style';
import Icon from 'react-native-vector-icons/Entypo';

const SwaadamStartedButton = (props) => {
    return (
        <TouchableOpacity style={Styles.getStartedSection}>
            <View style={Styles.buttonSection}>
                <View>
                    <Text style={Styles.startedText}>Get Started</Text>
                </View>
                <View>
                    <Icon size={24} color="white" name="arrow-long-right"></Icon>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SwaadamStartedButton;