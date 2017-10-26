import { Ionicons as Icon } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import Utils from '../utils';

export default class Card extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    };

    render() {
        const { id, name, img } = this.props;
        return (
            <View key={id} style={styles.card}>
                <Image style={styles.img} source={require({img})} />
                <View style={styles.info}>
                    <View>
                        <Text style={styles.text}>
                            {name}, very old <Icon name="ios-checkmark-circle" size={18} color="#208bf6" />
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={styles.icon}>
                            <Icon name="ios-people" size={25} color="#fc6b6d" />
                            <Text style={[styles.iconText, { color: '#fc6b6d' }]}>0</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name="ios-book" size={25} color="#cecece" />
                            <Text style={[styles.iconText, { color: '#cecece' }]}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: Utils.size.width - 20,
        height: Utils.size.height * 0.75,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        position: 'relative',
        backgroundColor: '#fff',
        top: 13,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingLeft: 20,
        paddingRight: 5,
    },
    img:{
      width: Utils.size.width - 20,
      height: Utils.size.height * 0.75 - 60,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#423e39',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        paddingLeft: 5,
        fontWeight: '500',
        fontSize: 16,
    },
});
