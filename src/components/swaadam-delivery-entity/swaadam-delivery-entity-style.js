import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';
import { continueStatement } from '@babel/types';

const Styles = StyleSheet.create({
    deliveryEntity: {
        backgroundColor: Constants.Black,
        height: 50,
        borderRadius: 8,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 6,
        marginBottom: 12,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: Constants.Row,
        justifyContent: Constants.Space_Between,
        alignItems: Constants.Center
    },
    deliveryHeader: {
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 14,
        color: Constants.White
    },
    clickText: {
        fontFamily: Constants.Montserrat_Regular,
        fontSize: 10,
        color: Constants.White,
    },
    deliveryIcon: {
        paddingLeft: 5,
        paddingRight: 5
    }
});

export { Styles };