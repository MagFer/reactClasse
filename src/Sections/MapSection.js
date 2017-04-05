import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import NewCell from '../Cell/NewCell';
import FilterCell from '../Cell/FilterCell';
import _ from 'underscore';

export default class MapSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("News", this.news);
    const navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        <Header title={"Map"} />
        <ScrollView style={styles.scrollView}>
          <Text>Soy herramienta muy sexy 🛠🍑</Text>
          <Text>Soy herramienta muy sexy 🛠🍑</Text>
          <Text>Soy herramienta muy sexy 🛠🍑</Text>
          <Text>Soy herramienta muy sexy 🛠🍑</Text>
          <Text>Soy herramienta muy sexy 🛠🍑</Text>
          <Text>Soy herramienta ULTR sexy 🛠🍑</Text>

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
  scrollView: {
    flex: 1,
    backgroundColor: 'orange',
  },
  map: {
    flex: 1,
    backgroundColor: 'green',
  }
});
