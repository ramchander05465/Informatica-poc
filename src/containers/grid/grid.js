import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaPlus, FaMinus } from "react-icons/fa"
import {TiPlusOutline} from "react-icons/ti"
import { FiFilter, FiSettings } from "react-icons/fi"

/*import Select from 'rc-select';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';*/

import * as actionType from '../../actions'
import GridRecord from '../../components/grid/gridRecord'
import Pagination from '../../components/pagination/pagination'

class GridContent extends Component {
    totalRecord;
    constructor(props) {
        super(props)
        
        this.state = {
            name_val: 5,
            order_date: "1566591226",
            unit: 12,
            discount: "1",
            in_stock: "yes",
            showAddUserUI: false,
            current: 1,
            recPerPage:this.props.pagingInfo[0].num,
            filterd:'',
            totalRecord:0,
            sortingtype : "",
            currentsortingcolumn : "",
            displaysortarrow : "",
            canusersort : this.props.UserSort,
            enablepaging : this.props.UserPagging,
            enablesearch : this.props.UserSearch,
            pagerInfo : this.props.pagingInfo
        }
    }

    componentWillMount(){
        this.totalRecord = this.props.gridInfo.length;
    }    
    
    onShowSizeChange = (current, recPerPage) => {
        this.setState({recPerPage})
    }
    
    onChange = (current, pageSize) => {
        this.setState({current});
    }

    pageChangeHandler = (current) => {
        var x = document.getElementById('chk_all');
        x.checked = false;
        let page = current === 0 ? (current + 1) : current
        this.setState({current:page});
    }

    pageSelectionHandler = (count) => {
        this.setState({current:1, recPerPage:count})
    }

    setcheckall = () => {
        
        var chk = document.getElementById("chk_all");
        var collection = document.getElementsByClassName('chkdiv');
        if (chk.checked == true) {
            for (var x = 0; x < collection.length; x++) {
                if (collection[x].type == 'checkbox'){
                    var currentclickid = collection[x].id;
                    var parentid = currentclickid.replace('chk_','row');
                    var currentrow = document.getElementById(parentid);
                    currentrow.classList.add('test');
                    collection[x].checked = true;
                }
            }
        } else {
            for (var x = 0; x < collection.length; x++) {
                if (collection[x].type.toUpperCase() == 'CHECKBOX'){
                    var currentclickid = collection[x].id;
                    var parentid = currentclickid.replace('chk_','row');
                    var currentrow = document.getElementById(parentid);
                    currentrow.classList.remove('test');
                    collection[x].checked = false;
                }
            }
        }
    }

    renderGridColumn = () =>{
        let columnList = [];
        columnList = this.props.colInfo;
        
        const column_list = columnList.map((item,index) =>
            item.order !== 1 ?
            <div key={index} onClick={(evt) => item.cansort === true ?  this.sortColumn(item.Name,this,evt) : ''} className="grid-headers--container--child--def">{item.Name}
                {item.cansort === true ?  <div id="childdiv" className={this.state.currentsortingcolumn === item.Name ? this.state.sortingtype == 'ASC' ? 'fa fa-fw fa-sort-down' : 'fa fa-fw fa-sort-up'   : ''}></div> : ''}
            </div>   : <div key={index} className="grid-headers--container--child--def">
                <label className="checkbox-container"><input id="chk_all"  type="checkbox" onChange={() => this.setcheckall()}  /><span className="checkmark"></span></label>
                
            </div>
        );    
        return column_list;
    }

    SortData = (columnName,sortingtype,evt) =>{
        if(sortingtype == "ASC"){
            if(columnName == "Name"){
            this.props.gridInfo.sort(function(a, b){
                return a.name_val-b.name_val
                })
            }
            if(columnName == "Order Date"){
            this.props.gridInfo.sort(function(a, b){
                return a.order_date-b.order_date
                })
            }
            if(columnName == "Unit"){
            this.props.gridInfo.sort(function(a, b){
                return a.unit-b.unit
                })
            }
            if(columnName == "In Stock"){
            this.props.gridInfo.sort(function(a, b){
                return a.in_stock-b.in_stock
                })
            }
        }
        else{
            this.props.gridInfo.reverse();
        }
        this.renderGridRecord();
    }


    sortColumn = (columnName,evt,event) =>{
        if(this.state.canusersort){
            if(this.state.currentsortingcolumn == columnName){
                this.setState({
                    currentsortingcolumn : columnName
                })
            }
            else
            {
                this.setState({
                    sortingtype : "",
                    currentsortingcolumn : columnName
                })
            }
            if(this.state.sortingtype == ""){
                this.SortData(columnName,"ASC",event);
                this.setState({
                    sortingtype : "DESC"
                })
            }
            else if(this.state.sortingtype == "ASC")
            {
                this.SortData(columnName,this.state.sortingtype,event);
                this.setState({
                    sortingtype : "DESC"
                })
            }
            else{
                this.SortData(columnName,this.state.sortingtype,event);
                this.setState({
                    sortingtype : "ASC"
                })
            }
        }
    }



    filterHandler = (evt) => {
        this.setState({filterd:evt.target.value, current:1})
    }

