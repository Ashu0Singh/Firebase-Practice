import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'



function SignUp(){
  const [userData, setUserdata] = useState({
    userName:'',
    email:'',
    passOne:'',
    passTwo:'',
    error: ''
  });

  function onSubmitHandler(){

    setUserdata(prevValue => {
      
      return {
        ...prevValue,
        'error': prevValue.passOne === prevValue.passTwo ? "" : "Entered password doesn't match"
      }
    })
    
  }

  function handleChange(event){
    const {name , value } = event.target;
    setUserdata(event => {
      return {
          ...userData,
          [name] : value
        }
    })
  }

  return(
    <div>
      <h1>SignUp</h1>

      <input 
        type='text'
        onChange={handleChange}
        placeholder="Full Name"
        name='userName'
        value={userData.userName}
      />
      <br/>

      <input 
        type='email'
        onChange={handleChange}
        placeholder="Email"
        name='email'
        value={userData.email}
      />
      <br/>

      <input 
        type='password'
        onChange={handleChange}
        placeholder="Enter Password"
        name='passOne'
        value={userData.passOne}
      />
      <br/>

      <input 
        type='passTwo'
        onChange={handleChange}
        placeholder="Confirm Password"
        name='passTwo'
        value={userData.passTwo}
      />
      <br/>

      <button
        type='submit'
        onClick={onSubmitHandler}
      >Sign Up</button>

      {userData.error&&<p>{userData.error}</p>}
  </div>
  )
}

const SignUpLink = () => {
  return <p>Don't have an account <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
}

export default SignUp;
export {SignUpLink};