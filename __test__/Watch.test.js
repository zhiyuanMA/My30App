import React from 'react';
import Watch from '../components/watch/Watch';

import renderer from 'react-test-renderer';

it('renders Watch without crashing', () => {
    const rendered = renderer.create(<Watch />).toJSON();
    expect(rendered).toMatchSnapshot();
});
