import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    otpSection: {
        paddingLeft: 10,
        paddingRight: 10
    },
    otpHeader: {
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 16,
    },
    otpHeaderView: {
        marginTop: 100,
        marginBottom: 50,
        paddingLeft: 16
    },
    otpTextBoxSection: {
        width: '70%',
        borderRadius: 8,
        marginTop: 40,
        marginBottom: 40,
        height: 120,
        borderWidth: 0.5,
        borderColor: Constants.Grey,
        borderRadius: 6,
        alignSelf: Constants.Center,
        paddingRight: 25,
        paddingLeft: 25,
    },
    inputText: {
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 18,
        color: Constants.Black
    },
    inputContainer: {
        borderBottomColor: '#B8BAC6',
        borderBottomWidth: 2,
        margin: 4

    },
    focusInput: {
        borderBottomColor: Constants.Started_Button_yellow,
        borderBottomWidth: 2,
        color: Constants.Black
    },
    otpSubmitSection: {
        width: '90%',
        marginTop: 30,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: Constants.Row,
        justifyContent: Constants.Center,
        alignSelf: Constants.Center
    },
    resendOtp: {
        marginTop: 40,
        alignSelf: Constants.Center
    }
});

export { Styles };