import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from "../pages/SignupForm";
import FormPreview from '../pages/PreviewPage';

const Rout = () => {
    return (
           
                <Router>
                    <Routes>
                         <Route path="/" element={<InputForm />} />
                         <Route path="/preview" element={<FormPreview />} />
                    </Routes>
                </Router>)
};

export default Rout;