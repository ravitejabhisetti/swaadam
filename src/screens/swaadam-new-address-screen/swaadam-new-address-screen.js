import React, { Component } from 'react';
import { View, Text, ScrollView, Keyboard, AsyncStorage } from 'react-native';
import { Styles } from './swaadam-new-address-screen-style';
import * as Constants from '../../common/swaadam-constants';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { validateAddNewAddressForm } from '../../common/validations';
import { SwaadamLocationEntity, SwaadamNavigationHeader, SwaadamForm, SwaadamAlertModal } from '../../components/swaadam-common-components';
import { addUserLocation, updateUserLocations } from '../../store/actions/actions';

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
        alertModalAlertText: '',
        formDetails: null,
        newAddress: true,
        addressIndex: null
    }

    handleBackAction() {
        this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
    }
    componentDidMount() {
        console.log('current location is---', this.props.userCurrentLocation);
        const newAddress = this.props.navigation.getParam('newAddress');
        const locationDetails = this.props.navigation.getParam('locationDetails');
        const addressIndex = this.props.navigation.getParam('addressIndex');
        const tmpForm = JSON.parse(JSON.stringify(Constants.Swaadam_New_Address_Form));
        if (locationDetails) {
            console.log('location details---', locationDetails);
            console.log('form check---', this.state.formDetails);
            tmpForm[0].value = locationDetails.userLocationDetails.locationAddress
            tmpForm[1].value = locationDetails.userLocationDetails.locationName;
            console.log('tmp form---', tmpForm);
        }
        this.setState((state) => {
            return {
                ...state,
                region: !newAddress ? locationDetails.userLocation : this.props.userCurrentLocation,
                formDetails: !newAddress ? tmpForm : Constants.Swaadam_New_Address_Form,
                newAddress: newAddress,
                addressIndex: addressIndex
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
            this.props.addNewAddress(this.state.region, formValues, this.props.userDetails, this.state.newAddress, this.state.addressIndex).catch((error) => {
                if (error) {
                    this.handleButtonSubmit(false);
                }
            }).then(locationResponse => locationResponse.json()).then((response) => {
                this.handleButtonSubmit(false);
                console.log('location response to check---', response);
                this.props.navigation.navigate(Constants.Logged_In_Location_Screen);
                AsyncStorage.setItem(Constants.User_Details, JSON.stringify(response));
                this.props.updateUserLocations(response.locations);
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
                                formItems={this.state.formDetails}
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
        userDetails: state.userDetails.userDetails,
        userLocations: state.userDetails.locations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAddress: (location, locationDetails, userDetails, newAddress, addressIndex) => dispatch(addUserLocation(location, locationDetails, userDetails, newAddress, addressIndex)),
        updateUserLocations: (locations) => dispatch(updateUserLocations(locations))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwaadamNewAddressScreen);