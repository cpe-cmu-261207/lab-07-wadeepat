import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useReducer, useState } from "react";
import {context} from "../index.js";

const CourseForm = () => {
  const addCourse = useContext(context)
  //const inputData = {name:"",grd:"A",crd:"1"};
  const [state,dispatch] = useReducer((prev,action) => {
    switch(action.type){
      case 'setname' :
        return {...prev,name: action.value}
      case 'setgrd' :
        return {...prev,grd : action.value}
      case 'setcrd' :
        return {...prev,crd : action.value}
      default : throw new Error();
    }
  },{name:"",grd:"A",crd:"1"})

  return (
    <>
       <form onSubmit ={
        e => {e.preventDefault();
          addCourse(state)
          document.getElementById("subject").value=""
        }}>
        
        <input 
          placeholder="Subject"
          id="subject"
          type="text" 
          onChange = {e=> 
           dispatch({type :'setname',value : e.currentTarget.value})
        }/>

        <label>Grade</label>
        <select 
          onChange = {e=> 
            dispatch({type : 'setcrd',value : e.currentTarget.value})
          }>
          {CREDITS.map(item=>{
            return <option value={item}>{item}</option>
          })}
        </select>     
           
        <label>Grade</label>
        <select 
          onChange = {e=>  
            dispatch({type : 'setgrd',value : e.currentTarget.value})
          }>
          {GRADES.map(item => {
            return <option value={item.name}>{item.name}</option>
          })}
        </select>    
          
        <button 
          id="add" 
          type="submit">
        ADD</button> 

       </form>
    </>
  );
};

export default CourseForm;