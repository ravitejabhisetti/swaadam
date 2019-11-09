import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Styles } from './swaadam-explore-screen-style';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Constants from '../../common/swaadam-constants';
import { getLocations } from '../../store/actions/actions';
import { connect } from 'react-redux';

class SwaadamExploreScreen extends Component {
    handleLocation = () => {
        this.props.navigation.navigate('loggedInLocationScreen');
    }

    render() {
        return (
            <ScrollView>
                <View style={Styles.locationSection}>
                    <View style={Styles.locationLabel}>
                        <Text style={Styles.locationText}>Location</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.handleLocation()} activeOpacity={1} style={Styles.locationName}>
                        <View>
                            <Text style={Styles.locationSelected}>Home</Text>
                        </View>
                        <View style={Styles.arrowDown}>
                            <Icon name="ios-arrow-down" color="black" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails.userDetails
    }
}

export default connect(mapStateToProps, null)(SwaadamExploreScreen);