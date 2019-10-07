import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    signInSection: {
        paddingLeft: 10,
        paddingRight: 10
    },
    signInFormSection: {
        marginTop: 100
    },
    signInTextSection: {
        marginTop: 75,
        paddingLeft: 20
    },
    signInText: {
        fontFamily: Constants.Montserrat_Regular,
        color: Constants.Grey,
        fontSize: 16,
        lineHeight: 26
    }
});

export { Styles };