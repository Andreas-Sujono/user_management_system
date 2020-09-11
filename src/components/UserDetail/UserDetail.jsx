import React, {useState, useEffect} from 'react';
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
import './style.scss'

function UserDetail(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateofBirth, setDateofBirth] = useState('')


    const addZero = (num) => num > 9 ? String(num) : `0${num}`

    const dateToString = (date) => {
        let yy = date.getFullYear()
        let mm = addZero(date.getMonth() + 1)
        let dd = addZero(date.getDate())
        return `${yy}-${mm}-${dd}`
    }

    useEffect(() => {
        if(props.detail){
            setFirstName(props.detail.firstName || '')
            setLastName(props.detail.lastName || '')
            setEmail(props.detail.email || '')
            setDateofBirth(props.detail.dob ? dateToString(props.detail.dob ) : '')
        }
    }, [props.detail])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleEdit({
            id: props.detail.id || 'new',
            type: props.detail.type || 'add',
            firstName,
            lastName,
            email,
            dob: new Date(Date.parse(dateofBirth))
        })
        props.handleClose()
    }

    return (
        <Modal
          open={props.isModalOpen}
          onClose={() => props.handleClose()}
        >
            <div className="UserDetail-page">
                <h1>Edit Attendees</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            id="firstName" 
                            type="text" 
                            placeholder="Enter your first name" 
                            required
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            id="lastName" 
                            type="text" 
                            placeholder="Enter your last name" 
                            required
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Enter your email" 
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="dob">Date of Birth</label>
                        <input 
                            id="dob" 
                            type="date"
                            required
                            value={dateofBirth}
                            onChange={e => setDateofBirth(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Edit"/>
                </form>
            </div>
        </Modal>
        
    );
}

export default UserDetail;