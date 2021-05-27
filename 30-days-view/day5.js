/**
 * Day 5
 * find my location
 */
import React, {Component} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {MapView} from 'react-native-amap3d';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      showGeo: false,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle(0);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          locationEnabled
          onLocation={({nativeEvent}) => console.log(`${nativeEvent}`)}>
          <MapView.Marker
            draggable
            title="这是一个可拖拽的标记"
            onDragEnd={({nativeEvent}) =>
              console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)
            }
            coordinate={{
              latitude: 39.91095,
              longitude: 116.37296,
            }}
          />
        </MapView>
        <TouchableHighlight underlayColor="#00bd03" style={styles.btn}>
          <Text style={styles.btnText}>
            <Icon size={18} name="md-navigate">
              {' '}
            </Icon>{' '}
            Find my location
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  map: {
    width: Util.size.width,
    height: Util.size.height - 120,
  },
  btn: {
    backgroundColor: '#00a803',
    width: Util.size.width - 80,
    height: 40,
    borderWidth: Util.pixel,
    borderColor: '#009302',
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
});
