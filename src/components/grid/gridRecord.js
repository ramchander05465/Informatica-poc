import React from 'react'
import {connect} from 'react-redux'
import * as actionType from '../../actions'
import DatePicker from "react-datepicker"
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Input} from 'reactstrap'

const GridRecord = (props) => {
  
  var data = {
    id:props.id,
    name_val: props.name_val,
    order_date: props.order_date,
    unit: props.unit,
    discount: props.discount,
    in_stock: props.in_stock,
  }

  const getData = (evt) => {
    switch(evt.target.name){
      case 'name_a':
        data.name_val=evt.target.value;
      break;
      case 'txtDate':
        data.order_date=evt.target.value
      break;
      case 'text1':
        data.unit=evt.target.value
      break;
      case 'text2':
        data.in_stock=evt.target.value
      break;
    }
    
  }

  const saveData=()=>{    
    props.addInfo(data);
  }

  const editData=()=>{    
    props.editInfo(data);
  }
  const deleteData=()=>{    
    props.deleteInfo(data);
  }

  const onMouseOverHandler = (evt) => {

  }

  const onMouseOutHandler = () => {

  }
  return (
      <div className={props.isEditable ? "flex--cont--def grid--row--container":"flex--cont--def grid--row--container noneEditableGrid" }>      
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
          {/*<DatePicker className="grid--calender--field" />*/}
          <Input type="date" name="dateTxt" defaultValue={Date('12-12-2018')} />
        </div>
        <div className="grid--row--child--container">
          <Input type="text" onChange={(evt) => getData(evt)} name="text1" defaultValue={props.unit} placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container">
          <input type="checkbox" />
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
              <span><button onClick={()=> editData()}>Edit</button><button onClick={()=> deleteData()}>Delete</button></span>}
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