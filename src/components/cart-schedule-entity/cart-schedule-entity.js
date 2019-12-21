import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './cart-schedule-entity-style';

// class CardScheduleEntity extends Component {
const CardScheduleEntity = (props) => {
    return (
        <View style={Styles.entitySection}>
            <View style={Styles.nameSection}>
                <Text style={Styles.entityName}>{props.entityName}</Text>
            </View>
            <View style={Styles.descriptionSection}>
                <Text style={Styles.entityDescription}>{props.entityDescription}</Text>
            </View>
        </View>
    )
}

export default CardScheduleEntity;