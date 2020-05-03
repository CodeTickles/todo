import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const NaviTab = ({setActiveTab, activeTab}) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tabBtn}
        onPress={() => {
          setActiveTab('today');
        }}>
        <Text
          style={[
            styles.tabTxt,
            {color: activeTab == 'today' ? 'blue' : 'grey'},
          ]}>
          TODAY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabBtn}
        onPress={() => {
          setActiveTab('tomorrow');
        }}>
        <Text
          style={[
            styles.tabTxt,
            {color: activeTab == 'tomorrow' ? 'blue' : 'grey'},
          ]}>
          TOMMOROW
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabBtn}
        onPress={() => {
          setActiveTab('week');
        }}>
        <Text
          style={[
            styles.tabTxt,
            {color: activeTab == 'week' ? 'blue' : 'grey'},
          ]}>
          THIS WEEK
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabTxt: {
    transform: [{rotate: '-90deg'}, {translateX: -140 / 2}, {translateY: 30}],
    fontSize: 20,
  },
  tabBtn: {
    height: 150,
    // backgroundColor: 'blue',
    marginVertical: 10,
  },
  tabContainer: {
    position: 'absolute',
    top: windowHeight - 720,
    left: -60,
  },
});
