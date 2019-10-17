import React, { Component } from 'react';
import { View, Text, ScrollView, TextInputProps } from 'react-native';
import { Styles } from './swaadam-otp-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamNavigationHeader, SwaadamFormButton } from '../../components/swaadam-common-components';
import CodeInput from 'react-native-confirmation-code-input';
import { getUsers, updateUserDetails } from '../../store/actions/actions';
import { connect } from 'react-redux';

class SwaadamOtpScreen extends Component {
    handleBackAction = () => {
        this.props.navigation.navigate(Constants.User_Sign_In_Screen);
    }
    state = {
        displayActivityIndicator: false,
        otpCode: ''
    }
    handleCode = (code) => {
        console.log('code to check----', code);
        if (code.length === 4) {
            console.log('in handle check----');
            this.setState((state) => {
                return {
                    ...state,
                    otpCode: code,
                    displayActivityIndicator: true
                }
            });
            this.handleFormSubmit();
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
            this.props.updateUserDetails(usersResponse, false);
            if (!usersResponse) {
                this.handleActivityIndicator(false);
                this.props.navigation.navigate(Constants.User_Update_Details_Screen);
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
    render() {
        const otpSubmitText = 'CONFIRM';
        return (
            <View style={Styles.otpSection}>
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