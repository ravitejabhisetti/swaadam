import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
    optionsList: {
        justifyContent: Constants.Space_Between,
        flexDirection: Constants.Row,
        alignItems: Constants.Center,
        marginTop: 20,
        flexGrow: 1,
        marginLeft: 12
    }
});

export { Styles };