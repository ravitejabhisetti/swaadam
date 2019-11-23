import React, { Component } from 'react';
import { View, Text, PermissionsAndroid, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Styles } from './swaadam-location-screen-style';
import Geolocation from 'react-native-geolocation-service';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamLocationEntity, SwaadamNavigationHeader } from '../../components/swaadam-common-components';
import Icon from 'react-native-vector-icons/AntDesign';

class SwaadamLocationScreen extends Component {
    constructor(props) {
        super(props);
    }

    handleBackAction() {
        this.props.navigation.navigate(Constants.Explore_Screen);
    }

    handleAddNewAddress() {
        console.log('in handle new address----');
        this.props.navigation.navigate(Constants.Add_New_Address_Screen);
    }

    onRegionChange(region) {
        console.log('region change check is---', region);
        // this.setState({ x: region.nativeEvent.coordinate })
        // this.setState((state) => {
        //     return {
        //         ...state,
        //         region: region
        //     }
        // });
    }
    render() {
        return (
            // <View style={Styles.container}>
            //     <MapView
            //         style={Styles.map}
            //         initialRegion={this.state.region}
            //         onRegionChange={(region) => this.onRegionChange(region)}
            //     >
            //         <Marker draggable
            //             coordinate={this.state.region}
            //         // onDragEnd={(e) => this.onRegionChange(e)}
            //         />
            //     </MapView>
            // </View>
            <View style={Styles.locationScreen}>
                <View style={Styles.navigationSection}>
                    <SwaadamNavigationHeader
                        headerText="My Addresses"
                        handleBackNavigation={() => this.handleBackAction()}
                    >
                    </SwaadamNavigationHeader>
                </View>
                <ScrollView>
                    {/* <SwaadamLocationEntity
                    region={this.state.region}
                    onRegionChange={(region) => this.onRegionChange(region)}
                >
                </SwaadamLocationEntity> */}
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

export default SwaadamLocationScreen;