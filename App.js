/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Button, TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Day1 from './30-days-view/day1';
import Day2 from './30-days-view/day2';
import Day3 from './30-days-view/day3';
import Day5 from './30-days-view/day5';
import Day7 from './30-days-view/day7';
import Util from './30-days-view/utils';
const days = [
  {
    key: 0,
    name: 'Day1',
    title: 'A stopwatch',
    component: Day1,
    isFA: false,
    icon: 'ios-stopwatch',
    size: 48,
    color: '#ff856c',
    hideNav: false,
  },
  {
    key: 1,
    name: 'Day2',
    title: 'A weather app',
    component: Day2,
    isFA: false,
    icon: 'ios-partly-sunny',
    size: 60,
    color: '#90bdc1',
    hideNav: true,
  },
  {
    key: 2,
    name: 'Day3',
    title: 'twitter',
    component: Day3,
    isFA: true,
    icon: 'twitter',
    size: 50,
    color: '#FF9A05',
    hideNav: false,
  },
  {
    key: 3,
    name: 'Day5',
    title: 'find my location',
    component: Day5,
    isFA: false,
    icon: 'md-pin',
    size: 50,
    color: '#00D204',
    hideNav: false,
  },
  {
    key: 6,
    name: 'Day7',
    title: 'Moveable Circle',
    component: Day7,
    isFA: false,
    icon: 'ios-baseball',
    size: 50,
    color: '#5e2a06',
    hideNav: true,
  },
];
function IndexScreen({navigation}) {
  const boxs = days.map(function (elem, index) {
    return (
      <TouchableHighlight
        key={elem.key}
        style={[
          styles.touchBox,
          index % 3 == 2 ? styles.touchBox2 : styles.touchBox1,
        ]}
        underlayColor="#eee"
        onPress={() => navigation.navigate(elem.name)}>
        <View style={styles.boxContainer}>
          <Text style={styles.boxText}>{elem.name}</Text>
          {elem.isFA ? (
            <IconFA
              size={elem.size}
              name={elem.icon}
              style={[styles.boxIcon, {color: elem.color}]}
            />
          ) : (
            <Icon
              size={elem.size}
              name={elem.icon}
              style={[styles.boxIcon, {color: elem.color}]}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  });
  return <View style={styles.container}>{boxs}</View>;
}
function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Index"
        component={IndexScreen}
        options={{headerShown: false}}
      />
      {days.map(elem => {
        <MainStack.Screen name={elem.name} component={elem.component} />;
      })}
      <MainStack.Screen name="Day1" component={Day1} />
      <MainStack.Screen
        name="Day2"
        component={Day2}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Day3"
        component={Day3}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="Day5" component={Day5} />
      <MainStack.Screen
        name="Day7"
        component={Day7}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="Video" component={Home} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}
const SimpleApp = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Util.size.width,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainView: {
    marginTop: 55,
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: '#555',
  },
  itemWrapper: {
    backgroundColor: '#f3f3f3',
  },
  touchBox: {
    width: Util.size.width / 3 - 0.33334,
    height: Util.size.width / 3,
    backgroundColor: '#fff',
  },
  touchBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor: '#ccc',
    borderLeftWidth: Util.pixel,
    borderLeftColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc',
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc',
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderLeftWidth: Util.pixel,
    borderLeftColor: '#ccc',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Util.size.width / 3,
    height: Util.size.width / 3,
  },
  boxIcon: {
    position: 'relative',
    top: -10,
  },
  boxText: {
    position: 'absolute',
    bottom: 15,
    width: Util.size.width / 3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent',
  },
  slide: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: Util.size.width,
    textAlign: 'center',
    fontSize: 12,
  },
  image: {
    width: Util.size.width,
    height: 80,
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
});

export default SimpleApp;
