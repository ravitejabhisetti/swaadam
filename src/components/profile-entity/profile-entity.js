import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './profile-entity-style';
import EditIcon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIocn from 'react-native-vector-icons/MaterialIcons';

class ProfileEntity extends Component {
    handleProfileEntity(entity) {
        console.log('in handle profile entity---', entity);
        if (entity.iconName === 'edit' || entity.iconName === 'address-book-o' || entity.iconName === 'list-ul') {
            this.props.navigateProfileAction();
        }
    }
    render() {
        let icon = null;
        let navigation = null;
        let entityIconName = this.props.entity.iconName;
        if (entityIconName === 'edit' || entityIconName === 'logout') {
            icon = (
                <EditIcon name={entityIconName} size={14} />
            )
        } else if (entityIconName === 'address-book-o' || entityIconName === 'list-ul') {
            icon = (<AwesomeIcon name={entityIconName} size={14} />);
        } else if (entityIconName === 'attach-money' || entityIconName === 'call' || entityIconName === 'email') {
            icon = (
                <MaterialIocn name={entityIconName} size={14} />
            )
        }
        if (this.props.entity.action === 'navigate') {
            navigation = (
                <EditIcon color="#000000" name="right" size={16} />
            )
        } else if (this.props.entity.action === 'display') {
            navigation = (
                <Text style={Styles.creditsText}>Rs. 0</Text>
            )
        }
        return (
            <TouchableOpacity onPress={() => this.handleProfileEntity(this.props.entity)} style={Styles.profileEntitySection}>
                <View>
                    <View style={Styles.textSection}>
                        <View style={Styles.iconSection}>
                            {icon}
                        </View>
                        <View style={Styles.textSectionBlock}>
                            <Text style={Styles.textEntity}>{this.props.entity.entityName}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    {navigation}
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProfileEntity;