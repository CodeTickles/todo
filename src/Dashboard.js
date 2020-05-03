import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: 'blue',
  },
});
