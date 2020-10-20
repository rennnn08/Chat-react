import React, { useState } from 'react';
import Login from "./Login";
import Registrations from "./Registrations";

const Auth = () => {
  const [auth, setAuth] = useState(false);

  const setauth = () => {
    if(auth){
      setAuth(false);
    }else{
      setAuth(true);
    }
  }
  return (
    <>
      {auth ? <Registrations setauth={setauth}/> : <Login setauth={setauth}/>}
    </>
  )
}

export default Auth;