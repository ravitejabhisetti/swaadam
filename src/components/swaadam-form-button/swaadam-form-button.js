import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Styles } from './swaadam-form-button-style';
import * as Constants from '../../common/swaadam-constants';
import PropTypes from 'prop-types';

const SwaadamFormButton = (props) => {
    return (
        <TouchableHighlight underlayColor={Constants.Form_Button_Underlay_Color} style={Styles.formButtonSection}>
            <Text style={Styles.formButtonText}>{props.formButtonTitle}</Text>
        </TouchableHighlight>
    )
}

SwaadamFormButton.propTypes = {
    formButtonTitle: PropTypes.string
}

SwaadamFormButton.defaultProps = {
    formButtonTitle: ''
}

export default SwaadamFormButton;