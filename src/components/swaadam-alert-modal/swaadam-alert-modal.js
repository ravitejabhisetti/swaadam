import React, { Component } from 'react';
import { View, Text, Alert, Modal, TouchableHighlight } from 'react-native';
import { Styles } from './swaadam-alert-modal-style';
import { SwaadamStartedButton, SwaadamFormButton } from '../swaadam-common-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

class SwaadamAlertModal extends Component {
    constructor(props) {
        super(props);
    }
    handleAlert = () => {
        this.props.hideAlertModal();
    }

    handleAlertContent = () => {
        this.props.hideAlertModal();
    }

    render() {
        let buttonsSection = null;
        if (!this.props.displayButtonSection) {
            buttonsSection = (
                <TouchableHighlight onPress={this.handleAlertContent} style={Styles.alertButtonSection}>
                    <Text style={Styles.alertButtonText}>Cancel</Text>
                </TouchableHighlight>
            )
        }
        return (
            <View style={Styles.modalSection}>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.props.displayAlertModal}
                    onRequestClose={this.handleAlert}
                >
                    <TouchableHighlight onPress={this.handleAlert} activeOpacity={1} style={Styles.alertContainer}>
                        <TouchableHighlight style={Styles.alertContent}>
                            <View>
                                <View style={Styles.alertContentSection}>
                                    <Icon size={24} color="black" name="alert"></Icon>
                                    <Ionicon onPress={this.handleAlertContent} style={Styles.closeIcon} size={24} color="black" name="md-close"></Ionicon>
                                </View>
                                <View style={Styles.alertContentSection}>
                                    <Text style={Styles.alertText}>{this.props.alertText}</Text>
                                </View>
                                <View style={Styles.alertContentSection}>
                                    {buttonsSection}
                                </View>
                            </View>
                        </TouchableHighlight>
                    </TouchableHighlight>
                </Modal>
            </View>
        )
    }
}

export default SwaadamAlertModal;