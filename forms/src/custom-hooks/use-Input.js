import { useState } from "react";

 const useInput=(validatevalueFn)=> {
    const [enteredInput, setEnteredInput]= useState('');
     const [touched, setTouched]= useState(false);
     const isValid= validatevalueFn(enteredInput);
     const hasError = touched&& (!isValid);

     const  inputChangeHandler =(event)=>{
        setEnteredInput(event.target.value);
     }
     const  inputBlurHandler =()=>{
        setTouched(true);
     }


     return {value: enteredInput, hasError,  isValid, isTouched:touched, inputChangeHandler,inputBlurHandler};

     
};

export default  useInput   ;