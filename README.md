# react-forms
Simple react project on forms and validation
  every Page renders in layout  Dummy header and footer section. 
  For route '/', is the main route
   there is another route 'product'.
    # '/regForms' is the child route of '/' which get  loaded in the <Outlet>
    There is an error page added for handling error routes, if there a routing error occurs it navigates to home page '/';
    
 # SimpleForm element's input form control is  painted using custom hooks useInput  which accepts a  form validation function.
 # use Input has an enteredInput which  is  managed by site.
 #inputChangeHandler and  inputBlurHandler is returned by use Input
