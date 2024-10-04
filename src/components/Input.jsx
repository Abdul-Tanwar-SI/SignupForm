import React from 'react';
import '../styles/Input.css'


const InputFeild = ({ id , type="text" ,name="Input Feild",placeholder = "Enter Your Details",register}) =>
    {
        return (
            <div className='input-container'>
              <input
                id ={id}
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(id)}
              />
            </div>
          );
    }

export default InputFeild;