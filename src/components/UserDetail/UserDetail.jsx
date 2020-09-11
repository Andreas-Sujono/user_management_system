import React, {Component} from 'react';
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
import './style.scss'

class UserDetail extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
    }

    componentDidUpdate(prevProps){
        let isPropsSame = true

        Object.keys(prevProps.detail).forEach(key => {
            if(prevProps.detail[key] !== this.props.detail[key])
                isPropsSame = false
        })
        Object.keys(this.props.detail).forEach(key => {
            if(prevProps.detail[key] !== this.props.detail[key])
                isPropsSame = false
        })
        if(!isPropsSame){
            const {firstName, lastName, email, dob} = this.props.detail
            this.setState({
                firstName:firstName || '',
                lastName: lastName || '',
                email: email || '',
                dob: dob ? this.dateToString(dob): '',
            })
        }
    }

    addZero = (num) => num > 9 ? String(num) : `0${num}`

    dateToString = (date) => {
        let yy = date.getFullYear()
        let mm = this.addZero(date.getMonth() + 1)
        let dd = this.addZero(date.getDate())
        return `${yy}-${mm}-${dd}`
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, dob} = this.state

        this.props.handleEdit({
            id: this.props?.detail?.id || 'new',
            type: this.props?.detail?.type || 'add',
            firstName,
            lastName,
            email,
            dob: new Date(Date.parse(dob))
        })
        this.props.handleClose()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {firstName, lastName, email, dob} = this.state
        return (
            <Modal
              open={this.props.isModalOpen}
              onClose={() => this.props.handleClose()}
            >
                <div className="UserDetail-page">
                    <h1>Edit Attendees</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="firstName">First Name*</label>
                            <input 
                                id="firstName" 
                                type="text" 
                                placeholder="Enter your first name" 
                                required
                                value={firstName}
                                name="firstName"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastName">Last Name*</label>
                            <input 
                                id="lastName" 
                                type="text" 
                                placeholder="Enter your last name" 
                                required
                                value={lastName}
                                name="lastName"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">email*</label>
                            <input 
                                id="email" 
                                type="email" 
                                placeholder="Enter your email" 
                                required
                                value={email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="dob">Date of Birth*</label>
                            <input 
                                id="dob" 
                                type="date"
                                required
                                value={dob}
                                name="dob"
                                onChange={this.handleChange}
                            />
                        </div>
                        <input type="submit" value="Edit"/>
                    </form>
                </div>
            </Modal> 
        );
    }


}

export default UserDetail;