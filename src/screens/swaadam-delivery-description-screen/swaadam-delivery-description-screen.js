import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './swaadam-delivery-description-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamNavigationHeader } from '../../components/swaadam-common-components';

class SwaadamDeliveryDescriptionScreen extends Component {
    handleBackAction() {
        this.props.navigation.navigate(Constants.Explore_Screen);
    }
    render() {
        return (
            <View>
                <View style={Styles.navigationSection}>
                    <SwaadamNavigationHeader
                        headerText=""
                        handleBackNavigation={() => this.handleBackAction()}
                    >
                    </SwaadamNavigationHeader>
                </View>
                <ScrollView style={Styles.descriptionSection}>
                    <View style={Styles.textSection}>
                        <Text style={Styles.descriptionText}>We are sorry to inform you that Tinmen will be shutting down from Dec 1st 2019 onwards.</Text>
                        <Text style={Styles.descriptionText}>We were extremely lucky to work with the most amazing home chefs who constantly inspired us with their work ethic. Together they cooked and delivered 2 million meals on Tinmen and always surprised us about how enterprising they can be.</Text>
                        <Text style={Styles.descriptionText}>If there is one thing that had remained constant in the last 4 years, it was the constant love we got from most of the users who ordered food from Tinmen. We are very grateful for this.</Text>
                        <Text style={Styles.descriptionText}>We are also grateful to our delivery personnel - who not only ensured great delivery experience, but also stayed loyal to us in an extremely competitive market.</Text>
                        <Text style={Styles.descriptionText}>We thank our investors who believed in our vision and supported us throughout our journey.</Text>
                        <Text style={Styles.descriptionText}>All users that have any balance left in their Tinmen wallet, will receive a refund link over sms/email/WhatsApp by December 3rd, 2019. Users can use the link to transfer their balance to any of their bank accounts or digital wallets.</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default SwaadamDeliveryDescriptionScreen;