import { Ionicons as Icon } from '@expo/vector-icons';
import React, { Component } from 'react';
import {
    Image,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import Swiper from 'react-native-swiper';

import Utils from './utils'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            days: [
                {
                    key: 0,
                    title: 'A stopwatch',
                    // component: Day1,
                    icon: 'ios-stopwatch',
                    size: 48,
                    color: '#ff856c',
                },
                {
                    key: 1,
                    title: 'A weather app',
                    // component: Day2,
                    icon: 'ios-partly-sunny',
                    size: 60,
                    color: '#90bdc1',
                },
            ],
        };
    }

    _jump2Day(index) {
        this.props.navigator.push({
            title: this.state.days[index].title,
            index: index + 1,
            // component: this.state[index].component,
        });
    }

    render() {
        const components = this.state.days.map((elem, index) => {
            return (
                <TouchableHighlight
                    key={elem.key}
                    style={styles.touchBox}
                    underlayColor="#eee"
                    onPress={() => this._jump2Day(index)}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxText}>Day{index + 1}</Text>
                        <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon, { color: elem.color }]} />
                    </View>
                </TouchableHighlight>
            );
        });
        return (
            <ScrollView style={styles.mainView} title={this.props.title}>
                <Swiper
                    height={150}
                    showsButtons={false}
                    autoplay={true}
                    activeDot={
                        <View
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.8)',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3,
                            }}
                        />
                    }>
                    <TouchableHighlight onPress={() => this._jumpToDay(0)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('./asserts/img/day1.png')} />
                            <Text style={styles.slideText}>Day1: Timer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._jumpToDay(1)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('./asserts/img/day2.png')} />
                            <Text style={styles.slideText}>Day2: Weather</Text>
                        </View>
                    </TouchableHighlight>
                </Swiper>
                <View style={styles.touchBoxContainer}>{components}</View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    mainView: {
        marginTop: 20,
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
        width: Utils.size.width / 3 - 0.33334,
        height: Utils.size.width / 3,
        backgroundColor: '#fff',
    },
    touchBoxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Utils.size.width,
        borderTopWidth: Utils.pixel,
        borderTopColor: '#ccc',
        borderLeftWidth: Utils.pixel,
        borderLeftColor: '#ccc',
        borderRightWidth: Utils.pixel,
        borderRightColor: '#ccc',
    },
    touchBox1: {
        borderBottomWidth: Utils.pixel,
        borderBottomColor: '#ccc',
        borderRightWidth: Utils.pixel,
        borderRightColor: '#ccc',
    },
    touchBox2: {
        borderBottomWidth: Utils.pixel,
        borderBottomColor: '#ccc',
        borderLeftWidth: Utils.pixel,
        borderLeftColor: '#ccc',
    },
    boxContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Utils.size.width / 3,
        height: Utils.size.width / 3,
    },
    boxIcon: {
        position: 'relative',
        top: -10,
    },
    boxText: {
        position: 'absolute',
        bottom: 15,
        width: Utils.size.width / 3,
        textAlign: 'center',
        left: 0,
        backgroundColor: 'transparent',
    },
    slide: {
        flexGrow: 1,
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
        width: Utils.size.width,
        textAlign: 'center',
        fontSize: 12,
    },
    image: {
        width: Utils.size.width,
        flex: 1,
        alignSelf: 'stretch',
    },
});
