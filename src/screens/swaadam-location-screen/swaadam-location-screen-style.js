import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
  navigationSection: {
    backgroundColor: '#F7F8FC',
    height: 70
  },
  newsRow: {
    flexDirection: Constants.Row,
    // marginTop: 12,
    alignItems: Constants.Center,
    alignContent: Constants.Center,
  },
  newAddressSection: {
    justifyContent: Constants.Center,
    height: 50,
    paddingLeft: 20,
    borderTopColor: Constants.Grey,
    borderTopWidth: 0.1,
    backgroundColor: '#F7F8FC'
  },
  newContent: {
    alignItems: Constants.Center,
  },
  newAddress: {
    position: 'relative',
  },
  locationScreen: {
    flex: 1
  },
  addNewText: {
    paddingLeft: 10
  },
  addNewTextStyle: {
    fontFamily: Constants.Montserrat_Bold,
    color: Constants.Black,
    fontSize: 14
  }
});

export { Styles };