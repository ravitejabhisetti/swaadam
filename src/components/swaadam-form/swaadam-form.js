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
            formEntries: []
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
        this.props.handleFormSubmit(this.props.formItems);
    }
    updateFieldValue(key, value, fieldName) {
        this.props.formItems[key].value = value;
    }
    render() {
        let { handleSubmit, ...props } = this.props;
        let formItems = (props.formItems && props.formItems.map((item, key) => {
            if (item.type === Constants.Form_Item_Type_Text_Box) {
                console.log('item to check---', item);
                return <Field
                    component={SwaadamInput}
                    key={key}
                    name={item.fieldName}
                    label={item.label}
                    placeholder={item.placeholder}
                    keyboardType={item.keyboardType}
                    maxLength={item.maxLength}
                    props={{
                        value: item.value
                    }}
                    onChange={(value) => this.updateFieldValue(key, value, item.fieldName)}
                />
            }
        }));
        return (
            <View style={Styles.formSection}>
                <Text style={[props.formNameToDisplay !== '' ? Styles.formTitle : Styles.addAddressForm]}>{props.formNameToDisplay}</Text>
                {formItems}
                <View style={[props.formButtonTitle !== 'Save' ? Styles.formSubmitSection : Styles.addAddressFormSubmit]}>
                    <SwaadamFormButton
                        formSubmit={() => this.handleFormSubmit()}
                        underlayColor={Constants.Form_Button_Underlay_Color}
                        displayActivityIndicator={props.displayActivityIndicator}
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
    formNameToDisplay: PropTypes.string,
    handleFormSubmit: PropTypes.func
}

SwaadamForm.defaultProps = {
    form: '',
    formButtonTitle: '',
    formItems: [],
    formNameToDisplay: ''
}

export default reduxForm()(SwaadamForm);