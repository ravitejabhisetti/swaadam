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
                        underlineColorAndroid={Constants.Transparent}
                        style={Styles.textInput}
                        placeholder={props.placeholder}
                    />
                </View>
            </View>
        )
    }
}

SwaadamInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}

SwaadamInput.defaultProps = {
    label: '',
    placeholder: ''
}

export default SwaadamInput;

