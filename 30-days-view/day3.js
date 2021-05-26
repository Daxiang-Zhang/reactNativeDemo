/**
 * Day 3
 * twitter entrance animation
 */
import React, {Component, useEffect} from 'react';
import {
  Platform,
  Animated,
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import FacebookTabBar from './FaceBookTableBar';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Entrance extends Component {
  constructor() {
    super();
    this.state = {
      transformAnim: new Animated.Value(1),
      opacityAnim: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.transformAnim, {
      toValue: 50,
      duration: 1200,
      delay: 2000,
      easing: Easing.elastic(2),
    }).start();
    Animated.timing(this.state.opacityAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.elastic(1),
      delay: 2200,
    }).start();
    setTimeout(() => {
      this.props.hideThis();
    }, 3300);
  }

  render() {
    return (
      <Animated.View
        style={[styles.entrance, {opacity: this.state.opacityAnim}]}>
        <AnimatedIcon
          size={60}
          style={[
            styles.twitter,
            {transform: [{scale: this.state.transformAnim}]},
          ]}
          name="logo-twitter"
        />
      </Animated.View>
    );
  }
}

export default class extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle(0);
    }
  }

  _hideEntrance() {
    this.setState({
      show: false,
    });
  }

  render() {
    let entrance = this.state.show ? (
      <Entrance hideThis={() => this._hideEntrance()} />
    ) : (
      <View />
    );
    return (
      <View style={styles.twitterContainer}>
        <View style={styles.navBg} />
        <View style={styles.navAndroid}>
          <View style={styles.logoContainer}>
            <Icon name="logo-twitter" color="#fff" size={27} />
            <Text style={styles.title}>{this.state.title}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="ios-search" color="#fff" size={25} />
            <Icon name="ios-create-outline" color="#fff" size={25} />
          </View>
        </View>
        <ScrollableTabView renderTabBar={() => <FacebookTabBar />}>
          <ScrollView tabLabel="eye" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-people" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="mail" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-list" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
        {entrance}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#fff',
  },
  twitterContainer: {
    width: Util.size.width,
    height: Util.size.height,
  },
  entrance: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor: '#1b95e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  twitter: {
    color: '#fff',
    position: 'relative',
    top: -20,
    textAlign: 'center',
  },
  nav: {
    flexDirection: 'row',
    paddingTop: 30,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  navLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  navMid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  twitterPostContainer: {
    width: Util.size.width,
    height: Util.size.height - 90,
    position: 'relative',
    top: -20,
  },
  navAndroid: {
    backgroundColor: '#3195d7',
    width: Util.size.width,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#111',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 35,
  },
  img: {
    width: 375,
    height: 550,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  tabView: {
    flex: 1,
    height: 500,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
});
