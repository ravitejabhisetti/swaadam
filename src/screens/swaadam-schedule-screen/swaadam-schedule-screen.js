import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Constants from '../../common/swaadam-constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Styles } from '../swaadam-cart-screen/swaadam-cart-screen-style';
import { CardScheduleEntity } from '../../components/swaadam-common-components';

class SwaadamScheduleScreen extends Component {
    render() {
        let scheduledList = Constants.EntitiesList.map((entity, index) => {
            return (
                <CardScheduleEntity
                    key={index}
                    entityDescription={entity.scheduleDescription}
                    entityName={entity.name} />
            )
        });
        return (
            <View>
                {/* <Text>swaadam cart screen</Text> */}
                <View style={Styles.cartHeader}>
                    <Icon name="schedule" size={30} />
                </View>
                <ScrollView>
                    {scheduledList}
                </ScrollView>
            </View>
        );
    }
}

export default SwaadamScheduleScreen;