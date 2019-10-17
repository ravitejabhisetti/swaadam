import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './swaadam-update-details-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamNavigationHeader, SwaadamForm } from '../../components/swaadam-common-components';

export class SwaadamUpdateDetailsScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        displayActivityIndicator: false
    }
    handleBackAction() {
        this.props.navigation.navigate(Constants.User_OTP_Screen);
    }
    render() {
        return (
            <View style={Styles.updateDetailsSection}>
                <View style={Styles.navigatorSection}>
                    <SwaadamNavigationHeader
                        handleBackNavigation={() => this.handleBackAction()}
                    />
                </View>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    {/* <View style={Styles.updateHeaderSection}>
                        <Text style={Styles.headerText}>{Constants.Update_Details_Header}</Text>
                    </View> */}
                    <View style={Styles.formSection}>
                        <SwaadamForm
                            formNameToDisplay={Constants.Update_Details_Header}
                            form={Constants.Swaadam_Update_Details_Form_Name}
                            formItems={Constants.Swaadam_Update_Details_Form}
                            formButtonTitle={Constants.Update_Button}
                            displayActivityIndicator={this.state.displayActivityIndicator}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default SwaadamUpdateDetailsScreen;