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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopWidth: 0.2,
        alignSelf: 'stretch',
        flex: 1
    }
});

export { Styles };