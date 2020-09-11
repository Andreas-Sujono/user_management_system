import React from 'react';
import { shallow, mount } from 'enzyme';
import Homepage from './Homepage';

const attendees = [
    {
        id: 1,
        firstName: 'test1',
        lastName: 'test1',
        email: 'test1@gmail.com',
        dob: new Date()
    },
    {
        id: 2,
        firstName: 'test2',
        lastName: 'test2',
        email: 'test2@gmail.com',
        dob: new Date()
    },
]

beforeAll(() => {
    global.fetch = jest.fn();
    fetch.mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          }
        });
      });
})

test('render title and subtitle', () => {
    let wrapper = shallow(<Homepage/>);
    expect(wrapper.find('h1').text()).toEqual('Attendees');
    expect(wrapper.find('h2').text()).toEqual('These are attendees that have registered to your event');
});

describe('test Search', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Homepage/>);
        wrapper.setState({attendees});
    })

    test('input value in search bar will change the search state', () => {
        let searchValue = 'DUMMY_SEARCH'
        wrapper.find('.search-input').simulate(
            'change', {target:{value:searchValue}}
        )
        expect(wrapper.state('search')).toEqual(searchValue)
    })

    test('search value produce no result', () => {
        wrapper.find('.search-input').simulate(
            'change', {target:{value:'NO_RESULT'}}
        )
        expect(wrapper.state('search')).toEqual('NO_RESULT')
        expect(wrapper.state('searchResult')).toEqual([])
        expect(wrapper.find('.no-attendees').text()).toEqual('Not Found')
    })

    test('search value produce a result', () => {
        wrapper.find('.search-input').simulate(
            'change', {target:{value:attendees[0].firstName}}
        )
        expect(wrapper.state('search')).toEqual(attendees[0].firstName)
        expect(wrapper.state('searchResult')).toEqual([attendees[0]])
        expect(wrapper.find('.no-attendees').exists()).toBeFalsy()
    })
    
    
})

describe('test render of table', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Homepage/>);
        wrapper.setState({attendees});
    })
    test('table to render list correctly', () => {
        expect(wrapper.find('.homepage-table-container tbody tr')).toHaveLength(2); //render 2 rows
    })
})

describe('test pagination', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Homepage/>);
    })

    test('table to show number of pages correcly', () => {
        wrapper.setState({attendees}); //set to 2 data first
        // note that I hardcoded the max number of user in a page to be 5
        expect(wrapper.find('.pagination ul li')).toHaveLength(1); //only 1 pagination

        let data = []
        let {firstName, lastName, email, dob} = attendees[0]
        for(let i =0 ;i < 6; i++){ //create data of length 6
            data.push({
                id:i,
                firstName,
                lastName,
                email,
                dob
            })
        }
        wrapper.setState({attendees: data}); 
        expect(wrapper.find('.pagination ul li')).toHaveLength(3); //contain 2 page and 1 arrow

        data = []
        for(let i =0 ;i < 12; i++){ //create data of length 12
            data.push({
                id:i,
                firstName,
                lastName,
                email,
                dob
            })
        }
        wrapper.setState({attendees: data, currentPage: 2}); 
        expect(wrapper.find('.pagination ul li')).toHaveLength(5); //contain 3 page and 2 arrow

    })
})

describe('test user action such as add, edit, and delete', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Homepage/>);
        wrapper.setState({attendees});
    })
    test('add new user', () => {
        wrapper.find('.add-new-btn').simulate('click')
        expect(wrapper.state('detail')).toEqual({})
        expect(wrapper.state('showModal')).toEqual(true)
    })

    test('edit user', () => {
        wrapper.find('.homepage-table-container .action .edit-btn').first().simulate('click') //click on first row data
        expect(wrapper.state('detail')).toEqual({...attendees[0], type:'edit'})
        expect(wrapper.state('showModal')).toEqual(true)
    })

    test('delete user', () => {
        window.confirm = jest.fn(() => true);
        wrapper.find('.homepage-table-container .action .delete-btn').first().simulate('click') //click on first row data
        expect(window.confirm.mock.calls.length).toBe(1);
        expect(wrapper.state('detail')).toEqual({})

        process.nextTick(() => {
            expect(wrapper.state('attendees')).toEqual([attendees[1]]) //only second data left
            expect(wrapper.state('showModal')).toEqual(false)
        })
        
    })
})