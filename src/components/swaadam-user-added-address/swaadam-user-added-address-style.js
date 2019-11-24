import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    map: {
        height: 100
    },
    userAddedAddressSection: {
        height: 200,
        borderRadius: 10,
        margin: 10,
        borderColor: Constants.Grey,
        borderWidth: 0.1
    },
    newsRow: {
        flexDirection: Constants.Row,
        padding: 20,
        alignItems: Constants.Center,
        alignContent: Constants.Center,
    },
    addNewTextStyle: {
        fontFamily: Constants.Montserrat_Bold,
        color: Constants.Black,
        fontSize: 14,
        paddingLeft: 10
    },
    newContent: {
        alignItems: Constants.Center,
    },
    address: {
        paddingLeft: 15,
        paddingTop: 10
    },
    addressText: {
        fontFamily: Constants.Montserrat_Regular,
        color: Constants.Black,
        fontSize: 12,
    },
    editIcon: {
        position: Constants.Absolute,
        right: 10
    }
});

export { Styles };