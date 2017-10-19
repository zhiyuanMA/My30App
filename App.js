import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainView from './components/main/MainView';
import Watch from './components/day1/Watch';

const Showcase = StackNavigator({
    Home: { screen: MainView },
    Watch: { screen: Watch },
});

export default class App extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle(0);
    }

    render() {
        return <Showcase />;
    }
}
