import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CardScheduleEntity } from '../../components/swaadam-common-components';
import * as Constants from '../../common/swaadam-constants';
import Icon from 'react-native-vector-icons/AntDesign';
import { Styles } from './swaadam-cart-screen-style';

class SwaadamCartScreen extends Component {
    render() {
        let cartsList = Constants.EntitiesList.map((entity, index) => {
            return (
                <CardScheduleEntity
                    key={index}
                    entityDescription={entity.cartDescription}
                    entityName={entity.name} />
            )
        });
        return (
            <View>
                {/* <Text>swaadam cart screen</Text> */}
                <View style={Styles.cartHeader}>
                    <Icon name="shoppingcart" size={30} />
                </View>
                <ScrollView>
                    {cartsList}
                </ScrollView>
            </View>
        );
    }
}

export default SwaadamCartScreen;