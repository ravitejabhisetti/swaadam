import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    startedScreenSection: {
        padding: 10,
        flex: 1
    },
    appLogoImage: {
        resizeMode: Constants.Contain,
        width: Constants.Width_100
    },
    appName: {
        color: Constants.Black,
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 26,
        paddingBottom: 10
    },
    appDescription: {
        color: Constants.Grey,
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 16,
        lineHeight: 26,
        textAlign: Constants.Justify,
        paddingBottom: 15
    },
    startedButtonSection: {
        width: Constants.Width_100
    },
    logoSection: {
        flex: 3,
        flexDirection: Constants.Column,
        justifyContent: Constants.Center,
        alignItems: Constants.Center
    },
    textSection: {
        flex: 1.5
    }
});

export { Styles };