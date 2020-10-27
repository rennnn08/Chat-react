import React, { FC, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Components/Home';
import Auth from "./Components/auth/auth";
import Userpage from './Components/Userpage';
import ChangeProf from "./Components/ChangeProf";
import { CurrentUserContext, RoomContext } from "./Provider";
import actionCable from 'actioncable';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import  PrivateRoute from "./PrivateRoute";

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
  const room = useContext(RoomContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    user.setLoginStatus(false);
    user.setUserState(null);
    room.setRoom_id(null);
    navigate("/auth");
  }

  const handleLogoutClick = () => {
    axios.delete(`http:${process.env.REACT_APP_API_URL}/logout`,{ withCredentials: true })
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
      <PrivateRoute  path="/" component={Home} cableApp={cableApp} redirectLink="/auth"/>
      <PrivateRoute path="/mypage" component={Userpage} redirectLink="/auth"/>
      <Route path="/auth" element={user && user.loginStatus ? <Home cableApp={cableApp}/> 
        : <Auth/> }/>
      <PrivateRoute path="/changeprof" component={ChangeProf} redirectLink="/auth"/>
      <PrivateRoute path="/home" component={Home} cableApp={cableApp} redirectLink="/auth"/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
  );
};

export default App;
