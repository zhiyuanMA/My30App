import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Utils from '../../utils';

export default class WatchFace extends Component {
    static propTypes = {
        sectionTime: PropTypes.string.isRequired,
        totalTime: PropTypes.string.isRequired,
    };

    render() {
        const { sectionTime, totalTime } = this.props;
        return (
            <View style={styles.faceContainer}>
                <Text style={styles.sectionTime}>{sectionTime}</Text>
                <Text style={styles.totalTime}>{totalTime}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    faceContainer: {
        width: Utils.size.width,
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        height: 170,
    },
    sectionTime: {
        fontSize: 20,
        fontWeight: '100',
        paddingRight: 30,
        color: '#555',
        position: 'absolute',
        left: Utils.size.width - 140,
        top: 30,
    },
    totalTime: {
        fontSize: Utils.size.width === 375 ? 70 : 60,
        fontWeight: '100',
        color: '#222',
        paddingLeft: 20,
    },
});
