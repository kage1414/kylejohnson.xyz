import React, { FC, ReactElement, useState } from 'react';
import axios from 'axios';

interface IProps {

}

const LoginPage: FC<IProps> = (): ReactElement => {

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(e);

    axios.post('/login', {
      username: usernameInput,
      password: passwordInput
    })
      .then((response) => {
        console.log(response);
      });

  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }}>
      <div style={{
        borderRadius: '7px',
        border: 'solid 1px black',
        padding: '5px'
      }}>
        <form onSubmit={handleSubmit}>
          <label>
            username
            <input
              type={'text'}
              onChange={(e) => {
                setUsernameInput(e.target.value);
              }} />
          </label>
          <br />
          <br />
          <label>
            password
            <input type={'password'}
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }} />
          </label>
          <br />
          <br />
          <input type={'submit'} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
