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
    handleChangeText = (textValue) => {
        this.props.input.onChange(textValue);
    }
    render() {
        let { ...props } = this.props;
        return (
            <View>
                <View style={Styles.labelTextSection}>
                    <Text style={Styles.labelText}>{props.label}</Text>
                </View>
                <View>
                    <TextInput
                        keyboardType={props.keyboardType}
                        underlineColorAndroid={Constants.Transparent}
                        style={Styles.textInput}
                        placeholder={props.placeholder}
                        maxLength={props.maxLength}
                        onChangeText={(value) => this.handleChangeText(value)}
                        keyboardShouldPersistTaps="never"
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
    maxLength: PropTypes.number
}

SwaadamInput.defaultProps = {
    label: '',
    placeholder: '',
    keyboardType: '',
    maxLength: ''
}

export default SwaadamInput;

