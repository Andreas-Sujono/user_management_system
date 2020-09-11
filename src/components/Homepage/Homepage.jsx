import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi'

import Table from './Table'
import Pagination from './Pagination'

import './style.scss'

function Homepage(props) {
    const [attendees, setAttendees] = useState([
        {
            id: 1,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date().getTime()
        },
        {
            id: 2,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date().getTime()
        },
        {
            id: 3,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date().getTime()
        },
        {
            id: 4,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date().getTime()
        },
        {
            id: 5,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date().getTime()
        },
        {
            id: 6,
            firstName: 'Andreas',
            lastName: 'Sujono',
            email: 'andreassujono@gmail.com',
            dob: new Date().getTime()
        }
    ])
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

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

    let maxContentPerPage = 5

    return (
        <div className="homepage">
            <h1>Attendees</h1>
            <h2>These are attendees that have registered to your event</h2>

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
                <button className="add-new-btn">
                    Add New Attendees
                </button>
            </div>
            <Table
                list={
                    search ? searchResult : attendees.slice( (currentPage -1)*maxContentPerPage, (currentPage)*maxContentPerPage)
                }
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