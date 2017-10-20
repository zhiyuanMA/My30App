import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import Utils from '../utils';

export default class WatchControl extends Component {
    static propTypes = {
        stopWatch: PropTypes.func.isRequired,
        clearRecord: PropTypes.func.isRequired,
        startWatch: PropTypes.func.isRequired,
        addRecord: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            watchOn: false,
            startBtnText: 'Start',
            startBtnColor: '#60B644',
            stopBtnText: 'Lap',
            underlayColor: '#fff',
        };
    }

    _startWatch() {
        if (!this.state.watchOn) {
            this.props.startWatch();
            this.setState({
                startBtnText: 'Stop',
                startBtnColor: '#60B644',
                stopBtnText: 'Lap',
                underlayColor: '#fff',
                watchOn: true,
            });
        } else {
            this.props.stopWatch();
            this.setState({
                startBtnText: 'Start',
                startBtnColor: '#60B644',
                stopBtnText: 'Reset',
                underlayColor: '#eee',
                watchOn: false,
            });
        }
    }

    _addRecord() {
        if (this.state.watchOn) {
            this.props.addRecord();
        } else {
            this.props.clearRecord();
            this.setState({
                stopBtnText: 'Lap',
            });
        }
    }

    render() {
        const { watchOn, stopBtnText, startBtnColor, startBtnText, underlayColor } = this.state;
        const { stopWatch, startWatch, addRecord, clearRecord } = this.props;

        return (
            <View style={styles.controlContainer}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <TouchableHighlight
                        style={styles.btnStop}
                        underlayColor={underlayColor}
                        onPress={() => this._addRecord()}>
                        <Text style={styles.btnStopText}>{stopBtnText}</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={() => this._startWatch()}>
                        <Text style={[styles.btnStartText, { color: startBtnColor }]}>{startBtnText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    controlContainer: {
        width: Utils.size.width,
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#f3f3f3',
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 0,
    },
    btnStart: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStop: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStartText: {
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    btnStopText: {
        fontSize: 14,
        backgroundColor: 'transparent',
        color: '#555',
    },
});
