import React, { FC, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/auth/Login';
import Userpage from './Components/Userpage';
import ChangeProf from "./Components/ChangeProf";
import { CurrentUserContext } from "./Provider";
import actionCable from 'actioncable';
import Registration from 'Components/auth/Registrations';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import  PrivateRoute from "./PrivateRoute";
import { Box } from '@material-ui/core';

import './styles/App.css';
const title = 'Home';

type Props = {
  cableApp :actionCable.Cable;
}

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appButton: {
    textTransform: 'none',
  },
}));



const App: FC<Props> = ({ cableApp }) => {

  const classes = useStyles();

  const user = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    user.setLoginStatus(false);
    user.setUserState(null);
    navigate("/login");
  }

  const handleLogoutClick = () => {
    axios.delete("http://localhost:3001/logout",{ withCredentials: true })
      .then(response => {
        handleLogout()
      }).catch(error => console.log("ログアウトエラー", error))
  }
  

  return (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{color: 'white', textDecoration: "none" }}>YUUTA</Link>
          </Typography>
          { (() => {
            try{
            if (user.userstate){
            return(
              <>
                <Button className={classes.appButton}><Link to={'/mypage'} style={{color: 'white', textDecoration: "none"}}>{user.userstate.name}</Link></Button>
                <Button color="inherit"　onClick={handleLogoutClick}>ログアウト</Button>
              </>
            );}
            }
            catch{
              return<></>
            }
          })()}
        </Toolbar>
      </AppBar>
      
    </div>

    <Routes>
      <PrivateRoute  path="/" component={Home} cableApp={cableApp} redirectLink="/login"/>
      <PrivateRoute path="/mypage" component={Userpage} redirectLink="/login"/>
      <Route path="/sign-up" element={ user && user.userstate ? <Home cableApp={cableApp}/>
        : <Registration/> }/>
      <Route path="/login" element={user && user.loginStatus ? <Home cableApp={cableApp}/> 
        : <Login/> }/>
      <PrivateRoute path="/changeprof" component={ChangeProf} redirectLink="/login"/>
      <PrivateRoute path="/home" component={Home} cableApp={cableApp} redirectLink="/login"/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
  );
};

export default App;
