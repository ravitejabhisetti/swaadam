import React, { Component } from 'react';
import { View, Text, ScrollView, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Styles } from './swaadam-explore-screen-style';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Constants from '../../common/swaadam-constants';
import { getLocations } from '../../store/actions/actions';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { updateUserCurrentLocation } from '../../store/actions/actions';

class SwaadamExploreScreen extends Component {
    handleLocation = () => {
        console.log('users ddd---', this.props.userDetails);
        if (this.props.userDetails) {
            this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
        } else {
            this.props.navigation.navigate(Constants.Location_Screen);
        }
    }

    requestLocationPermission() {
        try {
            const granted = PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your location '
                }
            )
            granted.then((response) => {
                console.log('response to check----', response);
                if (response === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition(
                        (position) => {
                            console.log('position to check isss----', position);
                            let location = {
                                latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0,
                                longitudeDelta: 0
                            };
                            this.props.updateUserCurrentLocation(location);
                        },
                        (error) => {
                            // See error code charts below.
                            console.log("error to check---", error);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    );
                } else {
                    console.log("location permission denied");
                }
            });
        } catch (err) {
            console.warn(err)
        }
    }

    componentDidMount() {
        console.log('in component did mount check---');
        this.requestLocationPermission();
    }

    render() {
        return (
            <ScrollView>
                <View style={Styles.locationSection}>
                    <View style={Styles.locationLabel}>
                        <Text style={Styles.locationText}>Location</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.handleLocation()} activeOpacity={1} style={Styles.locationName}>
                        <View>
                            <Text style={Styles.locationSelected}>Home</Text>
                        </View>
                        <View style={Styles.arrowDown}>
                            <Icon name="ios-arrow-down" color="black" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserCurrentLocation: (userCurrentLocation) => dispatch(updateUserCurrentLocation(userCurrentLocation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwaadamExploreScreen);