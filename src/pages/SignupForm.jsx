import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputFeild from '../components/Input';
import Button from '../components/Button';
import '../styles/SignupForm.css'
const User = () => {

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const navigate = useNavigate()

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required')
    });

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema)
});

const handleToggle = () => {
  if (type === 'password') {
      setIcon(eye);
      setType('text');
  } else {
      setIcon(eyeOff);
      setType('password');
  }
};

    const onSubmit = (data) => {
      navigate('/preview', {state : data})
      console.log(data)
  }

return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}> 
      <h1 className='head'>Sign Up</h1>
      <div className="form-group">
      <label className='lb'>User Name</label>
      <InputFeild
        id = 'username'
        register = {register}
      />
      {errors.username && <p className="error">{errors.username.message}</p>}
      </div>
      <div className="form-group">
        <label className='lb'>Email</label>
        <InputFeild
          id = 'email'
          type='email'
          register = {register}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label className='lb'>Password</label>
        <InputFeild
          id = 'password'
          type={type}
          register = {register}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <span onClick={handleToggle} className='pass-icon'><Icon icon={icon} size={25}/></span>
        </div>
        
        <Button type="submit" />
    </form>
  );
}

export default User;

