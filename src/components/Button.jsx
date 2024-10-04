import React from 'react';
import '../styles/Button.css'
const Button = (type) => {
    
    return (
        <div>
            <button type={type} id='btn' className='submit-btn'>Submit</button>
        </div>
    )
}

export default Button