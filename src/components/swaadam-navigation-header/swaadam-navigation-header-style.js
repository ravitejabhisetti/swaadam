import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    navigationHeaderSection: {
        marginTop: 20
    },
    navigationHeaderRow: {
        flexDirection: Constants.Row,
        justifyContent: Constants.Center
    },
    chevronLeft: {
        position: Constants.Absolute,
        left: 0
    },
    headerText: {
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 16,
        paddingTop: 2
    }
});

export { Styles };