import React from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

const Pagination = (props) => {
    
    const {activePage, recordPerPage, total} = props

    const renderCurrentPageRecord = () => {
        if(activePage === 1 && total > recordPerPage) return ("1 - "+ recordPerPage + " of " + total); 
        if(total > recordPerPage * activePage) return (activePage-1) * recordPerPage + 1 +"-"+ (activePage * recordPerPage) +" - of " + total;
        return (activePage-1) * recordPerPage + 1 +"-"+ total +" - of " + total;
    }

    const renderCurrentPage = () => {
       // console.log(Number((total/recordPerPage).toFixed(0))+'------',+Number(total%recordPerPage))
        let totalPage = Number((total/recordPerPage).toFixed(0))// + Number(total%recordPerPage);
        totalPage = Number(total%recordPerPage) === 0 ? totalPage : Number(totalPage)+1;
        return (
            <div>
                <span id="prev" onClick={() => props.onPageChange(activePage-1)} className={activePage===1 ? 'disableClick':''}>{'<'} </span>
                <span className="paging">{activePage} of {totalPage}</span>
                <span id="next" onClick={() => props.onPageChange(activePage+1)} className={activePage===totalPage ? 'disableClick':''}>{' >'}</span>
            </div>
        )
    }

    const renderRecordPerPage = () => {
        
        return props.defaultConfiguration.map((data, index) => <option value={data.num} key={index}>{data.num}</option>)
    }

    return(
        <ul>
            <li className="pageCount">{renderCurrentPageRecord()}</li>
            <li>{renderCurrentPage()}</li>
            <li className="selectPage"><select onChange={(e) => props.onSelectionPageChange(e.target.value)}>{renderRecordPerPage()}</select>
            </li>
        </ul>
    )
}

export default Pagination;