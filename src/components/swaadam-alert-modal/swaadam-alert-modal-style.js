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
        maxWidth: 280,
        borderRadius: 2,
        maxHeight: '90%',
        backgroundColor: Constants.White,
    },
});

export { Styles };

