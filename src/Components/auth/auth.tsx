import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Login from "./Login";
import Registrations from "./Registrations";
import CHAT from '../../styles/images/CHAT.png'

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
    <div style={{backgroundColor:"white", minHeight:"89vh"}}>
      <Container maxWidth="md">
    <Grid container>
      <Grid item xs={6}>
        <img src={CHAT} alt="chat" />
      </Grid>
      <Grid item xs={6}>
        {auth ? <Registrations setauth={setauth}/> : <Login setauth={setauth}/>}
      </Grid>
    </Grid>
    </Container>
    </div>
  )
}

export default Auth;