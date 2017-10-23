import React, { Component } from 'react';
import { Platform, View, StatusBar, StyleSheet } from 'react-native';

import WatchRecord from './WatchRecord';
import WatchFace from './WatchFace';
import WatchControl from './WatchControl';

let interval;
const initialState = {
    stopWatch: false,
    resetWatch: true,
    initialTime: 0,
    currentTime: 0,
    recordTime: 0,
    timeAccumulation: 0,
    totalTime: '00:00.00',
    sectionTime: '00:00.00',
    recordCounter: 0,
    records: [],
};
export default class Watch extends Component {
    constructor() {
        super();
        this.state = { ...initialState };
    }

    componentWillUnmount() {
        this._stopWatch();
        this._clearRecord();
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            StatusBar.setBarStyle(0);
        }
    }

    _startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation: 0,
                initialTime: new Date().getTime(),
            });
        } else {
            this.setState({
                stopWatch: false,
                initialTime: new Date().getTime(),
            });
        }

        let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
        interval = setInterval(() => {
            this.setState({
                currentTime: new Date().getTime(),
            });
            countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
            minute = Math.floor(countingTime / (60 * 1000));
            second = Math.floor((countingTime - 6000 * minute) / 1000);
            milSecond = Math.floor((countingTime % 1000) / 10);
            seccountingTime = countingTime - this.state.recordTime;
            secminute = Math.floor(seccountingTime / (60 * 1000));
            secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
            secmilSecond = Math.floor((seccountingTime % 1000) / 10);
            this.setState({
                totalTime:
                    (minute < 10 ? '0' + minute : minute) +
                    ':' +
                    (second < 10 ? '0' + second : second) +
                    '.' +
                    (milSecond < 10 ? '0' + milSecond : milSecond),
                sectionTime:
                    (secminute < 10 ? '0' + secminute : secminute) +
                    ':' +
                    (secsecond < 10 ? '0' + secsecond : secsecond) +
                    '.' +
                    (secmilSecond < 10 ? '0' + secmilSecond : secmilSecond),
            });
            if (this.state.stopWatch) {
                clearInterval(interval);
                this.setState({
                    timeAccumulation: countingTime,
                });
            }
        }, 10);
    }

    _stopWatch() {
        this.setState({
            stopWatch: true,
        });
        clearInterval(interval);
    }

    _addRecord() {
        let { recordCounter } = this.state;
        let counter = recordCounter;
        counter++;
        const colors = ['#FF0000', '#FF00FF', '#00FF00', '#808080', '#FFFF00', '#0000FF'];
        const index = counter % colors.length;
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: this.state.recordCounter + 1,
            records: [
                { key: counter, title: 'Lab' + counter, time: this.state.sectionTime, color: colors[index] },
                ...this.state.records,
            ],
        });
    }

    _clearRecord() {
        this.state = { ...initialState };
    }

    render() {
        return (
            <View style={styles.watchContainer}>
                <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime} />
                <WatchControl
                    addRecord={() => this._addRecord()}
                    clearRecord={() => this._clearRecord()}
                    startWatch={() => this._startWatch()}
                    stopWatch={() => this._stopWatch()}
                />
                <WatchRecord records={this.state.records} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    watchContainer: {
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
});
