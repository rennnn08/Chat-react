import React, { useState, SyntheticEvent, useContext, FC } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CurrentUserContext, UserContext } from "../../Provider";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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


interface HomeProps {
  handleSuccessfulAuthentication: (data: any) => void;
}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type Props = {
  setauth: () => void;
}

const Registration:FC<Props> = ({setauth}) => { 
  const { register, handleSubmit, errors } = useForm();
  const user = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSuccessfulAuthentication = (data :any) =>{
    user.setUserState(data.user);
    user.setLoginStatus(true);
    navigate("/")
  }

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/signup`,
    {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    },
    { withCredentials: true }
    ).then(response => {

      if (response.data.status === 'created'){
        handleSuccessfulAuthentication(response.data)
      }
      else {
        toast(response.data.errors)
        console.log(response.data)
      }

    }).catch(error => {
      console.log("registraion error", error)
    })
  }

  return(
    <>
      <Container component="main" maxWidth="xs" style={{backgroundColor:'white'}}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  variant="outlined"
                  fullWidth
                  id="Name"
                  label="Name"
                  inputRef={register({required: true})}
                  error={Boolean(errors.name)}
                  helperText={errors.name && "名前を入力してください"}      
                  onChange={event => setName(event.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={register({required: true, pattern: /^\S+@\S+$/i})}
                  error={Boolean(errors.email)}
                  helperText={errors.email && "正しいメールアドレスを入力してください"}      
                  onChange={event => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputRef={register({required: true})}
                  error={Boolean(errors.email)}
                  helperText={errors.password && "正しいパスワードを入力してください"}      
                  onChange={event => setPassword(event.target.value)}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="passwordconfirmation"
                  label="PasswordConfirmation"
                  type="password"
                  id="password"
                  inputRef={register({required: true})}
                  error={Boolean(errors.passwordconfirmation)}
                  helperText={errors.passwordconfirmation && "正しいパスワードを入力してください"}      
                  onChange={event => setPasswordConfirmation(event.target.value)}
                  autoComplete="current-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={setauth} >
                  Already have an account? Sign in
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <ToastContainer/>
      </Container>

    </>
  );
}

export default Registration;