import React, {Component} from 'react';
import {FiSearch} from 'react-icons/fi'

import Table from './Table'
import Pagination from './Pagination'
import UserDetail from 'components/UserDetail'
import LoadingBar from 'components/LoadingBar'

import './style.scss'

class Homepage extends Component{
    state={
        attendees: [
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
        ],
        search: '',
        searchResult: [],
        currentPage: 1,
        detail: {},
        showModal: false,
        isLoading: false
    }

    setLoading = (loading) => {
        this.setState({
            isLoading: loading
        })
    }

    handleSearch = (e) => {
        let searchValue = e.target.value
        this.setState({search: searchValue})
        setTimeout(this.filterUser(searchValue), 500)
    }
    filterUser = (searchValue) => {
        const {attendees} = this.state
        let searchResult = attendees.filter( item => {
            var re = new RegExp(searchValue, "i");
            return (re.test(item.id) || re.test(item.firstName) || re.test(item.lastName) || re.test(item.email))            
        })
        this.setState({searchResult})
    }

    mockHTPPRequest = async (type, data ={}) => {
        let url = 'https://jsonplaceholder.typicode.com/posts' //default is GET
        if(type === 'POST')
            url = 'https://jsonplaceholder.typicode.com/posts' 
        else if(type === 'PUT')
            url = 'https://jsonplaceholder.typicode.com/posts/1'
        else if(type === 'DELETE')
            url = 'https://jsonplaceholder.typicode.com/posts/1'
        return await fetch(url, {
            method: type,
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    handleEdit = async ({id, type, firstName, lastName, email, dob}) => {
        this.setLoading(true)
        const {attendees} = this.state
        let maxId = attendees.reduce((acc,item) => Math.max(acc, item.id),0)
        if(type === "add"){
            let data = {id: maxId +1, type, firstName, lastName, email, dob}
            let res = await this.mockHTPPRequest('POST', data)

            this.setState( prevState => ({attendees: [...prevState.attendees, data]}))
        }
            
        else if(type === 'edit'){
            let data = {id, firstName, lastName, email, dob}
            let res = await this.mockHTPPRequest('PUT', data)

            this.setState( prevState => ({attendees: 
                prevState.attendees.map(item => {
                    if(item.id === id)
                        return data
                    return item
                })
            }))

        }
        else if(type === 'delete'){
            let confirm = window.confirm('Are you sure you want to delete this user?')
            if(!confirm) return
            let res = await this.mockHTPPRequest('DELETE', {id})

            this.setState( prevState => ({attendees: 
                prevState.attendees.filter(item => item.id !== id)
            }))
        }
        this.setLoading(false)
    }

    render(){
        let maxContentPerPage = 5
        const {attendees, search, searchResult, currentPage, detail, showModal, isLoading} = this.state

        if(isLoading)
            return <LoadingBar/>

        return (
            <div className="homepage">
                <h1>Attendees</h1>
                <h2>These are attendees that have registered to your event</h2>
    
                <UserDetail
                    detail={detail}
                    isModalOpen={showModal}
                    handleClose={() => this.setState({showModal:false})}
                    handleEdit={this.handleEdit}
                />
    
                <div className="search-bar">
                    <FiSearch className="icon"/>
                    <input 
                        type="search" 
                        className="search-input"
                        placeholder="Search by id, first name, last name, or email"
                        value={search}
                        onChange={this.handleSearch}
                    />
                </div>
    
                <div className="row">
                    <div className="total-attendees">Total Attendees: <span>{attendees.length}</span></div>
                    <button className="add-new-btn" onClick={() => {
                        this.setState({
                            detail: {},
                            showModal: true
                        })
                    }}>
                        Add New Attendees
                    </button>
                </div>
                <Table
                    list={
                        search ? searchResult : attendees.slice( (currentPage -1)*maxContentPerPage, (currentPage)*maxContentPerPage)
                    }
                    handleEdit={this.handleEdit}
                    handleShowModal = {(detail) => {
                        this.setState({
                            detail: {...detail, type: 'edit'},
                            showModal: true
                        })
                    }}
                />
                {
                    !attendees.length && <div className="no-attendees">No Attendee so far</div>
                }
                {
                    (attendees.length && search && !searchResult.length) ? <div className="no-attendees">Not Found</div> : <></>
                }
    
                {
                    !search && <Pagination
                        currentPage={currentPage}
                        maxPage={Math.ceil(attendees.length / maxContentPerPage)}
                        handleNavigate = {page => this.setState({currentPage: page})}
                    />
                }
                
            </div>
        );
    }

}

export default Homepage;