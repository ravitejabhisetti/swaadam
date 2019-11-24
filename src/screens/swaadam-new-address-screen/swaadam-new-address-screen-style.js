import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    newAddressSection: {
        backgroundColor: '#f7f8fc',
        flex: 1
    },
    navigationSection: {
        backgroundColor: '#F7F8FC',
        height: 70,
    },
    newAddressMainSection: {
        backgroundColor: Constants.White,
        marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderTopWidth: 0.2,
        alignSelf: 'stretch',
        flex: 1
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
    formSection: {
        marginTop: 0,
        paddingLeft: 10,
        paddingRight: 30,
        paddingBottom: 10
    }
});

export { Styles };