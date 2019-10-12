import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    formButtonSection: {
        backgroundColor: Constants.Started_Button_yellow,
        borderRadius: 30,
        flexDirection: Constants.Row,
        justifyContent: Constants.Center,
        alignItems: Constants.Center,
        paddingTop: 16,
        paddingBottom: 16,
        height: 50,
        width: '100%'
    },
    formButtonText: {
        color: Constants.Black,
        fontSize: 18,
        fontFamily: Constants.Montserrat_Bold
    }
});

export { Styles };