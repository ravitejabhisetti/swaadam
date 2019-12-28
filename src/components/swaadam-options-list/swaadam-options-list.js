import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './swaadam-options-list-style';
import * as Constants from '../../common/swaadam-constants';
import { SwaadamOption } from '../swaadam-common-components';

class SwaadamOptionsList extends Component {
    render() {
        let optionsList = Constants.optionsList.map((option, index) => {
            return (
                <SwaadamOption
                    horizontal={true}
                    key={index}
                    option={option}
                >
                </SwaadamOption>
            )
        });
        return (
            <View style={Styles.optionsList}>
                    {optionsList}
            </View>
        )
    }
}

export default SwaadamOptionsList;