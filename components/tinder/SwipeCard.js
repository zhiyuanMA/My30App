import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';

import Card from './Card';

const imgs = [
    require('../../asserts/img/Bob.jpg'),
    require('../../asserts/img/Stuart.png'),
    require('../../asserts/img/Phil.jpg'),
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

    render() {
        return (
            <SwipeCards
                stack={true}
                cardKey='id'
                cards={this.state.cards}
                renderCard={cardData => <Card {...cardData} />}
                showYup={false}
                showNope={false}
                loop={true}
            />
        );
    }
}
