import React, { Component } from 'react';
import { View, Text, ScrollView, TextInputProps, AsyncStorage } from 'react-native';
import { Styles } from './swaadam-otp-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamNavigationHeader, SwaadamFormButton, SwaadamAlertModal } from '../../components/swaadam-common-components';
import CodeInput from 'react-native-confirmation-code-input';
import { getUsers, updateUserDetails } from '../../store/actions/actions';
import { connect } from 'react-redux';
import { validateUserNumberPresence, validateOtp } from '../../common/validations';

class SwaadamOtpScreen extends Component {
    handleBackAction = () => {
        this.props.navigation.navigate(Constants.User_Sign_In_Screen);
    }
    state = {
        displayActivityIndicator: false,
        otpCode: '',
        displayAlertModal: false
    }
    handleCode = (code) => {
        console.log('code to check----', code);
        if (validateOtp(code)) {
            console.log('in handle check----');
            this.setState((state) => {
                return {
                    ...state,
                    otpCode: code,
                    displayActivityIndicator: true,
                    displayAlertModal: false
                }
            });
            this.handleFormSubmit();
        } else {
            this.setState((state) => {
                return {
                    ...state,
                    displayAlertModal: true
                }
            })
        }
    }
    handleFormSubmit = () => {
        console.log('in form submit---', this.props.userMobileNumber);
        this.props.getUsers(this.props.userMobileNumber).catch((error) => {
            console.log('error to check---', error);
            if (error) {
                this.handleActivityIndicator(false);
            }
        }).then(users => users.json()).then((usersResponse) => {
            console.log('response to check---', usersResponse);
            const numberPresence = validateUserNumberPresence(usersResponse, this.props.userMobileNumber);
            if (!usersResponse || !numberPresence) {
                console.log('in new main---');
                this.props.updateUserDetails(numberPresence, false);
                this.handleActivityIndicator(false);
                this.props.navigation.navigate(Constants.User_Update_Details_Screen);
            } else if (usersResponse && numberPresence) {
                this.props.updateUserDetails(numberPresence, true);
                AsyncStorage.setItem(Constants.User_Details, JSON.stringify(numberPresence));
                this.props.navigation.navigate(Constants.Explore_Screen);
            }
        });;
    }

    handleActivityIndicator(display) {
        this.setState((state) => {
            return {
                ...state,
                displayActivityIndicator: display
            }
        })
    }
    handleAlertModal = (display) => {
        this.setState((state) => {
            return {
                ...state,
                displayAlertModal: display
            }
        });
    }
    render() {
        const otpSubmitText = 'CONFIRM';
        let alertModal = null;
        if (this.state.displayAlertModal) {
            alertModal = (
                <SwaadamAlertModal
                    displayButtonSection={false}
                    alertText={Constants.otpError}
                    hideAlertModal={() => this.handleAlertModal(false)}
                    displayAlertModal={this.state.displayAlertModal}
                />
            )
        }
        return (
            <View style={Styles.otpSection}>
                {alertModal}
                <SwaadamNavigationHeader
                    headerText={Constants.Phone_Verification}
                    handleBackNavigation={() => this.handleBackAction()} />
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={Styles.otpHeaderView}>
                        <Text style={Styles.otpHeader}>Enter your OTP Code here</Text>
                    </View>
                    <View style={Styles.otpTextBoxSection}>
                        <CodeInput
                            ref="codeInputRef1"
                            className={'border-b'}
                            space={15}
                            autoFocus={true}
                            keyboardType="number-pad"
                            size={50}
                            codeLength={4}
                            activeColor={Constants.Black}
                            inactiveColor={Constants.Grey}
                            codeInputStyle={Styles.inputText}
                            inputPosition='center'
                            onFulfill={(code) => this.handleCode(code)}
                        />
                    </View>
                    <View style={Styles.otpSubmitSection}>
                        <SwaadamFormButton
                            formSubmit={() => this.handleFormSubmit()}
                            underlayColor={Constants.Form_Button_Underlay_Color}
                            displayActivityIndicator={this.state.displayActivityIndicator}
                            formButtonTitle={otpSubmitText} />
                    </View>
                    <View style={Styles.resendOtp}>
                        <Text style={Styles.otpHeader}>Resend OTP</Text>
                    </View>
                </ScrollView>
            </View>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        userMobileNumber: state.userDetails.userMobileNumber,
        userDetails: state.userDetails.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        updateUserDetails: () => dispatch(updateUserDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwaadamOtpScreen);