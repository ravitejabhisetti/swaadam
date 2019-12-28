import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    descriptionSection: {
        marginTop: 30,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 30,
        paddingBottom: 20,
        flexDirection: Constants.Column
    },
    descriptionText: {
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 14,
        color: Constants.Grey,
        letterSpacing: 1.5,
        paddingBottom: 5,
        marginBottom: 5
    },
    navigationSection: {
        height: 60
    },
    textSection: {
        marginBottom: 40
    }
});

export { Styles };