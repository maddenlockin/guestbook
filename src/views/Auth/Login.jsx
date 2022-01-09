import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const { setUser } = useUser();
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccess = auth.login(formState.email, formState.password);

    if (loginSuccess) {
      setUser(formState.email);
      history.replace(from.pathname);
    } else {
      setError('Invalid credentials');
    }
  };
  
  return (
    <>
      <form onSubmit={(e) => handleLogin(e)} className='login-form' >
        <label htmlFor='email'>Email</label>
        <input
          required
          id='email'
          name='email'
          type='email'
          value={formState.email}
          onChange={handleFormChange}
        />{' '}
        <label htmlFor='password'>Password</label>
        <input
          required
          id='password'
          name='password'
          type='password'
          value={formState.password}
          onChange={handleFormChange}
        />{' '}
        <button type='submit' aria-label='Sign In'>
          Sign in
        </button>
      </form>
      {error && <h2>{error}</h2>}
    </>
  );
}
