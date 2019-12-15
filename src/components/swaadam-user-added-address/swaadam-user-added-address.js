import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './swaadam-user-added-address-style';
import * as Constants from '../../common/swaadam-constants';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SwaadamUserAddedAddress extends Component {
    handleEditLocation() {
        console.log('in handle edit location---');
        this.props.updateAddress();
    }
    handleLocationSelection() {
        console.log('in handle locatiomn selection----');
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.handleLocationSelection()} style={Styles.userAddedAddressSection}>
                <View>
                    <View style={Styles.newsRow}>
                        <View style={Styles.newContent}>
                            <Icon size={24} name="location-on" color={Constants.Black}></Icon>
                        </View>
                        <View style={[Styles.newContent, Styles.addNewText]}>
                            <Text style={Styles.addNewTextStyle}>{this.props.locationDetails.locationName}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.handleEditLocation()} style={Styles.editIcon}>
                            <Icon size={24} name="edit" color={Constants.Black}></Icon>
                        </TouchableOpacity>
                    </View>
                    <MapView
                        scrollEnabled={false}
                        style={Styles.map}
                        initialRegion={this.props.region}
                    >
                        <Marker
                            coordinate={this.props.region}
                        />
                    </MapView>
                    <View style={Styles.address}>
                        <Text style={Styles.addressText}>{this.props.locationDetails.locationAddress}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default SwaadamUserAddedAddress;