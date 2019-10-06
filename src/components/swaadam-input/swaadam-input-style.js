import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    labelText: {
        fontFamily: Constants.Montserrat_Light,
        fontSize: 16,
        color: Constants.Grey
    },
    textBoxSection: {
        marginTop: 2
    },
    textInput: {
        borderBottomWidth: 0.6,
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 20,
        color: Constants.Black
    }
});

export { Styles };