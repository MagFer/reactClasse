import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import Header from '../Component/header';
import Tabbar from '../Component/tabbar';
import NewCell from '../Cell/newCell';
import FilterCell from '../Cell/filterCell';
import _ from 'underscore';

export default class SettingsSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("News", this.news);
    const navigator = this.props.navigator;
    
    return (
      <View style={styles.container}>
        <Header title={"Settings"}/>
        <ScrollView style={styles.content}>
            <Text>Soy herramienta muy sexy 🛠🍑</Text>
            <Text>Soy herramienta muy sexy 🛠🍑</Text>
            <Text>Soy herramienta muy sexy 🛠🍑</Text>
            <Text>Soy herramienta muy sexy 🛠🍑</Text>
            <Text>Soy herramienta muy sexy 🛠🍑</Text>
        </ScrollView>
        <Tabbar navigator={navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollViewFilters: {
    backgroundColor: 'yellow',
    height: 160,
  }
});
