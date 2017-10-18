import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WatchFace extends Component {
    static propTypes = {
        section: PropTypes.string.isRequired,
        total: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View style={styles.face}>
                <Text style={styles.section}>{this.props.section}</Text>
                <Text style={styles.total}>{this.props.total}</Text>
            </View>
        );
    }
}
