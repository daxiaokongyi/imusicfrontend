import React from "react";
import {render} from '../test-utils';
import Footer from './Footer.js';

describe('render Footer component', () => {
    it('render without crashing', () => {
        render(<Footer/>);
    }); 
    test('return 2021', () => {
        const {getByText} = render(<Footer/>);
        expect(getByText('Created by Hang Jason Jin. © 2021')).toBeInTheDocument();
    })
})