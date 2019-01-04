import React from 'react';

const Pagination = (props) => {
    
    const {pageDropDown} = props.defaultConfiguration
    const {activePage, recordPerPage, total} = props

    const renderCurrentPageRecord = () => {
        if(activePage === 1 && total > recordPerPage) return ("1 - "+ recordPerPage + " of " + total); 
        if(total > recordPerPage * activePage) return (activePage-1) * recordPerPage +"-"+ (activePage * recordPerPage) +" - of " + total;
        return (activePage-1) * recordPerPage +"-"+ total +" - of " + total;
    }

    const renderCurrentPage = () => {
       // console.log(Number((total/recordPerPage).toFixed(0))+'------',+Number(total%recordPerPage))
        let totalPage = Number((total/recordPerPage).toFixed(0))// + Number(total%recordPerPage);
        totalPage = Number(total%recordPerPage) === 0 ? totalPage : Number(totalPage)+1;
        return (
            <div>
                <span onClick={() => props.onPageChange(activePage-1)} className={activePage===1 ? 'disableClick':''}>{'<'} </span>
                <span>{activePage} of {totalPage}</span>
                <span onClick={() => props.onPageChange(activePage+1)} className={activePage===totalPage ? 'disableClick':''}>{' >'}</span>
            </div>
        )
    }

    const renderRecordPerPage = () => {
        return pageDropDown.map((data, index) => <option value={data} key={index}>{data}</option>)
    }

    return(
        <ul>
            <li>{renderCurrentPageRecord()}</li>
            <li>{renderCurrentPage()}</li>
            <li><select onChange={(e) => props.onSelectionPageChange(e.target.value)}>{renderRecordPerPage()}</select>
            </li>
        </ul>
    )
}

export default Pagination;