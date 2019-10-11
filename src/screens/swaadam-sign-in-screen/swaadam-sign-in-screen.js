import React, { Component } from 'react';
import { View, Text, ScrollView, Keyboard } from 'react-native';
import { SwaadamForm, SwaadamNavigationHeader, SwaadamAlertModal } from '../../components/swaadam-common-components';
import { Styles } from './swaadam-sign-in-screen-style';
import * as Constants from '../../common/swaadam-constants';

class SwaadamSignInScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        displayAlertModal: false
    }
    handleBackAction = () => {
        this.props.navigation.navigate(Constants.Explore_Screen);
    }
    submitSignInForm = (formItems) => {
        // this.handleAlertModal(true);
        Keyboard.dismiss();
    }
    hideAlertModal = () => {
        this.handleAlertModal(false);
    }
    handleAlertModal(display) {
        this.setState((state) => {
            return {
                ...state,
                displayAlertModal: display
            }
        });
    }
    render() {
        let swaadamAlertModal = null;
        if (this.state.displayAlertModal) {
            swaadamAlertModal = (
                <SwaadamAlertModal hideAlertModal={() => this.hideAlertModal()} displayAlertModal={this.state.displayAlertModal} />
            )
        }
        return (
            <View style={Styles.signInSection}>
                {swaadamAlertModal}
                <SwaadamNavigationHeader handleBackNavigation={() => this.handleBackAction()} />
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={Styles.signInFormSection}>
                        <SwaadamForm
                            handleFormSubmit={(values) => this.submitSignInForm(values)}
                            formNameToDisplay={Constants.Sign_In_Form}
                            form={Constants.Swaadam_SignIn_Form_Name}
                            formItems={Constants.Swaadam_SignIn_Form}
                            formButtonTitle={Constants.Swaadam_SignIn_Submit_Button}
                        />
                    </View>
                    <View style={Styles.signInTextSection}>
                        <Text style={Styles.signInText}>By clicking Sign up you agree to the following Terms and Conditions without reservation</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
};

export default SwaadamSignInScreen;