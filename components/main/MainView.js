import { Ionicons as Icon } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Swiper from 'react-native-swiper';

import Utils from '../utils';

export default class MainView extends Component {
    static navigationOptions = {
        title: 'RN Showcases',
    };
    constructor() {
        super();
        this.state = {
            days: [
                {
                    key: 0,
                    title: 'A stopwatch',
                    component: 'Watch',
                    icon: 'ios-stopwatch',
                    size: 48,
                    color: '#ff856c',
                },
                {
                    key: 1,
                    title: 'A Tinder style app',
                    component: 'Tinder',
                    icon: 'md-flame',
                    size: 60,
                    color: '#ff6b6b',
                },
            ],
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const showcases = this.state.days.map((elem, index) => {
            return (
                <TouchableHighlight
                    key={elem.key}
                    style={styles.touchBox}
                    underlayColor="#eee"
                    onPress={() => navigate(this.state.days[index].component)}>
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
                    <TouchableHighlight onPress={() => navigate(this.state.days[0].component)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../../asserts/img/day1.png')} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate(this.state.days[1].component)}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../../asserts/img/day2.png')} />
                        </View>
                    </TouchableHighlight>
                </Swiper>
                <View style={styles.touchBoxContainer}>{showcases}</View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    mainView: {},
    itemWrapper: {
        backgroundColor: '#f3f3f3',
    },
    touchBox: {
        width: Utils.size.width / 3 - 0.33334,
        height: Utils.size.width / 3,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        borderRightWidth: 1,
        borderRightColor: '#CCC',
    },
    touchBoxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Utils.size.width,
        borderTopWidth: 1,
        borderTopColor: '#CCC',
        borderLeftWidth: 1,
        borderLeftColor: '#CCC',
        borderRightWidth: 1,
        borderRightColor: '#CCC',
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
    image: {
        width: Utils.size.width,
        flex: 1,
        alignSelf: 'stretch',
    },
});
