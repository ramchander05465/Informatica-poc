import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../actions'
import DatePicker from "react-datepicker"
import { GoKebabVertical } from "react-icons/go";
import { FaRegSave, FaEdit, FaTrashAlt } from "react-icons/fa"
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Input} from 'reactstrap'
import "react-datepicker/dist/react-datepicker.css";

//const GridRecord = (props) => {
  class GridRecord extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: this.props.order_date,
        id:this.props.id,
        name_val: this.props.name_val,
        order_date: this.props.order_date,
        unit: this.props.unit,
        discount: this.props.discount,
        in_stock: this.props.in_stock,
      };
      this.handleChange = this.handleChange.bind(this);
    }
    
  getData = (evt) => {
    switch(evt.target.name){
      case 'name-val':
        var regex = /^[A-Za-z0-9 ]{3,20}$/;
        if (evt.target.value !== '' || regex.test(evt.target.value)) {
          this.setState({name_val:evt.target.value});
        }        
      break;
      case 'text1':
        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex
        
        if (evt.target.value === '' || re.test(evt.target.value)) {
          
          this.setState({unit:evt.target.value});
        }
      break;
      case 'text2':
      const stock = /^(?:Yes|No)$/;
      if (evt.target.value === '' || stock.test(evt.target.value)) {
        
        this.setState({in_stock:evt.target.value});
      }
        
      break;
    }
    
  }

  dataSelection = (data) => {  
    this.data.order_date=data;
    document.getElementById("date"+this.props.id).value=data
  }

  saveData=()=>{   
    let data = {
      id:this.state.id,
      name_val: this.state.name_val,
      order_date: this.state.order_date,
      unit: this.state.unit,
      discount: this.state.discount,
      in_stock: this.state.in_stock,
    }
    this.props.addInfo(data);
  }

  editData=()=>{
    document.getElementById("row"+this.props.id).className = 'flex--cont--def grid--row--container'    
    document.getElementById("edit"+this.props.id).className ="displayNone";
    document.getElementById("save"+this.props.id).className = "displayBlock btn-save";
    document.getElementById("delete"+this.props.id).className = "displayBlock btn-delete";
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

  handleChange(date) {
    this.setState({startDate: date});
  }

  handleSelect(data){
    console.log(data)
  }

  onMouseOverHandler = (evt) => {

  }

  onMouseOutHandler = () => {

  }

  setCheckbox = (evt) =>{
    
    var x = document.getElementsByClassName("chkdiv");
    var currentclickid = evt.currentTarget.id;
    var parentid = currentclickid.replace('chk_','row');
    if(evt.currentTarget.checked)
    {
        var currentrow = document.getElementById(parentid);
        currentrow.classList.add('rowselected');
    }
    else{
        var currentrow = document.getElementById(parentid);
        currentrow.classList.remove('rowselected');
    }
    var selectedrowcount = document.getElementsByClassName('rowselected');
    this.props.selectedcheckbox(selectedrowcount.length - 1);
    var chk_all = document.getElementById("chk_all");
    
    if(selectedrowcount.length > this.props.pagecount){ 
      chk_all.checked = true;
    }
    else{
      chk_all.checked = false;
    }
  }

  setrowselection = (evt) =>{
    //alert(evt.currentTarget.id);
    var x = document.getElementById(evt.currentTarget.id);
    x.classList.add('rowselected');
  } 


  render(){
  return (
      <div  id={"row"+this.props.id} className={this.props.editMode ? "flex--cont--def grid--row--container":"flex--cont--def grid--row--container noneEditableGrid" }>
        <div  className="grid--row--child--container">
            <label className="checkbox-container">
              <input onChange={(evt) => this.setCheckbox(evt)} id={"chk_"+this.props.id} className="chkdiv" type="checkbox" />
              <span className="checkmark"></span>
            </label>
        </div>    
        <div className="grid--row--child--container">
          <Input type="text" onChange={(evt) => this.getData(evt)} name = "name-val" value={this.state.name_val} placeholder="Name" />
        </div>
        <div className="grid--row--child--container">
          <DatePicker
            className="grid--calender--field form-control"
            onSelect={this.handleSelect}
            selected={new Date(this.state.startDate)}
            onChange={this.handleChange}
          />
        </div>
        <div className="grid--row--child--container">
          <Input type="text" onChange={(evt) => this.getData(evt)} name="text1" value={this.state.unit} placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container">
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="grid--row--child--container instockinput">
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
                <div className="dropdown actionbutton" id={"actionBtn"+this.props.id}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <GoKebabVertical size={18} />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" id={"edit"+this.props.id} onClick={()=> this.editData()}><FaEdit size={18} /></button>
                    <button className="dropdown-item" onClick={()=> this.deleteData()}><FaTrashAlt size={18} /></button>
                  </div>
                </div>
                <button className="displayNone" id={"save"+this.props.id} onClick={()=> this.saveEditedData()}><FaRegSave size={18} /></button>
                <button className="displayNone" id={"delete"+this.props.id} onClick={()=> this.deleteData()}><FaTrashAlt size={18} /></button>
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