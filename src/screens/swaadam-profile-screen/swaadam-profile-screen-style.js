import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    profileHeader: {
        height: 100,
        backgroundColor: '#ECEFF1',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        justifyContent: Constants.Space_Between,
        alignItems: Constants.Center,
        flexDirection: Constants.Row
    },
    userName: {
        color: Constants.Black,
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 14,
        paddingBottom: 3
    },
    profileText: {
        color: '#616161',
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 12,
        paddingBottom: 3
    },
    nameIconSection: {
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: Constants.Center,
        alignItems: Constants.Center,
        backgroundColor: Constants.Black
    },
    iconName: {
        color: Constants.White,
        fontSize: 22,
        fontFamily: Constants.Montserrat_Bold
    }
});

export { Styles };