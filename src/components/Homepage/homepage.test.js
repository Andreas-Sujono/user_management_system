import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

let wrapper = shallow(<Homepage/>);

test('render title and subtitle', () => {
    expect(wrapper.find('h1').text()).toEqual('Attendees');
    expect(wrapper.find('h2').text()).toEqual('These are attendees that have registered to your event');
});

describe('test Search', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Homepage/>);
    })

    test('input value in search bar will change the search state', () => {
        let searchValue = 'DUMMY_SEARCH'
        wrapper.find('.search-input').simulate(
            'change', {target:{value:searchValue}}
        )
        expect(wrapper.state('search')).toEqual(searchValue)
    })
    test('search value produce no result', () => {
        wrapper.setState({ attendees: [
            {
                id: 1,
                firstName: 'Andreas',
                lastName: 'Sujono',
                email: 'andreassujono@gmail.com',
                dob: new Date()
            },
            {
                id: 2,
                firstName: 'Andreas',
                lastName: 'Sujono',
                email: 'andreassujono@gmail.com',
                dob: new Date()
            },
        ]});
        wrapper.find('.search-input').simulate(
            'change', {target:{value:'NO_RESULT'}}
        )
        expect(wrapper.state('search')).toEqual('NO_RESULT')
        expect(wrapper.state('searchResult')).toEqual([])
    })
    
    
})