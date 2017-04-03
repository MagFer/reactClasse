import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
} from 'react-native';

import Header from '../Component/header';
import Tabbar from '../Component/tabbar';
import NewCell from '../Cell/newCell';
import FilterCell from '../Cell/filterCell';
import _ from 'underscore';

export default class NewsSection extends Component {

    constructor(props) {
        super(props);


        this.filterContent = [
            { id: 1, title: "Around you", image: require("../assets/compass.png") },
            { id: 2, title: "Top News", image: require("../assets/star.png") },
            { id: 3, title: "Sports News", image: require("../assets/bike.png") },
        ];

        this.filters = [];
        for (var filterNumber = 0; filterNumber < this.filterContent.length; filterNumber++) {
            this.filters.push(<FilterCell key={this.filterContent[filterNumber].id}
                title={this.filterContent[filterNumber].title}
                img={this.filterContent[filterNumber].image} />);
        }

        this.newsContent = [
            { id: 1, title: "World Happines Report", description: "18k people talking about this", categoryId: 1},
            { id: 2, title: "Stephen Hawking", description: "120k people talking about this", categoryId: 1},
            { id: 3, title: "Samsung", description: "1M people talking about this", categoryId: 2},
            { id: 4, title: "Cristiano Ronaldo", description: "510k people talking about this", categoryId: 3},
            { id: 5, title: "Xiaomi", description: "120k people talking about this", categoryId: 1},
        ];

        this.news = [];
        for (var newNumber = 0; newNumber < this.newsContent.length; newNumber++) {
            this.news.push(<NewCell key={this.newsContent[newNumber].id}
                title={this.newsContent[newNumber].title}
                description={this.newsContent[newNumber].description} />);
        }

        this.state = {
            newsContentState: this.newsContent,
        }
        console.log("end constructor");

    }

    render() {
        console.log("News", this.news);
        const navigator = this.props.navigator;

        return (
            <View style={styles.container}>
                <Header title={"News"}/>
                <ScrollView style={styles.content}>
                    <ScrollView horizontal style={styles.scrollViewFilters}>
                        {
                            _.map(this.filterContent, function showFilterElement(filterContentItem) {
                                return <FilterCell key={filterContentItem.id}
                                    title={filterContentItem.title}
                                    img={filterContentItem.image} />
                            })
                        }
                    </ScrollView>
                    {
                        _.map(this.newsContent, (newContentItem) => {
                            return <NewCell key={newContentItem.id}
                                title={newContentItem.title}
                                description={newContentItem.description} />
                        })
                    }
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
