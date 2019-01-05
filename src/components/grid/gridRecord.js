import React from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../actions'
import DatePicker from "react-datepicker"
import { GoKebabVertical } from "react-icons/go";
import { FaRegSave, FaEdit, FaTrashAlt } from "react-icons/fa"
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Input} from 'reactstrap'

const GridRecord = (props) => {
  
  var isEdit;

  var data = {
    id:props.id,
    name_val: props.name_val,
    order_date: props.order_date,
    unit: props.unit,
    discount: props.discount,
    in_stock: props.in_stock,
  }

  const getData = (evt) => {
    console.log(evt)
    switch(evt.target.name){
      case 'name_a':
        data.name_val=evt.target.value;
      break;
      case 'text1':
        data.unit=evt.target.value
      break;
      case 'text2':
        data.in_stock=evt.target.value
      break;
    }
    
  }

  const dataSelection = (data) => {  
    data.order_date=data;
    document.getElementById("date"+props.id).value=data
  }

  const saveData=()=>{    
    props.addInfo(data);
  }

  const editData=()=>{
    document.getElementById("row"+props.id).className = 'flex--cont--def grid--row--container'    
    document.getElementById("edit"+props.id).className ="displayNone";
    document.getElementById("save"+props.id).className = "displayBlock";
    document.getElementById("delete"+props.id).className = "displayBlock";
    document.getElementById("actionBtn"+props.id).className = "displayNone";
    //props.editInfo(data);
  }

  const saveEditedData=()=>{
    props.editInfo(data);
    document.getElementById("actionBtn"+props.id).className = "dropdown actionbutton";
    document.getElementById("edit"+props.id).className ="dropdown-item";
    document.getElementById("save"+props.id).className = "displayNone";
    document.getElementById("delete"+props.id).className = "displayNone";
    document.getElementById("row"+props.id).className = 'flex--cont--def grid--row--container noneEditableGrid'    
    
  }
  const deleteData=()=>{    
    props.deleteInfo(data);
  }

  const onDateSelect = () => {

  }
  const onMouseOverHandler = (evt) => {

  }

  const onMouseOutHandler = () => {

  }
  return (
      <div id={"row"+props.id} className={props.editMode ? "flex--cont--def grid--row--container":"flex--cont--def grid--row--container noneEditableGrid" }>      
        <div className="grid--row--child--container">
          {/*<Input type="select" onChange={(evt) => getData(evt)} name="name_a">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>*/}
          <Input type="text" defaultValue={props.name_val} placeholder="Name" />
        </div>
        <div className="grid--row--child--container">
          <DatePicker 
            id={'date'+props.id}
            name="txtDate"
            className="grid--calender--field form-control" 
            selected={new Date(props.order_date)}
            onChange={(e)=>dataSelection(e)}
          />
          {/*<Input type="date" name="dateTxt" defaultValue={props.order_date} />*/}
        </div>
        <div className="grid--row--child--container">
          <Input type="text" onChange={(evt) => getData(evt)} name="text1" defaultValue={props.unit} placeholder="with a placeholder" />
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
           // value={props.in_stock}
           defaultValue={props.in_stock}
            onChange={(evt) => getData(evt)}
            placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container action--container">
          <div>
          
              
            {props.newRecord ? 
              <button onClick={()=> saveData()}>Save</button> 
              : 
              (<span>
                <div class="dropdown actionbutton" id={"actionBtn"+props.id}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <GoKebabVertical size={22} />
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button class="dropdown-item" id={"edit"+props.id} onClick={()=> editData()}><FaEdit size={22} /></button>
                    <button class="dropdown-item" onClick={()=> deleteData()}><FaTrashAlt size={22} /></button>
                  </div>
                </div>
                <button className="displayNone" id={"save"+props.id} onClick={()=> saveEditedData()}><FaRegSave size={22} /></button>
                <button className="displayNone" id={"delete"+props.id} onClick={()=> deleteData()}><FaTrashAlt size={22} /></button>
                </span>)}
            
          </div>
        </div>

      </div>
    )
}

const mapDispatchToProps = dispatch => {
  return{
    addInfo:(info) => dispatch(actionType.addUserInfo(info)),
    editInfo:(info) => dispatch(actionType.editUserInfo(info)),
    deleteInfo:(info) => dispatch(actionType.deleteUserInfo(info)),
  }
}

export default connect(null, mapDispatchToProps)(GridRecord)