    renderGridRecord = () => {
        let userList = [];
        let endCount=0;
        let filterdData;
        const {current, recPerPage} = this.state;        

        if(this.state.filterd !== ''){
            filterdData = this.props.gridInfo.filter(item => JSON.stringify(item).indexOf(this.state.filterd) !== -1);
        }else{
            filterdData = this.props.gridInfo;
        }
        this.totalRecord = filterdData.length;
        if(this.state.enablepaging == true){
            if((current * recPerPage) < filterdData.length){
                endCount = current * recPerPage;
            }else{
                endCount = filterdData.length;
            }
        }
        else{
            endCount = this.totalRecord;
        }

        var startCount = current === 1 ? 0 : ((this.state.current-1) * this.state.recPerPage);
        
        for(var count = startCount; count < endCount; count++){
            userList.push(<GridRecord
                key={filterdData[count].id}
                id={filterdData[count].id}
                name_val={filterdData[count].name_val}
                order_date={filterdData[count].order_date}
                unit={filterdData[count].unit}
                discount={filterdData[count].discount}
                in_stock={filterdData[count].in_stock}
                newRecord={false}
                editMode={false}
            />)
        }
        
        return userList
    }

    settingConfiguration = () =>{
        var is_sort = document.getElementById("chk_sort");
        var is_search = document.getElementById("chk_search");
        var is_ispaging = document.getElementById("chk_paging");
        is_sort.checked = this.state.canusersort;
        is_search.checked = this.state.enablesearch;
        is_ispaging.checked = this.state.enablepaging;
    }

    setConfiguration = () =>{
        var is_sort = document.getElementById("chk_sort");
        var is_search = document.getElementById("chk_search");
        var is_ispaging = document.getElementById("chk_paging");
        this.setState({
            canusersort : is_sort.checked,
            enablepaging : is_ispaging.checked,
            enablesearch : is_search.checked,
        })
    }

    addUserUI = (info) => this.setState({ showAddUserUI: info })

    /*addUserInfo = () => {
        let data = {
            name: this.state.name || '',
            orderDate: this.state.orderDate || new Date(),
            unit:this.state.unit || 1,
            inStock:this.state.inStock || true
        }
        this.props.addInfo(data);
    }*/

    render() {
        return (
            <React.Fragment>
                <div className="flex--cont--def user-actions--container">
                    <div className="user-actions--child user-actions--child--a">
                        Items ({this.totalRecord})
                    </div>
                    <div className="user-actions--child user-actions--child--b">
                        <TiPlusOutline
                            size={28}
                            style={{ display: this.state.showAddUserUI ? 'none' : 'block' }}
                            onClick={() => this.addUserUI(true)} title="Add Row" />
                        <FaMinus
                            size={25}
                            style={{ display: this.state.showAddUserUI ? 'block' : 'none' }}
                            onClick={() => this.addUserUI(false)} title="Remove Row" />

                    </div>
                    <div className="user-actions--child user-actions--child--c">
                        <FiFilter size={25} title="Advance Filter"/>
                    </div>
                    <div className="user-actions--child user-actions--child--d">
                        { this.state.enablesearch === true ?  <input type='text' name='search--filter' id='search--filter' onChange={(evt)=> this.filterHandler(evt)} placeholder='Find' /> : ''}
                    </div>
                    <div className="user-actions--child user-actions--child--e">
                        <FiSettings onClick={() => this.settingConfiguration()} size={25} data-toggle="modal" data-target="#myModal" title="Configure Table"/>
                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Settings</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <div className="modal-body">
                                        <div className="settings-wrapper">
                                            <div className="settings-label">
                                                Sorting
                                            </div>
                                            <div className="settings-radio">
                                                <label className="radio-switch">
                                                    <input id="chk_sort" type="checkbox" />
                                                    <span className="radio-slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="settings-wrapper">
                                            <div className="settings-label">
                                                Search
                                            </div>
                                            <div className="settings-radio">
                                                <label className="radio-switch">
                                                    <input id="chk_search" type="checkbox" />
                                                    <span className="radio-slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="settings-wrapper">
                                            <div className="settings-label">
                                                Paging
                                            </div>
                                            <div className="settings-radio">
                                                <label className="radio-switch">
                                                    <input id="chk_paging" type="checkbox" />
                                                    <span className="radio-slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" onClick={() => this.setConfiguration()}  className="btn btn-primary" data-dismiss="modal">Ok</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>

                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="flex--cont--def grid-headers--container">
                    {this.renderGridColumn()}
                </div>
                <div style={{ display: this.state.showAddUserUI ? 'block' : 'none' }} className="grid-add-row-container">
                    <GridRecord
                        id={0}
                        name_val='new'
                        order_date={new Date()}
                        unit={1}
                        discount={0}
                        in_stock='false'
                        newRecord={true}
                        editMode={true} />
                </div>
                <div className="grid--rows--container overflowContainer">
                    {this.renderGridRecord()}
                </div>
                
                <div className="grid--rows--container pagination">
                {
                    this.state.enablepaging === true ?
                    <Pagination
                        selectedPageClass={'wekcine'}
                        onPageChange={this.pageChangeHandler}
                        onSelectionPageChange={this.pageSelectionHandler}
                        total={this.totalRecord}
                        activePage={this.state.current}
                        recordPerPage={this.state.recPerPage}                        
                        defaultConfiguration={this.state.pagerInfo}
                        /> : ''
                }
                </div>
                
                                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        gridInfo: state.grid.gridInfo,
        colInfo : state.grid.gridColumncolumnMap,
        pagingInfo : state.grid.pagingSize,
        UserSort : state.grid.canUserSort,
        UserPagging : state.grid.canPaggingApply,
        UserSearch : state.grid.canUserSearchData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addInfo: (info) => dispatch(actionType.addUserInfo(info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContent)
