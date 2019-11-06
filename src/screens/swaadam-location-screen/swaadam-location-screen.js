import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Styles } from './swaadam-location-screen-style';
import Geolocation from 'react-native-geolocation-service';

class SwaadamLocationScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        region: {
            latitude: 12.9853315,
            longitude: 77.7558125,
            latitudeDelta: 0,
            longitudeDelta: 0
        },
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
                            this.setState((state) => {
                                return {
                                    ...state,
                                    region: location
                                }
                            })
                        },
                        (error) => {
                            // See error code charts below.
                            console.log("error to check---", error);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                    );
                } else {
                    console.log("location permission denied")
                }
            });
        } catch (err) {
            console.warn(err)
        }

    }

    componentDidMount() {
        this.requestLocationPermission();
    }

    onRegionChange(region) {
        console.log('region change check is---', region);
        // this.setState({ x: region.nativeEvent.coordinate })
        this.setState((state) => {
            return {
                ...state,
                region: region
            }
        });
    }
    render() {
        return (
            <View style={Styles.container}>
                <MapView
                    style={Styles.map}
                    initialRegion={this.state.region}
                    onRegionChange={(region) => this.onRegionChange(region)}
                >
                    <Marker draggable
                        coordinate={this.state.region}
                    // onDragEnd={(e) => this.onRegionChange(e)}
                    />
                </MapView>
            </View>
        )
    }
}

export default SwaadamLocationScreen;