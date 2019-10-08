import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Styles } from './swaadam-form-button-style';
import * as Constants from '../../common/swaadam-constants';
import PropTypes from 'prop-types';

const SwaadamFormButton = (props) => {
    let formButtonContent = null;
    if (!props.displayActivityIndicator) {
        formButtonContent = (
            <Text style={Styles.formButtonText}>{props.formButtonTitle}</Text>
        )
    } else {
        formButtonContent = (
            <ActivityIndicator size="small" color="black" />
        )
    }
    return (
        <TouchableHighlight onPress={props.formSubmit} underlayColor={Constants.Form_Button_Underlay_Color} style={Styles.formButtonSection}>
            {formButtonContent}
        </TouchableHighlight>
    )
}

SwaadamFormButton.propTypes = {
    formButtonTitle: PropTypes.string,
    displayActivityIndicator: PropTypes.bool
}

SwaadamFormButton.defaultProps = {
    formButtonTitle: '',
    displayActivityIndicator: false
}

export default SwaadamFormButton;