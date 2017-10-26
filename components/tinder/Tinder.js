import { Ionicons as Icon } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, View, StatusBar, StyleSheet } from 'react-native';

import SwipeCard from './SwipeCard';
import Utils from '../utils';

export default class Tinder extends Component {
    componentDidMount() {
        StatusBar.setBarStyle(0);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Icon name="ios-settings" size={35} color="#CECECE" />
                    <Image style={styles.logo} source={require('../../asserts/img/tinder_logo.png')} />
                    <Icon name="ios-chatbubbles" size={35} color="#CECECE" />
                </View>

                <View style={styles.action}>
                    <View style={styles.smallContainer}>
                        <Icon name="md-refresh" color="#fdcd6d" size={30} />
                    </View>
                    <View style={styles.largeContainer}>
                        <Icon name="md-close" color="#fc6c6e" size={45} />
                    </View>
                    <View style={styles.largeContainer}>
                        <Icon name="md-heart" color="#52cb93" size={45} />
                    </View>
                    <View style={styles.smallContainer}>
                        <Icon name="md-pin" color="#318ff6" size={30} />
                    </View>
                </View>

                <SwipeCard />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: Utils.size.height,
        width: Utils.size.width,
    },
    nav: {
        width: Utils.size.width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
    },
    logo: {
        width: 40,
        height: 40,
    },
    action: {
        paddingLeft: 7.5,
        paddingRight: 7.5,
        width: Utils.size.width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        top: Utils.size.height * 0.78 - 39,
        position: 'absolute',
    },
    smallContainer: {
        width: Utils.size.width === 375 ? 70 : 60,
        height: Utils.size.width === 375 ? 70 : 60,
        borderColor: '#f5f5f5',
        borderWidth: 5,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 5,
    },
    largeContainer: {
        width: Utils.size.width === 375 ? 110 : 100,
        height: Utils.size.width === 375 ? 110 : 100,
        borderColor: '#f5f5f5',
        borderWidth: 5,
        borderRadius: 55,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
});
