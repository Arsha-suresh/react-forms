

import "../App.css";
import { useEffect, useState } from "react";
import {containsUpperCase, isPasswordLengthValid, validateEmail,isInputNotEmpty} from "./validationServices";
import {Error} from './errorcomponent.js';
import { ModalWin } from "./modal";
//import { Modal } from "./modal";
export function SimpleForm(){
     const [enteredName, setEnteredName]= useState('');
     const [touched, setTouched]= useState('');
     const [email, setEmail]= useState('');
     const [password, setpwdVal]= useState('');
     const [showModal, setShowModal]= useState(false);
     const [formValid, setFormValidity] = useState(false);
     const [validity, setValidity]= useState({isnameValid:false,isPwdvalid:false, isemailValid:false});
     const [errorText, setError] =useState({name:'name error', password:'password invalid', email:'emain error'});
     
      const btnClass = formValid?'btn btn-primary':'btn btn-secondary'
      
 
     useEffect(
        ()=>{
            console.log("effect");
            let formValidval=validity?.isnameValid && validity?.isPwdvalid && validity?.isemailValid;
            setFormValidity(formValidval);
            //btnClass = formValid?'btn btn-primary':'btn btn-secondary'
            console.log(formValid,btnClass);
        },[validity]
     );
     
     
    

     const nameChangeHandler =(event)=>{
        setEnteredName (event?.target?.value);
     }
     const passwordChangeHandler =(event)=>{
        setpwdVal (event?.target?.value);
     }
     const emailChangeHandler =(event)=>{
        setEmail (event?.target?.value);
     }

     const nameValidator =()=>{
        console.log('blurhandler');
        if(isInputNotEmpty(enteredName)){
            setValidity({...validity, isnameValid:true});
            setError({...errorText, name:''});
            return;
        }
       
        setValidity({...validity, isnameValid:false});
        setError( {...errorText, name:'Enter a name'});
        

     }
     const onClose=()=>{
        setShowModal(false);
     }


     const emailValidator =()=>{
        console.log('blurhandler');
        if(isInputNotEmpty(email)){
            if(validateEmail(email)){
                setValidity({...validity, isemailValid:true});
                setError( {...errorText,email:''});
                return;
            }
            setError( {...errorText,email:'invalid email , enter xx@xx.xx'});
            return;
        }
               
        setValidity({...validity, isemailValid:false});
        setError( {...errorText,email:'Enter an email'});

     }

     const pwdValidator =()=>{
        console.log('blurhandler');
        if(isInputNotEmpty(password)){
            if(isPasswordLengthValid(password) && containsUpperCase(password) ){
            setValidity({...validity, isPwdvalid:true});
            setError( {...errorText,password:''});
            return;
            }
            setValidity({...validity, isPwdvalid:false});
            setError( {...errorText,password:'password min length =8 and must contains upper case'});
            return;
        }
        
        setValidity({...validity, isPwdvalid:false});
        setError( {...errorText,password:'Enter a password'});

     }


     /**
      * you can get user input using state and ref 
      * @param  event 
      */
     const onFormSubmit=(event)=>{
        event.preventDefault();
        setShowModal(true);
        console.log(enteredName);
        console.log(password);     


        setEnteredName('');
        setpwdVal('');
        setEmail('');
        setTouched(false);
        //(passwordRef.current.value='' is not recommended as it directly updates the DOM
     }

     return(
        <>
        <div className="d-flex justify-content-center mt-5 p18 bg-blue">
     <form className="center bg-form " onChange={()=>{ console.log("touched"); setTouched(true)}}>
        <div className="form-control form-group p18 my-2 mx-4">
            <label htmlFor ='name'>
                Please enter your Name
            </label>
            <input className="mx-2" type="text" id="name" onChange={nameChangeHandler} onBlur={nameValidator}></input>
            {(touched && !validity?.isnameValid )?(<Error errortext={errorText.name}></Error>):''
}
        </div>
        <div className="form-control my-2 mx-4">
            <label htmlFor ='email'>
                Please enter your Email
            </label>
            <input className="mx-2" type="text" id="email"   onChange={emailChangeHandler} onBlur={emailValidator} ></input>
            {(touched && !validity?.isemailValid )?(<Error errortext={errorText.email}></Error>):''
} 
        </div>
        <div className="form-control my-2 mx-4">
            <label htmlFor ='pwd'>
                Please enter your Password
            </label>
            <input className="mx-2" type="text"  id="email"   onChange={passwordChangeHandler}  onBlur={pwdValidator}></input>
           
            {(touched && validity?.isPwdvalid===false )?(<Error errortext={errorText.password}></Error>):''
} 
           

        </div>
        <div className="form-actions" >
            <button className={btnClass} disabled={!formValid} onClick={onFormSubmit}>Submit</button>

        </div>
     </form>
     </div>
     <ModalWin Show={showModal} showText="Registration Is Success !!!" onClose={onClose}></ModalWin>
     </>
     )
}
