import React, { Compopnent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Styles } from './swaadam-navigation-header-style';

const SwaadamNavigationHeader = (props) => {
    return (
        <View style={Styles.navigationHeaderSection}>
            <View style={Styles.navigationHeaderRow}>
                <View style={Styles.chevronLeft}>
                    <Icon size={28} color="black" name="chevron-left"></Icon>
                </View>
                <View>
                    <Text style={Styles.headerText}>{props.headerText}</Text>
                </View>
            </View>
        </View>
    )
}

SwaadamNavigationHeader.propTypes = {
    headerText: PropTypes.string
};

SwaadamNavigationHeader.defaultProps = {
    headerText: ''
}

export default SwaadamNavigationHeader;