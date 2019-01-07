import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Input} from 'reactstrap'

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
                <span id="prev" tabIndex="0" aria-label="Click here to view previous page" onClick={() => props.onPageChange(Number(activePage)-1)} className={activePage===1 ? 'disableClick':''}><FaAngleLeft size={18}/> </span>
                <span className="paging" tabIndex="0"><Input value={activePage} onChange={(evt) => totalPage >= evt.target.value ? props.onDispalyPage(evt.target.value, true) : props.onDispalyPage(evt.target.value, false)} style={{"width":"38px", "display":"inline-block","text-align":"center","margin-right":"5px","padding":"0px"}} aria-label="current page number" /> of {totalPage}</span>
                <span id="next" tabIndex="0" aria-label="Click here to view next page" onClick={() => props.onPageChange(Number(activePage)+1)} className={activePage===totalPage ? 'disableClick':''}><FaAngleRight size={18}/></span>
            </div>
        )
    }

    const renderRecordPerPage = () => {        
        return props.defaultConfiguration.map((data, index) => <option value={data.num} key={index}>{data.num}</option>)
    }

    return(
        <ul>
            <li className="pageCount" tabindex="0">{renderCurrentPageRecord()}</li>
            <li>{renderCurrentPage()}</li>
            <li className="selectPage" tabindex="0">Items per page:  <select onChange={(e) => props.onSelectionPageChange(e.target.value)} aria-label="Items per page">{renderRecordPerPage()}</select>
            </li>
        </ul>
    )
}

export default Pagination;