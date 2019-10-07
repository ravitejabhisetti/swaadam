import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    labelText: {
        fontFamily: Constants.Montserrat_Medium,
        fontSize: 18,
        color: Constants.Grey
    },
    textBoxSection: {
        marginTop: 6
    },
    textInput: {
        borderBottomWidth: 0.6,
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 16,
        color: Constants.Black,
        borderBottomColor: "#BDBDBD"
    }
});

export { Styles };