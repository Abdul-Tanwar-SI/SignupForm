import React from 'react';
import { useLocation } from 'react-router-dom'; 
import '../styles/PreviewPage.css'

const FormPreview = () => {
    const location = useLocation();
    const formdata = location.state;
    console.log(location.state)

    return (
        <div className='container'>
            <h1 className='head'>Preview</h1>
            {formdata ? (
                <div className='details'>
                    <p>Username : {formdata.username}</p>
                    <p>Email : {formdata.email}</p>
                    <p>Password : {formdata.password}</p>
                </div>
            ) : (
                <p>No form data available.</p>
            )}
        </div>
    );
};

export default FormPreview;