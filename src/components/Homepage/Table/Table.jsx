import React from 'react';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

import './style.scss'

function Table(props) {
    return (
        <div className="homepage-table-container">
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.list.map(item => 
                            <tr key={item.id}>
                                <td className="id">{item.id}</td>
                                <td className="first-name">{item.firstName}</td>
                                <td className="last-name">{item.lastName}</td>
                                <td className="email">{item.email}</td>
                                <td className="dob">{new Date(item.dob).toLocaleDateString('en-us')}</td>
                                <td className="action">
                                    <AiOutlineEdit className="icon edit-btn" onClick={() => props.handleShowModal(item)}/>
                                    <AiOutlineDelete className="icon delete-btn" onClick={() => props.handleEdit({id:item.id, type:'delete'})}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;