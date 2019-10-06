import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SwaadamForm, SwaadamNavigationHeader } from '../../components/swaadam-common-components';
import { Styles } from './swaadam-sign-in-screen-style';
import * as Constants from '../../common/swaadam-constants';

const SwaadamSignInScreen = (props) => {
    return (
        <View style={Styles.signInSection}>
            <SwaadamNavigationHeader />
            <ScrollView>
                <View style={Styles.signInFormSection}>
                    <SwaadamForm
                        form={Constants.Swaadam_SignIn_Form_Name}
                        formItems={Constants.Swaadam_SignIn_Form}
                        formButtonTitle={Constants.Swaadam_SignIn_Submit_Button}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default SwaadamSignInScreen;