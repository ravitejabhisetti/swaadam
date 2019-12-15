import React, { Component } from 'react';
import { View, Text, ScrollView, Keyboard, AsyncStorage } from 'react-native';
import { Styles } from './swaadam-update-details-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamNavigationHeader, SwaadamForm, SwaadamAlertModal } from '../../components/swaadam-common-components';
import { validateUpdateDetailsForm } from '../../common/validations';
import { connect } from 'react-redux';
import { addUser, updateUserDetails, updateUserSignIn } from '../../store/actions/actions';

export class SwaadamUpdateDetailsScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        displayActivityIndicator: false,
        displayAlertModal: false,
        alertModalAlertText: ''
    }
    handleBackAction() {
        this.props.navigation.navigate(Constants.User_OTP_Screen);
    }
    handleFormSubmit(formValues) {
        let validationError = null;
        this.handleButtonSubmit(true);
        Keyboard.dismiss();
        validationError = validateUpdateDetailsForm(formValues);
        if (!validationError) {
            if (!this.props.userDetails) {
                this.props.addUser(this.props.userMobileNumber, formValues).catch((error) => {
                    if (error) {
                        this.handleButtonSubmit(false);
                    }
                }).then(usersResponse => usersResponse.json()).then((response) => {
                    this.handleButtonSubmit(false);
                    const userInfo = {
                        name: formValues[0].value,
                        email: formValues[1].value,
                        mobileNumber: this.props.userMobileNumber
                    };
                    userInfo.userId = response.name;
                    userInfo.locations = 'empty';
                    this.props.updateUserDetails(userInfo, true);
                    AsyncStorage.setItem(Constants.User_Details, JSON.stringify(userInfo));
                    this.props.updateUserSignIn(true);
                    this.props.navigation.navigate(Constants.Explore_Screen);
                })
            }
        } else {
            this.handleButtonSubmit(false);
            this.handleAlertModal(true, validationError);
        }

    }
    handleAlertModal(display, alertModalText) {
        this.setState((state) => {
            return {
                ...state,
                displayAlertModal: display,
                alertModalAlertText: display ? alertModalText : ''
            }
        })
    }
    handleButtonSubmit(display) {
        this.setState((state) => {
            return {
                ...state,
                displayActivityIndicator: display
            }
        })
    }
    render() {
        let alertModal = null;
        if (this.state.displayAlertModal) {
            alertModal = (
                <SwaadamAlertModal
                    displayButtonSection={false}
                    alertText={this.state.alertModalAlertText}
                    hideAlertModal={() => this.handleAlertModal(false)}
                    displayAlertModal={this.state.displayAlertModal}
                />
            )
        }
        return (
            <View style={Styles.updateDetailsSection}>
                {alertModal}
                <View style={Styles.navigatorSection}>
                    <SwaadamNavigationHeader
                        handleBackNavigation={() => this.handleBackAction()}
                    />
                </View>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={Styles.formSection}>
                        <SwaadamForm
                            handleFormSubmit={(values) => this.handleFormSubmit(values)}
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

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails.userDetails,
        userMobileNumber: state.userDetails.userMobileNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userMobileNumber, userDetails) => dispatch(addUser(userMobileNumber, userDetails)),
        updateUserDetails: (userDetails, userPresence) => dispatch(updateUserDetails(userDetails, userPresence)),
        updateUserSignIn: (signIn) => dispatch(updateUserSignIn(signIn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwaadamUpdateDetailsScreen);