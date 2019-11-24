import React, { Component } from 'react';
import { View, Text, ScrollView, Keyboard } from 'react-native';
import { Styles } from './swaadam-new-address-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { validateAddNewAddressForm } from '../../common/validations';
import { SwaadamLocationEntity, SwaadamNavigationHeader, SwaadamForm, SwaadamAlertModal } from '../../components/swaadam-common-components';
import { addUserLocation } from '../../store/actions/actions';

class SwaadamNewAddressScreen extends Component {
    state = {
        region: {
            latitude: 12.9853315,
            longitude: 77.7558125,
            latitudeDelta: 0,
            longitudeDelta: 0
        },
        displayActivityIndicator: false,
        displayAlertModal: false,
        alertModalAlertText: ''
    }

    handleBackAction() {
        this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
    }
    componentDidMount() {
        console.log('current location is---', this.props.userCurrentLocation);
        this.setState((state) => {
            return {
                ...state,
                region: this.props.userCurrentLocation
            }
        })
    }
    onRegionChange(region) {
        console.log('region to change---', region);
        this.setState((state) => {
            return {
                ...state,
                region: region
            }
        });
    }
    handleFormSubmit(formValues) {
        console.log('location values to check---', this.state.region);
        let validationError = null;
        this.handleButtonSubmit(true);
        Keyboard.dismiss();
        console.log('values to check---', formValues);
        validationError = validateAddNewAddressForm(formValues);
        if (!validationError) {
            // this.handleButtonSubmit(false);
            this.props.addNewAddress(this.state.region, formValues, this.props.userDetails).catch((error) => {
                if (error) {
                    this.handleButtonSubmit(false);
                }
            }).then(locationResponse => locationResponse.json()).then((response) => {
                this.handleButtonSubmit(false);
                console.log('location response to check---', response);
                this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
            })
        } else {
            console.log('in else check---', validationError);
            this.handleButtonSubmit(false);
            this.handleAlertModal(true, validationError);
        }
    }
    handleButtonSubmit(display) {
        this.setState((state) => {
            return {
                ...state,
                displayActivityIndicator: display
            }
        });
    }
    handleAlertModal(display, alertModalText) {
        this.setState((state) => {
            return {
                ...state,
                displayAlertModal: display,
                alertModalAlertText: display ? alertModalText : ''
            }
        })
    }
    render() {
        let alertModal = null;
        if (this.state.displayAlertModal) {
            alertModal = (
                <SwaadamAlertModal
                    displayButtonSection={false}
                    alertText={this.state.alertModalAlertText}
                    hideAlertModal={() => this.handleAlertModal(false)}
                    displayAlertModal={this.state.displayAlertModal}
                />
            )
        }
        return (
            <View style={Styles.newAddressSection}>
                {alertModal}
                <View style={Styles.navigationSection}>
                    <SwaadamNavigationHeader
                        headerText="New Address"
                        handleBackNavigation={() => this.handleBackAction()}
                    >
                    </SwaadamNavigationHeader>
                </View>
                <View style={Styles.newAddressMainSection}>
                    <ScrollView keyboardShouldPersistTaps='handled' style={Styles.addressForm}>
                        <View style={Styles.newsRow}>
                            <View style={Styles.newContent}>
                                <Icon size={24} name="location-on" color={Constants.Black}></Icon>
                            </View>
                            <View style={[Styles.newContent, Styles.addNewText]}>
                                <Text style={Styles.addNewTextStyle}>Current Address</Text>
                            </View>
                        </View>
                        <SwaadamLocationEntity
                            region={this.state.region}
                            onRegionChange={(region) => this.onRegionChange(region)}
                        >
                        </SwaadamLocationEntity>
                        <View style={Styles.formSection}>
                            <SwaadamForm
                                handleFormSubmit={(values) => this.handleFormSubmit(values)}
                                formNameToDisplay=""
                                form={Constants.Swaadam_New_Address_Form_Name}
                                formItems={Constants.Swaadam_New_Address_Form}
                                formButtonTitle={Constants.Address_Save}
                                displayActivityIndicator={this.state.displayActivityIndicator}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userCurrentLocation: state.userLocations.userCurrentLocation,
        userDetails: state.userDetails.userDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAddress: (location, locationDetails, userDetails) => dispatch(addUserLocation(location, locationDetails, userDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwaadamNewAddressScreen);