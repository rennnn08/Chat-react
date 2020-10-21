import React, { useState, SyntheticEvent, useContext, FC } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { User } from "../../Types";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { CurrentUserContext, UserContext } from "../../Provider";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type Props = {
  setauth: () => void;
}

const Login:FC<Props> =({setauth}) => { 

  const { register, handleSubmit, errors } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const navigate = useNavigate();

  const userstate = useContext(CurrentUserContext);

  const handleSuccessfulAuthentication = (data :any) =>{
    userstate.setUserState(data.user);
    userstate.setLoginStatus(true);
    navigate("/");
  }

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`,
    {
      user: {
        email: email,
        password: password,
      }
    },
    { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in){
        handleSuccessfulAuthentication(response.data)
      }
      else{
        toast(response.data.errors[0]);
        toast(response.data.errors[1]);
        console.log(response.data.errors)
      }
    }).catch(error => {
      console.log("registraion error", error)
    })
  }

  return(
    <Container component="main" maxWidth="xs" style={{backgroundColor:'white'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <form className={classes.form} noValidate　onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({required: true, pattern: /^\S+@\S+$/i})}
            error={Boolean(errors.email)}
            helperText={errors.email && "正しいメールアドレスを入力してください"}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({required: true})}
            error={Boolean(errors.password)}
            helperText={errors.password && "正しいパスワードを入力してください"}
            onChange={event => setPassword(event.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid container item justify="flex-end">
              <Button  onClick={setauth}>
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <ToastContainer/>

    </Container>
  );
}

export default Login;