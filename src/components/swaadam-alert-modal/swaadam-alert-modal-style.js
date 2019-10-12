import { StyleSheet, Dimensions } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const window = Dimensions.get('window');

const Styles = StyleSheet.create({
    modalSection: {
        position: Constants.Absolute,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: Constants.Center,
        justifyContent: Constants.Center,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1000,
        height: window.height
    },
    alertContainer: {
        flex: 1,
        alignItems: Constants.Center,
        justifyContent: Constants.Center
    },
    alertContent: {
        minWidth: 250,
        maxWidth: '95%',
        borderRadius: 20,
        maxHeight: '90%',
        backgroundColor: Constants.White,
        padding: 12,
        
    },
    alertContentSection: {
        flexDirection: Constants.Row,
        justifyContent: Constants.Center,
        alignItems: Constants.Center
    },
    closeIcon: {
        position: Constants.Absolute,
        right: 5,
        top: 0
    },
    alertText: {
        paddingTop: 20,
        paddingBottom: 15,
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 16,
        color: Constants.Black
    },
    alertButtonSection: {
        height: 50,
        backgroundColor: Constants.Black,
        borderRadius: 12,
        padding: 6,
        width: 80,
        flexDirection: Constants.Row,
        alignItems: Constants.Center,
        justifyContent: Constants.Center,
        marginTop: 6,
        marginBottom: 6
    },
    alertButtonText: {
        color: Constants.White,
        fontFamily: Constants.Montserrat_Bold,
        fontSize: 16        
    }
});

export { Styles };

