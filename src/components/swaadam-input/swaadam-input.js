import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from './swaadam-input-style';
import PropTypes from 'prop-types';
import * as Constants from '../../common/swaadam-constants';

class SwaadamInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }
    render() {
        let { ...props } = this.props;
        return (
            <View>
                <Text style={Styles.labelText}>{props.label}</Text>
                <View style={Styles.textBoxSection}>
                    <TextInput
                        keyboardType={props.keyboardType}
                        underlineColorAndroid={Constants.Transparent}
                        style={Styles.textInput}
                        placeholder={props.placeholder}
                        maxLength={props.maxLength}
                    />
                </View>
            </View>
        )
    }
}

SwaadamInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.string
}

SwaadamInput.defaultProps = {
    label: '',
    placeholder: '',
    keyboardType: '',
    maxLength: ''
}

export default SwaadamInput;

