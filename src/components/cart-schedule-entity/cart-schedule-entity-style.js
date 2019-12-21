import { StyleSheet } from 'react-native';
import * as Constants from '../../common/swaadam-constants';

const Styles = StyleSheet.create({
   entitySection: {
       marginLeft: 10,
       marginRight: 10,
       marginTop: 20
   },
   entityName: {
       color: Constants.Black,
       fontSize: 16,
       fontFamily: Constants.Montserrat_Bold,
       paddingBottom: 6
   },
   descriptionSection: {
       height: 40,
       backgroundColor: '#E8ECF5',
       borderRadius: 12
   },
   entityDescription: {
       color: '#C3C5D0',
       fontFamily: Constants.Montserrat_Regular,
       fontSize: 12,
       paddingTop: 12,
       paddingLeft: 10,
       flex: 1,
       justifyContent: Constants.Center,
       alignItems: Constants.Center
   }
});

export { Styles };