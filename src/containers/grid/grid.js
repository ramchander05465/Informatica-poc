import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaPlus, FaMinus } from "react-icons/fa"
import { FiFilter } from "react-icons/fi"

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
            recPerPage:11,
            filterd:'',
            totalRecord:0,
            sortingtype : "",
            currentsortingcolumn : "",
            displaysortarrow : ""
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
        let page = current === 0 ? (current + 1) : current
        this.setState({current:page});
    }

    pageSelectionHandler = (count) => {
        this.setState({current:1, recPerPage:count})
    }

    renderGridColumn = () =>{
        let columnList = [];
        columnList = this.props.colInfo;
        const column_list = columnList.map((item,index) =>
            
            <div onClick={(evt) => this.sortColumn(item.Name,this,evt)} className="grid-headers--container--child--def">{item.Name}
                <div id="childdiv" className={this.state.currentsortingcolumn === item.Name ? 'fa fa-fw fa-sort-down' : ''}></div>
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
        console.log("Sorted Data",this.props.gridInfo);
        this.renderGridRecord();
    }


    sortColumn = (columnName,evt,event) =>{
        debugger;
        if(this.currentsortingcolumn == columnName){
            this.currentsortingcolumn = columnName;
        }
        else
        {
            this.setState({
                sortingtype : ""
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

        if((current * recPerPage) < filterdData.length){
            endCount = current * recPerPage;
        }else{
            endCount = filterdData.length;
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
            />)
        }
        
        return userList
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
                        User({this.totalRecord})
                    </div>
                    <div className="user-actions--child user-actions--child--b">
                        <FaPlus
                            size={22}
                            style={{ display: this.state.showAddUserUI ? 'none' : 'block' }}
                            onClick={() => this.addUserUI(true)} />
                        <FaMinus
                            size={22}
                            style={{ display: this.state.showAddUserUI ? 'block' : 'none' }}
                            onClick={() => this.addUserUI(false)} />

                    </div>
                    <div className="user-actions--child user-actions--child--c">
                        <FiFilter size={22} />
                    </div>
                    <div className="user-actions--child user-actions--child--d">
                        <input type='text' name='search--filter' id='search--filter' onChange={(evt)=> this.filterHandler(evt)} placeholder='Search here' />
                    </div>
                </div>
                <div className="flex--cont--def grid-headers--container">
                    {this.renderGridColumn()}
                </div>
                <div style={{ display: this.state.showAddUserUI ? 'block' : 'none' }} className="grid-add-row-container">
                    <GridRecord
                        id={0}
                        name_val=''
                        order_date=''
                        unit={1}
                        discount={0}
                        in_stock=''
                        newRecord={true} />
                </div>
                <div className="grid--rows--container">
                    {this.renderGridRecord()}
                </div>
                
                <div className="grid--rows--container">
                    <Pagination
                        selectedPageClass={'wekcine'}
                        onPageChange={this.pageChangeHandler}
                        onSelectionPageChange={this.pageSelectionHandler}
                        total={this.totalRecord}
                        activePage={this.state.current}
                        recordPerPage={this.state.recPerPage}                        
                        defaultConfiguration={{pageDropDown:['10', '20', '30']}}
                        />
                
                </div>                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        gridInfo: state.grid.gridInfo,
        colInfo : state.grid.gridColumncolumnMap
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addInfo: (info) => dispatch(actionType.addUserInfo(info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContent)
