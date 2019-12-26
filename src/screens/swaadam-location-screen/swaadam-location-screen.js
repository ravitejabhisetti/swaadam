import React, { Component } from 'react';
import { View, Text, PermissionsAndroid, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Styles } from './swaadam-location-screen-style';
import Geolocation from 'react-native-geolocation-service';
import * as Constants from '../../common/swaadam-constants';
import { connect } from 'react-redux';
import {
    SwaadamLocationEntity,
    SwaadamNavigationHeader,
    SwaadamUserAddedAddress
} from '../../components/swaadam-common-components';
import Icon from 'react-native-vector-icons/AntDesign';

class SwaadamLocationScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        parent: true
    }

    componentDidMount() {
        const parent = this.props.navigation.getParam('parent');
        this.setState((state) => {
            return {
                ...state,
                parent: parent
            }
        });
    }

    handleBackAction() {
        if(this.state.parent) {
        this.props.navigation.navigate(Constants.Explore_Screen);
        } else {
            this.props.navigation.navigate(Constants.Profile_Entities_Screen);
        }
    }

    handleUpdateUserAddress(location, key) {
        this.props.navigation.navigate(Constants.Add_New_Address_Screen, {
            newAddress: false,
            locationDetails: {
                userLocation: location.userLocation,
                userLocationDetails: location.userLocationDetails
            },
            addressIndex: key
        });
    }

    handleAddNewAddress() {
        this.props.navigation.navigate(Constants.Add_New_Address_Screen, {
            newAddress: true,
            locationDetails: null,
            addressIndex: null
        });
    }
    render() {
        let userAddedLocationsList = null;
        if (this.props.userDetails) {
            if (this.props.userDetails.locations !== 'empty') {
                userAddedLocationsList = this.props.userDetails.locations.map((location, index) => {
                    return (
                        <SwaadamUserAddedAddress
                            key={index}
                            region={location.userLocation}
                            locationDetails={location.userLocationDetails}
                            updateAddress={() => this.handleUpdateUserAddress(location, index)}
                        />
                    )
                })
            }
        }
        return (
            <View style={Styles.locationScreen}>
                <View style={Styles.navigationSection}>
                    <SwaadamNavigationHeader
                        headerText="My Addresses"
                        handleBackNavigation={() => this.handleBackAction()}
                    >
                    </SwaadamNavigationHeader>
                </View>
                <ScrollView>
                    {userAddedLocationsList}
                </ScrollView>
                <View style={Styles.newAddress}>
                    <View style={Styles.newAddressSection}>
                        <TouchableOpacity
                            onPress={() => this.handleAddNewAddress()}
                        >
                            <View style={Styles.newsRow}>
                                <View style={Styles.newContent}>
                                    <Icon size={24} name="plus" color={Constants.Black}></Icon>
                                </View>
                                <View style={[Styles.newContent, Styles.addNewText]}>
                                    <Text style={Styles.addNewTextStyle}>Add New Address</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails.userDetails
    }
}

export default connect(mapStateToProps, null)(SwaadamLocationScreen);