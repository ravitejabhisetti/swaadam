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
        this.setState({
            inputText: textValue
        })
        this.props.input.onChange(textValue);
    }
    componentDidMount() {
        console.log('dange---', this.props);
        if (this.props.value) {
            this.props.input.value = this.props.value;
        }
        this.setState((state) => {
            return {
                ...state,
                inputText: this.props.input.value,
            }
        })
    }
    render() {
        let { input, ...props } = this.props;
        console.log('props to check---', props);
        return (
            <View style={Styles.inputSection}>
                <View style={Styles.labelTextSection}>
                    <Text style={Styles.labelText}>{props.label}</Text>
                </View>
                <View>
                    <TextInput
                        {...input}
                        keyboardType={props.keyboardType}
                        underlineColorAndroid={Constants.Transparent}
                        style={Styles.textInput}
                        placeholder={props.placeholder}
                        maxLength={props.maxLength}
                        value={this.state.inputText}
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

