import React, { Component } from 'react';
import { View, Text, ScrollView, TextInputProps } from 'react-native';
import { Styles } from './swaadam-otp-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamNavigationHeader, SwaadamFormButton } from '../../components/swaadam-common-components';
import CodeInput from 'react-native-confirmation-code-input';

class SwaadamOtpScreen extends Component {
    handleBackAction = () => {
        this.props.navigation.navigate(Constants.User_Sign_In_Screen);
    }
    state = {
        displayText: false
    }
    handleCode = (code) => {
        console.log('code to check----', code);
    }
    handleFormSubmit = () => {
        console.log('in form submit---', this.otpRef);
    }
    render() {
        const otpSubmitText = 'CONFIRM';
        if (this.state.displayText) {
            check = (
                <Text>check the text</Text>
            )
        }
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
                            displayActivityIndicator={false}
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

export default SwaadamOtpScreen;