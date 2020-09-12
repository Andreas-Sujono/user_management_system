import React from 'react';
import { shallow, mount } from 'enzyme';
import UserDetail from './UserDetail';

test('mock test', () => {
    expect(1).toBe(1)
})

const detail = {
    id: 1,
    firstName: 'test1',
    lastName: 'test1',
    email: 'test1@gmail.com',
    dob: new Date().getTime()
}

describe('test form field to be filled', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserDetail/>);
    })

    afterEach(() => {
        wrapper.unmount()
    })

    test('form is filled when detail props is passed', () => {
        wrapper.setProps({detail})
        expect(wrapper.state('firstName')).toBe(detail.firstName)
        expect(wrapper.state('lastName')).toBe(detail.lastName)
        expect(wrapper.state('email')).toBe(detail.email)
        expect(wrapper.state('dob')).toBe(wrapper.instance().dateToString(new Date(detail.dob)))
    })

    test('form is not filled when detail props is not passed', () => {
        expect(wrapper.state('firstName')).toBe('')
        expect(wrapper.state('lastName')).toBe('')
        expect(wrapper.state('email')).toBe('')
        expect(wrapper.state('dob')).toBe('')
    })
})

describe('test form validation', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserDetail/>);
    })

    afterEach(() => {
        wrapper.unmount()
    })

    test('input onChange trigger state change', () => {
        let dateString= '2020-09-08'

        wrapper.find('#firstName').simulate('change', {target:{value: detail.firstName, name: 'firstName'}})
        wrapper.find('#lastName').simulate('change', {target:{value: detail.lastName, name: 'lastName'}})
        wrapper.find('#email').simulate('change', {target:{value: detail.email, name: 'email'}})
        wrapper.find('#dob').simulate('change', {target:{value: dateString, name: 'dob'}})

        expect(wrapper.state()).toEqual({
            firstName: detail.firstName,
            lastName: detail.lastName,
            email: detail.email,
            dob: dateString,
        })

    })
    test('all field must be required', () => {
        let handleEdit = jest.fn(() => true)
        let handleClose = jest.fn(() => true)
        wrapper.setProps({
            handleEdit,
            handleClose
        })
        let form = wrapper.find('form')
        form.simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(0)
        expect(handleClose).toHaveBeenCalledTimes(0)

        wrapper.find('#firstName').simulate('change', {target:{value: 'firstName', name: 'firstName'}})
        form.simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(0)
        expect(handleClose).toHaveBeenCalledTimes(0)

        wrapper.find('#firstName').simulate('change', {target:{value: 'lastName', name: 'lastName'}})
        form.simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(0)
        expect(handleClose).toHaveBeenCalledTimes(0)

        wrapper.find('#firstName').simulate('change', {target:{value: 'test@gmail.com', name: 'email'}})
        form.simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(0)
        expect(handleClose).toHaveBeenCalledTimes(0)

        wrapper.find('#firstName').simulate('change', {target:{value: 'dob', name: 'dob'}})
        form.simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(1) //until this level, all field are filled
        expect(handleClose).toHaveBeenCalledTimes(1)
    })

    test('email validation', () => {
        let handleEdit = jest.fn(() => true)
        let handleClose = jest.fn(() => true)
        wrapper.setProps({
            handleEdit,
            handleClose
        })
        wrapper.setState({
            firstName: 'test1',
            lastName: 'test1',
            email: 'test1',
            dob: '2019-09-09'
        })

        //handleEdit and handleClose are not triggered when email is not valid
        wrapper.find('form').simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(0)
        expect(handleClose).toHaveBeenCalledTimes(0)

        //handleEdit and handleClose are not triggered when email is valid
        wrapper.find('#firstName').simulate('change', {target:{value: 'test@gmail.com', name: 'email'}})
        wrapper.find('form').simulate('submit', {preventDefault:() => true});
        expect(handleEdit).toHaveBeenCalledTimes(1)
        expect(handleClose).toHaveBeenCalledTimes(1)
    })
})