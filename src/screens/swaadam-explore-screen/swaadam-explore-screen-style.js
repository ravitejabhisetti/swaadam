import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    locationSection: {
        marginLeft: 30,
        marginTop: 10,
        flexDirection: Constants.Row
    },
    locationText: {
        fontFamily: Constants.Montserrat_Regular,
        color: Constants.Grey
    },
    locationName: {
        marginLeft: 10,
        flexDirection: Constants.Row
    },
    locationSelected: {
        fontFamily: Constants.Montserrat_Bold,
        color: Constants.Black,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: Constants.Grey
    },
    arrowDown: {
        paddingLeft: 10
    },
    exploreSection: {
        backgroundColor: '#ECEFF1'
    },
    scrollContainer: {
        flexGrow: 1
    }
});

export { Styles };