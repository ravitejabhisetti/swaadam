import React, { Component } from 'react';
import { View, Text, ScrollView, Keyboard } from 'react-native';
import { SwaadamForm, SwaadamNavigationHeader, SwaadamAlertModal } from '../../components/swaadam-common-components';
import { Styles } from './swaadam-sign-in-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { validateMobileNumber } from '../../common/validations';
import { connect } from 'react-redux';
import { updateUserMobileNumber } from '../../store/actions/actions';

class SwaadamSignInScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        displayAlertModal: false,
        displayActivityIndicator: false
    }
    handleBackAction = () => {
        this.props.navigation.navigate(Constants.Explore_Screen);
    }
    submitSignInForm = (formItems) => {
        // this.handleAlertModal(true);
        this.handleButtonSubmit(true);
        Keyboard.dismiss();
        if (validateMobileNumber(formItems[0].value)) {
            this.handleButtonSubmit(false);
            this.props.updateUserMobileNumber(formItems[0].value);
            this.props.navigation.navigate(Constants.User_OTP_Screen);
        } else {
            this.handleButtonSubmit(false);
            this.handleAlertModal(true);
        }
    }
    hideAlertModal = () => {
        this.handleAlertModal(false);
    }
    handleButtonSubmit = (display) => {
        this.setState((state) => {
            return {
                ...state,
                displayActivityIndicator: display
            }
        })
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
                <SwaadamAlertModal
                    displayButtonSection={false}
                    alertText={Constants.Mobile_Number_Error}
                    hideAlertModal={() => this.hideAlertModal()}
                    displayAlertModal={this.state.displayAlertModal} />
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
                            displayActivityIndicator={this.state.displayActivityIndicator}
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserMobileNumber: (mobileNumber) => dispatch(updateUserMobileNumber(mobileNumber))
    }
}

export default connect(null, mapDispatchToProps)(SwaadamSignInScreen);