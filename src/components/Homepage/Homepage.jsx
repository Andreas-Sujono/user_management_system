import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi'

import Table from './Table'
import Pagination from './Pagination'
import UserDetail from 'components/UserDetail'

import './style.scss'

function Homepage(props) {
    const [attendees, setAttendees] = useState([
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
        {
            id: 3,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date()
        },
        {
            id: 4,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date()
        },
        {
            id: 5,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date()
        },
        {
            id: 6,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date()
        }
    ])
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [detail, setDetail] = useState({})
    const [showModal, setShowModal] = useState(false)

    const handleSearch = (e) => {
        let searchValue = e.target.value
        setSearch(searchValue)
        setTimeout(filterUser(searchValue), 500)
    }
    const filterUser = (searchValue) => {
        let searchResult = attendees.filter( item => {
            var re = new RegExp(searchValue, "i");
            return (re.test(item.id) || re.test(item.firstName) || re.test(item.lastName) || re.test(item.email))            
        })
        setSearchResult(searchResult)
    }

    const mockHTPPRequest = (type, data ={}) => new Promise( resolve => resolve(data))

    const handleEdit = async ({id, type, firstName, lastName, email, dob}) => {
        let maxId = attendees.reduce((acc,item) => Math.max(acc, item.id),0)
        if(type === "add"){
            let data = {id: maxId +1, type, firstName, lastName, email, dob}
            let res = await mockHTPPRequest('POST', data)

            setAttendees([...attendees, res])
        }
            
        else if(type === 'edit'){
            let data = {id, firstName, lastName, email, dob}
            let res = await mockHTPPRequest('PUT', data)

            let newAttendees = attendees.map(item => {
                if(item.id === id)
                    return res
                return item
            })

            setAttendees(newAttendees)
        }
        else if(type === 'delete'){
            let confirm = window.confirm('Are you sure you want to delete this user?')
            if(!confirm) return
            let res = await mockHTPPRequest('DELETE', {id})
            let newAttendees = attendees.filter(item => item.id !== id)
            setAttendees(newAttendees)
        }
    }

    let maxContentPerPage = 5

    return (
        <div className="homepage">
            <h1>Attendees</h1>
            <h2>These are attendees that have registered to your event</h2>

            <UserDetail
                detail={detail}
                isModalOpen={showModal}
                handleClose={() => setShowModal(false)}
                handleEdit={handleEdit}
            />

            <div className="search-bar">
                <FiSearch className="icon"/>
                <input 
                    type="search" 
                    className="search-input"
                    placeholder="Search by id, first name, last name, or email"
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            <div className="row">
                <div className="total-attendees">Total Attendees: <span>{attendees.length}</span></div>
                <button className="add-new-btn" onClick={() => {
                    setDetail({})
                    setShowModal(true)
                }}>
                    Add New Attendees
                </button>
            </div>
            <Table
                list={
                    search ? searchResult : attendees.slice( (currentPage -1)*maxContentPerPage, (currentPage)*maxContentPerPage)
                }
                handleEdit={handleEdit}
                handleShowModal = {(detail) => {
                    setDetail({...detail, type: 'edit'})
                    setShowModal(true)
                }}
            />
            {
                !attendees.length && <div className="no-attendees">No Attendee so far</div>
            }
            {
                (attendees.length && search && !searchResult.length) ? <div className="no-attendees"> Not Found </div> : <></>
            }

            {
                !search && <Pagination
                    currentPage={currentPage}
                    maxPage={Math.ceil(attendees.length / maxContentPerPage)}
                    handleNavigate = {page => setCurrentPage(page)}
                />
            }
            
        </div>
    );
}

export default Homepage;