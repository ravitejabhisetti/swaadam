import { StyleSheet, Platform } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const width = Platform.OS === 'ios' ? 3 : 0

const Styles = StyleSheet.create({
    labelText: {
        fontFamily: Constants.Montserrat_Medium,
        fontSize: 18,
        color: Constants.Grey,
        marginBottom: width,
        paddingBottom: width
    },
    labelTextSection: {
        marginBottom: width,
        paddingBottom: width
    },
    textInput: {
        marginTop: Platform.OS === 'ios' ? 3 : 6,
        borderBottomWidth: 0.6,
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 16,
        color: Constants.Black,
        borderBottomColor: "#BDBDBD"
    }
});

export { Styles };