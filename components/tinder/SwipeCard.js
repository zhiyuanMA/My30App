import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';

import Card from './Card';

const imgs = [
    '../../asserts/img/Bob.jpg',
    '../../asserts/img/Stuart.png',
    '../../asserts/img/Phil.jpg',
];
const names = ['Bob', 'Stuart', 'Phil'];
const cards = imgs.map(function(elem, index) {
    return { id: 'minons' + index, img: elem, name: names[index] };
});

export default class SwipeCard extends Component {
    constructor() {
        super();
        this.state = { cards };
    }

    _next() {
        const { cards } = this.state;
        cards.pop();
        this.setState({ cards });
    }

    render() {
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={cardData => <Card {...cardData} />}
                // handleYup={this._next()}
                // handleNope={this._next()}
                showYup={false}
                showNope={false}
            />
        );
    }
}
