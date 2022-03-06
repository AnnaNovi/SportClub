import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import {setUserAction} from '../store/userReducer';
import './Auth.css';

function Auth() {

  const authStatus = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState('Администратор');
  const [userPassword, setUserPassword] = useState('');

  function handleAuthForm(event: React.FormEvent){
    event.preventDefault();
    const userAuth = {
      user: user,
      password: userPassword
    }
    const url = 'http://localhost:3001/auth'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userAuth)
    })
      .then(response => response.json())
      .then(body => currentUser(body));
  }
  function currentUser(currentUser:string) {
    dispatch(setUserAction(currentUser));
    if(currentUser === 'admin') {
      navigate('/admin/clients');
    } else if(currentUser === 'head') {
      navigate('/head');
    }
  }

  return ( 
    <div className="Auth">
      <form className="entryForm" onSubmit={(event) => handleAuthForm(event)}>
        <select
          name="userName"
          id="userName"
          className="entryFormItem entryFormItemSelect"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        >
          <option id="selectAdmin" value="Администратор">Администратор</option>
          <option id="selectHead" value="Директор">Директор</option>
        </select>
        <input
          id="password"
          type="password"
          className="entryFormItem"
          placeholder="Пароль"
          name="userPassword"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
        />
        <p id="wrong" style={(authStatus === 'try') ? {opacity: '1'} : {opacity: '0'}} className="entryFormWrong">Неверный пароль</p>
        <input
          type="submit"
          id="entry-button"
          className="entryFormSend"
          value="Войти в систему"
        />
      </form>
      <div className="fillTestBtnList">
        <button className='fillTestPassword' onClick={() => setUserPassword('djgndknf')}>Fill Admin Password</button>
        <button className='fillTestPassword' onClick={() => setUserPassword('ladmkasdmkl34134')}>Fill Head Password</button>
      </div>
      
    </div>
  );
}

export default Auth;