import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../actions'
import DatePicker from "react-datepicker"
import { GoKebabVertical } from "react-icons/go";
import { FaRegSave, FaEdit, FaTrashAlt } from "react-icons/fa"
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Input} from 'reactstrap'

//const GridRecord = (props) => {
  class GridRecord extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(this.props.order_date)
      };
    }
    
  /*state = {
    startDate: new Date(this.props.order_date)
  }*/
  data = {
    id:this.props.id,
    name_val: this.props.name_val,
    order_date: this.props.order_date,
    unit: this.props.unit,
    discount: this.props.discount,
    in_stock: this.props.in_stock,
  }

  getData = (evt) => {
    switch(evt.target.name){
      case 'name_a':
        this.data.name_val=evt.target.value;
      break;
      case 'text1':
        this.data.unit=evt.target.value
      break;
      case 'text2':
        this.data.in_stock=evt.target.value
      break;
    }
    
  }

  dataSelection = (data) => {  
    this.data.order_date=data;
    document.getElementById("date"+this.props.id).value=data
  }

  saveData=()=>{    
    this.props.addInfo(this.data);
  }

  editData=()=>{
    document.getElementById("row"+this.props.id).className = 'flex--cont--def grid--row--container'    
    document.getElementById("edit"+this.props.id).className ="displayNone";
    document.getElementById("save"+this.props.id).className = "displayBlock";
    document.getElementById("delete"+this.props.id).className = "displayBlock";
    document.getElementById("actionBtn"+this.props.id).className = "displayNone";
    //this.props.editInfo(this.data);
  }

  saveEditedData=()=>{
    this.props.editInfo(this.props);
    document.getElementById("actionBtn"+this.props.id).className = "dropdown actionbutton";
    document.getElementById("edit"+this.props.id).className ="dropdown-item";
    document.getElementById("save"+this.props.id).className = "displayNone";
    document.getElementById("delete"+this.props.id).className = "displayNone";
    document.getElementById("row"+this.props.id).className = 'flex--cont--def grid--row--container noneEditableGrid'    
    
  }
  deleteData=()=>{    
    this.props.deleteInfo(this.props);
  }

  onDateSelect = () => {

  }
  onMouseOverHandler = (evt) => {

  }

  onMouseOutHandler = () => {

  }

  setCheckbox = () =>{
    debugger;
    var x = document.getElementsByClassName("chkdiv");
    
    var cnt = 0;
    for (var index = 0; index < x.length; index++) {
        if(x[index].checked == true)
          cnt = cnt  + 1;
    }
    
    var chk_all = document.getElementById("chk_all");
    if(cnt == x.length - 1){
      
      chk_all.checked = true;
    }
    else
      chk_all.checked = false;
  }


  render(){
    console.log('---------', this.state.order_date)
  return (
      <div id={"row"+this.props.id} className={this.props.editMode ? "flex--cont--def grid--row--container":"flex--cont--def grid--row--container noneEditableGrid" }>
        <div  className="grid--row--child--container">
            <label class="container">
            <input onChange={() => this.setCheckbox()} id={"chk_"+this.props.id} className="chkdiv" type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>    
        <div className="grid--row--child--container">
          {/*<Input type="select" onChange={(evt) => getData(evt)} name="name_a">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>*/}
          <Input type="text" defaultValue={this.props.name_val} placeholder="Name" />
        </div>
        <div className="grid--row--child--container">
          <DatePicker 
            id={'date'+this.props.id}
            name="txtDate"
            className="grid--calender--field form-control" 
            selected={new Date(this.props.order_date)}
            onChange={(e)=>this.dataSelection(e)}
          />
          {/*<Input type="date" name="dateTxt" defaultValue={this.props.order_date} />*/}
        </div>
        <div className="grid--row--child--container">
          <Input type="text" onChange={(evt) => this.getData(evt)} name="text1" defaultValue={this.props.unit} placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container">
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="grid--row--child--container">
          <Input 
            type="text" 
            name="text2"
           // value={this.props.in_stock}
           defaultValue={this.props.in_stock}
            onChange={(evt) => this.getData(evt)}
            placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container action--container">
          <div>
          
              
            {this.props.newRecord ? 
              <button onClick={()=> this.saveData()}>Save</button> 
              : 
              (<span>
                <div class="dropdown actionbutton" id={"actionBtn"+this.props.id}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <GoKebabVertical size={22} />
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button class="dropdown-item" id={"edit"+this.props.id} onClick={()=> this.editData()}><FaEdit size={22} /></button>
                    <button class="dropdown-item" onClick={()=> this.deleteData()}><FaTrashAlt size={22} /></button>
                  </div>
                </div>
                <button className="displayNone" id={"save"+this.props.id} onClick={()=> this.saveEditedData()}><FaRegSave size={22} /></button>
                <button className="displayNone" id={"delete"+this.props.id} onClick={()=> this.deleteData()}><FaTrashAlt size={22} /></button>
                </span>)}
            
          </div>
        </div>

      </div>
    )}
}

const mapDispatchToProps = dispatch => {
  return{
    addInfo:(info) => dispatch(actionType.addUserInfo(info)),
    editInfo:(info) => dispatch(actionType.editUserInfo(info)),
    deleteInfo:(info) => dispatch(actionType.deleteUserInfo(info)),
  }
}

export default connect(null, mapDispatchToProps)(GridRecord)