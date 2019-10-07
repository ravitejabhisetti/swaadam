import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SwaadamForm, SwaadamNavigationHeader } from '../../components/swaadam-common-components';
import { Styles } from './swaadam-sign-in-screen-style';
import * as Constants from '../../common/swaadam-constants';

class SwaadamSignInScreen extends Component {
    constructor(props) {
        super(props);
    }
    handleBackAction = () => {
        this.props.navigation.navigate(Constants.Explore_Screen);
    }
    render() {
        return (
            <View style={Styles.signInSection}>
                <SwaadamNavigationHeader handleBackNavigation={() => this.handleBackAction()} />
                <ScrollView>
                    <View style={Styles.signInFormSection}>
                        <SwaadamForm
                            formNameToDisplay={Constants.Sign_In_Form}
                            form={Constants.Swaadam_SignIn_Form_Name}
                            formItems={Constants.Swaadam_SignIn_Form}
                            formButtonTitle={Constants.Swaadam_SignIn_Submit_Button}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
};

export default SwaadamSignInScreen;