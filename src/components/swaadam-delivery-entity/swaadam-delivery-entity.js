import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './swaadam-delivery-entity-style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Constants from '../../common/swaadam-constants';

class SwaadamDeliveryEntity extends Component {
    handleDeliveryEntity = () => {
        this.props.handleDeliveryEntity();
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handleDeliveryEntity} style={Styles.deliveryEntity}>
                <View>
                    <Text style={Styles.deliveryHeader}>Now Delivering in dabbas</Text>
                    <Text style={Styles.clickText}>Click to Read</Text>
                </View>
                <View style={Styles.deliveryIcon}>
                    <Icon name="fire" size={24} color={Constants.Started_Button_yellow}></Icon>
                </View>
            </TouchableOpacity>
        )
    }
}

export default SwaadamDeliveryEntity;