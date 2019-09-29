import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    getStartedSection: {
        backgroundColor: Constants.Started_Button_yellow,
        borderRadius: 8,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10
    },
    buttonSection: {
        flex: 1,
        flexDirection: Constants.Row,
        justifyContent: Constants.Space_Between,
        alignItems: Constants.Center,
        paddingRight: 20
    },
    startedText: {
        fontFamily: Constants.Montserrat_Bold,
        color: Constants.White,
        fontSize: 18
    }
});

export { Styles };