import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    labelText: {
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 18,
        color: Constants.Grey
    },
    textBoxSection: {
        marginTop: 6
    },
    textInput: {
        borderBottomWidth: 0.6,
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 20,
        color: Constants.Black
    }
});

export { Styles };