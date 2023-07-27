

import "../App.css";
import {  useState } from "react";
import {containsUpperCase, isPasswordLengthValid, validateEmail,isInputNotEmpty} from "./validationServices";
import {Error} from './errorcomponent.js';
import { ModalWin } from "./modal";
import useInput from "../custom-hooks/use-Input";
//import { Modal } from "./modal";
export function SimpleForm(){
 
     const [showModal, setShowModal]= useState(false);
     //const [formValid, setFormValidity] = useState(false);
    // const [validity, setValidity]= useState({isnameValid:false,isPwdvalid:false, isemailValid:false});
     const [errorText, setError] =useState({name:'name error', password:'password invalid', email:'emain error'});
     
   
     
     const nameValidator =(val)=>{
        if(isInputNotEmpty(val)){
           // //setError({...errorText, name:''});
            return true;
        }    
        return false;   
       // //setError( {...errorText, name:'Enter a name'}); 
     }
     const onClose=()=>{
        setShowModal(false);
     }


     const emailValidator =(email)=>{
        console.log('blurhandler');
        if(isInputNotEmpty(email)){
            if(validateEmail(email)){
                //setError( {...errorText,email:''});
                return true;
            }
            //setError( {...errorText,email:'invalid email , enter xx@xx.xx'});
            return false;
        }
               
   
        //setError( {...errorText,email:'Enter an email'});

     }

     const pwdValidator =(password)=>{
        console.log('blurhandler');
        if(isInputNotEmpty(password)){
                     if(isPasswordLengthValid(password) && containsUpperCase(password) ){
           
            //setError( {...errorText,password:''});
            return true;
            }

            //setError( {...errorText,password:'password min length =8 and must contains upper case'});
            return false;
        }
    ;
        //setError( {...errorText,password:'Enter a password'});

     }

     const 
     {value:NameInputValue, hasError:NameInputHasError ,isValid:isnameValid, 
      isTouched:nameTouched ,inputBlurHandler:NameBlurHandler,
      inputChangeHandler:nameChangeHandler}= useInput(nameValidator);
     const 
     {value:EmailInputValue, hasError:EmailInputHasError,
       isValid:isemailValid , isTouched:emailTouched ,inputBlurHandler:EmailBlurHandler,
       inputChangeHandler:emailChangeHandler}= useInput(emailValidator);
     const 
     {value:PwdInputValue, hasError:PwdInputHasError,isValid:isPwdvalid , isTouched:pwdTouched
      ,inputBlurHandler:PwdBlurHandler,
      inputChangeHandler:PwdChangeHandler}= useInput(pwdValidator);
  
      const formValid = !NameInputHasError && !EmailInputHasError && !PwdInputHasError;
      const btnClass = formValid?'btn btn-primary':'btn btn-secondary'
      const succesMsg = "Registration sucess for"+NameInputValue+EmailInputValue+PwdInputValue;

     /**
      * you can get user input using state and ref 
      * @param  event 
      */
     const onFormSubmit=(event)=>{
        event.preventDefault();
        setShowModal(true);
      
        //(passwordRef.current.value='' is not recommended as it directly updates the DOM
     }

     return(
        <>
        <div className="d-flex justify-content-center mt-5 p18 bg-blue">
     <form className="center bg-form " >
        <div className="form-control form-group p18 my-2 mx-4">
            <label htmlFor ='name'>
                Please enter your Name
            </label>
            <input className="mx-2" type="text" id="name" onChange={nameChangeHandler} 
            onBlur={NameBlurHandler}></input>
            {(nameTouched && !isnameValid )?(<Error errortext={errorText.name}></Error>):''
}
        </div>
        <div className="form-control my-2 mx-4">
            <label htmlFor ='email'>
                Please enter your Email
            </label>
            <input className="mx-2" type="text" id="email"   onChange={emailChangeHandler} onBlur={EmailBlurHandler} ></input>
            {(emailTouched && !isemailValid )?(<Error errortext={errorText.email}></Error>):''
} 
        </div>
        <div className="form-control my-2 mx-4">
            <label htmlFor ='pwd'>
                Please enter your Password
            </label>
            <input className="mx-2" type="text"  id="email"   onChange={PwdChangeHandler}  onBlur={PwdBlurHandler}></input>
           
            {(pwdTouched && isPwdvalid===false )?(<Error errortext={errorText.password}></Error>):''
} 
           

        </div>
        <div className="form-actions" >
            <button className={btnClass} disabled={!formValid} onClick={onFormSubmit}>Submit</button>

        </div>
     </form>
     </div>
     <ModalWin Show={showModal} showText={succesMsg} onClose={onClose}></ModalWin>
     </>
     )
}
