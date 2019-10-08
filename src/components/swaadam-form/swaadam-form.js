import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { SwaadamInput, SwaadamFormButton } from '../swaadam-common-components';
import * as Constants from '../../common/swaadam-constants';
import { Styles } from './swaadam-form-style';

class SwaadamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formEntries: [],
            displayActivityIndicator: false
        }
    }
    componentDidMount() {
        this.setState((state) => {
            return {
                ...state,
                formEntries: this.props.formItems
            }
        })
    }
    handleFormSubmit() {
        this.setState((state) => {
            return {
                ...state,
                displayActivityIndicator: true
            }
        })
        // this.props.handleFormSubmit();
    }
    render() {
        let { handleSubmit, ...props } = this.props;
        let formItems = (props.formItems.map((item, key) => {
            if (item.type === Constants.Form_Item_Type_Text_Box) {
                return <Field
                    component={SwaadamInput}
                    key={key}
                    name={item.fieldName}
                    label={item.label}
                    placeholder={item.placeholder}
                    keyboardType={item.keyboardType}
                    maxLength={item.maxLength}
                />
            }
        }));
        return (
            <View style={Styles.formSection}>
                <Text style={Styles.formTitle}>{props.formNameToDisplay}</Text>
                {formItems}
                <View style={Styles.formSubmitSection}>
                    <SwaadamFormButton
                        formSubmit={() => this.handleFormSubmit()}
                        displayActivityIndicator={this.state.displayActivityIndicator}
                        formButtonTitle={props.formButtonTitle} />
                </View>
            </View>
        )
    }
}

SwaadamForm.propTypes = {
    form: PropTypes.string,
    formButtonTitle: PropTypes.string,
    formItems: PropTypes.array,
    formNameToDisplay: PropTypes.string
}

SwaadamForm.defaultProps = {
    form: '',
    formButtonTitle: '',
    formItems: [],
    formNameToDisplay: ''
}

export default reduxForm()(SwaadamForm);