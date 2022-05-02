import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [inputvalue, setInputvalue] = useState('');

  const handleinputChange = (e)=>{        
        setInputvalue(e.target.value);   
  }

  const handleSubmit = (e)=>{
        e.preventDefault();   

        if (inputvalue.trim().length > 2){
            setCategories(cats=>[inputvalue, ...cats]);
            setInputvalue('');
        }        
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type = "text" value={ inputvalue } onChange = { handleinputChange }></input>
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
export default AddCategory