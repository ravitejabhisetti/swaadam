import React, { Component } from 'react';
import { View, Text, Alert, Modal, TouchableHighlight } from 'react-native';
import { Styles } from './swaadam-alert-modal-style';
import { SwaadamStartedButton } from '../swaadam-common-components';

class SwaadamAlertModal extends Component {
    constructor(props) {
        super(props);
    }
    handleBackPress = () => {
        this.props.hideAlertModal();
    }

    render() {
        return (
            <View style={Styles.modalSection}>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.props.displayAlertModal}
                    onRequestClose={this.handleBackPress}
                >
                    <TouchableHighlight onPress={this.handleBackPress} activeOpacity={1} style={Styles.alertContainer}>
                        <View style={Styles.alertContent}>
                            {onC}
                            <Text>check new modal</Text>
                        </View>
                    </TouchableHighlight>
                </Modal>
            </View>
        )
    }
}

export default SwaadamAlertModal;