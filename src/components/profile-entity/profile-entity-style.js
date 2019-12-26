import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    textSection: {
        flexDirection: Constants.Row,
        justifyContent: Constants.Flex_Start,
        alignItems: Constants.Center,
    },
    profileEntitySection: {
        flexDirection: Constants.Row,
        justifyContent: Constants.Space_Between,
        alignItems: Constants.Center,
        height: 45,
        marginTop: 6,
        marginLeft: 6,
        marginRight: 6
    },
    iconSection: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#FBC02D',
        justifyContent: Constants.Center,
        alignItems: Constants.Center
    },
    textSectionBlock: {
        paddingLeft: 15
    },
    textEntity: {
        fontFamily: Constants.Montserrat_Regular,
        color: '#000000',
        fontSize: 14
    },
    creditsText: {
        fontFamily: Constants.Montserrat_Bold,
        color: '#000000',
        fontSize: 14
    }
});

export { Styles };