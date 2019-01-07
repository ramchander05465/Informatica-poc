import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {withStorySource} from '@storybook/addon-storysource'

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Welcome } from '@storybook/react/demo';
import Pagination from '../components/pagination/pagination'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Pagination', module)
.addDecorator(withStorySource(`import React from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
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
                <span id="prev" tabIndex="0" aria-label="Click here to view previous page" onClick={() => props.onPageChange(Number(activePage)-1)} className={activePage===1 ? 'disableClick':''}>{'<'} </span>
                <span className="paging" tabIndex="0"><Input value={activePage} onChange={(evt) => totalPage >= evt.target.value ? props.onDispalyPage(evt.target.value, true) : props.onDispalyPage(evt.target.value, false)} style={{"width":"38px", "display":"inline-block","text-align":"center","margin-right":"5px"}} /> of {totalPage}</span>
                <span id="next" tabIndex="0" aria-label="Click here to view next page" onClick={() => props.onPageChange(Number(activePage)+1)} className={activePage===totalPage ? 'disableClick':''}>{' >'}</span>
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
            <li className="selectPage" tabindex="0">Items per page:  <select onChange={(e) => props.onSelectionPageChange(e.target.value)}>{renderRecordPerPage()}</select>
            </li>
        </ul>
    )
}

export default Pagination;`))
.add('Pagination', ()=> <div className="grid--rows--container pagination"><Pagination selectedPageClass={'wekcine'}
onPageChange={action('changed')}
onSelectionPageChange={action('page changed')}
total={100}
activePage={2}
recordPerPage={10}                        
defaultConfiguration={[{ num: 10 }, { num: 25 }, { num: 50 }]} /></div>);