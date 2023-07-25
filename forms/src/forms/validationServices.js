export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  export const isInputNotEmpty =(text)=>{
     return text.trim()!=='';
  }

  export const isPasswordLengthValid =(text)=>{
    return text.length>8;
 }

 export const containsUpperCase = (str) => str !== str.toLowerCase();
 