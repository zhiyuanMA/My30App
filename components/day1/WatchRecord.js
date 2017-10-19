import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Utils from '../../utils';

export default class WatchRecord extends Component {
    static propTypes = {
        record: PropTypes.array.isRequired,
    };

    render() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            theDataSource = ds.cloneWithRows(this.props.record);

        return (
            <ListView
                style={styles.recordList}
                dataSource={theDataSource}
                renderRow={rowData => (
                    <View style={styles.recordItem}>
                        <Text style={styles.recordItemTitle}>{rowData.title}</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.recordItemTime}>{rowData.time}</Text>
                        </View>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    recordList: {
        width: Utils.size.width,
        height: Utils.size.height - 300,
        paddingLeft: 15,
    },
    recordItem: {
        height: 40,
        borderBottomWidth: Utils.pixel,
        borderBottomColor: '#bbb',
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    recordItemTitle: {
        backgroundColor: 'transparent',
        flex: 1,
        textAlign: 'left',
        paddingLeft: 20,
        color: '#777',
    },
    recordItemTime: {
        backgroundColor: 'transparent',
        flex: 1,
        textAlign: 'right',
        paddingRight: 20,
        color: '#222',
    },
});
