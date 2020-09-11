import React from 'react';

import './style.scss'

function Pagination(props) {
    let {currentPage, maxPage} = props
    let arr = Array.from({length: maxPage}, (v, i) => i)
    return (
        <div className="pagination">
            <ul>
                {currentPage > 1 && <li onClick={() => props.handleNavigate(currentPage-1)}> &lt; </li>}
                {
                    arr.map((_,idx) => 
                        <li 
                            key={idx} 
                            className={`${currentPage === idx+1 ? 'active-page': ''}`}
                            onClick={() => props.handleNavigate(idx+1)}
                        > 
                            {idx+1} 
                        </li>
                    )
                }
                {currentPage < maxPage && <li onClick={() => props.handleNavigate(currentPage+1)}> &gt; </li>}
            </ul>
        </div>
    );
}

export default Pagination;