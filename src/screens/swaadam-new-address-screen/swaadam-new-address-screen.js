import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './swaadam-new-address-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamLocationEntity, SwaadamNavigationHeader } from '../../components/swaadam-common-components';

class SwaadamNewAddressScreen extends Component {
    handleBackAction() {
        this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
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

export default SwaadamNewAddressScreen;