import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Styles } from './swaadam-location-entity-style';

class SwaadamLocationEntity extends Component {
    onRegionChange = (region) => {
        this.props.onRegionChange(region);
    }
    render() {
        return (
            <View style={Styles.container}>
                <MapView
                    style={Styles.map}
                    initialRegion={this.props.region}
                    onRegionChange={(region) => this.onRegionChange(region)}
                >
                    <Marker draggable
                        coordinate={this.props.region}
                    // onDragEnd={(e) => this.onRegionChange(e)}
                    />
                </MapView>
            </View>
        )
    }
}

export default SwaadamLocationEntity;