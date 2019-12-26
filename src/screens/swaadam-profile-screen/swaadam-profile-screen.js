import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './swaadam-profile-screen-style';
import { connect } from 'react-redux';
import { ProfileEntity, SwaadamAlertModal } from '../../components/swaadam-common-components';
import * as Constants from '../../common/swaadam-constants';

class SwaadamProfileScreen extends Component {
    state = {
        displayAlertModal: false
    }
    handleProfileEntity(entity) {
        console.log('profile entity checkk----', entity);
        if (entity.iconName === 'edit') {
            this.handleAlertModal(false);
            this.props.navigation.navigate(Constants.User_Update_Details_Screen, {
                newForm: false
            });
        } else if (entity.iconName === 'address-book-o') {
            this.handleAlertModal(false);
            this.props.navigation.navigate(Constants.Logged_In_Location_Screen, {
                parent: false
            });
        } else if (entity.iconName === 'logout') {
            console.log('in logout check---');
            this.handleAlertModal(true);
        }
    }

    handleAlertModal(displayModal) {
        this.setState((state) => {
            return {
                ...state,
                displayAlertModal: displayModal
            }
        })
    }
    render() {
        let alertModal = null;
        if (this.state.displayAlertModal) {
            alertModal = (
                <SwaadamAlertModal
                    displayButtonSection={true}
                    alertText={Constants.Logout_Text}
                    hideAlertModal={() => this.handleAlertModal(false)}
                    displayAlertModal={this.state.displayAlertModal}
                />
            )
        }
        let profileEntitesList = Constants.profileEntitiesList.map((entity, index) => {
            return (
                <ProfileEntity
                    key={index}
                    entity={entity}
                    navigateProfileAction={() => this.handleProfileEntity(entity)}
                />
            )
        });
        return (
            <View>
                {alertModal}
                <View style={Styles.profileHeader}>
                    <View>
                        <Text style={Styles.userName}>{this.props.name}</Text>
                        <Text style={Styles.profileText}>{this.props.userDetails.mobileNumber}</Text>
                        <Text style={Styles.profileText}>{this.props.email}</Text>
                    </View>
                    <View style={Styles.nameIconSection}>
                        <Text style={Styles.iconName}>{this.props.userDetails.name.charAt(0).toUpperCase()}</Text>
                    </View>
                </View>
                <ScrollView>
                    {profileEntitesList}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails.userDetails,
        name: state.userDetails.userDetails.name,
        email: state.userDetails.userDetails.email
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         //
//     }
// }

export default connect(mapStateToProps, null)(SwaadamProfileScreen);