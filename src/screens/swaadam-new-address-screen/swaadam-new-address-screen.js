import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './swaadam-new-address-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { connect } from 'react-redux';
import { SwaadamLocationEntity, SwaadamNavigationHeader } from '../../components/swaadam-common-components';

class SwaadamNewAddressScreen extends Component {
    state = {
        region: {
            latitude: 12.9853315,
            longitude: 77.7558125,
            latitudeDelta: 0,
            longitudeDelta: 0
        },
    }

    handleBackAction() {
        this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
    }
    componentDidMount() {
        console.log('current location is---', this.props.userCurrentLocation);
        this.setState((state) => {
            return {
                ...state,
                region: this.props.userCurrentLocation
            }
        })
    }
    render() {
        return (
            <View style={Styles.newAddressSection}>
                <View style={Styles.navigationSection}>
                    <SwaadamNavigationHeader
                        headerText="New Address"
                        handleBackNavigation={() => this.handleBackAction()}
                    >
                    </SwaadamNavigationHeader>
                </View>
                <View style={Styles.newAddressMainSection}>
                    <ScrollView>
                        <SwaadamLocationEntity
                            region={this.state.region}
                            onRegionChange={(region) => this.onRegionChange(region)}
                        >
                        </SwaadamLocationEntity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userCurrentLocation: state.userLocations.userCurrentLocation
    }
}

export default connect(mapStateToProps, null)(SwaadamNewAddressScreen);