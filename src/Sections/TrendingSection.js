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

export default class TrendingSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const navigator = this.props.navigator;
    console.log("News", this.news);
    return (
      <View style={styles.container}>
        <Header title={"Trending"}/>
        <ScrollView style={styles.content}>
            <Text>Soy una bici muy sexy 🚲🍑</Text>
            <Text>Soy una bici muy sexy 🚲🍑</Text>
            <Text>Soy una bici muy sexy 🚲🍑</Text>
            <Text>Soy una bici muy sexy 🚲🍑</Text>

            
        </ScrollView>
        <Tabbar navigator={navigator}/>
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
