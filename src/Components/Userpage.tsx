import React, { FC, useContext, useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { CurrentUserContext } from "../Provider";
import { User } from "../Types";
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 20,
      backgroundColor: 'white',
      minHeight: 500,
    },
    name: {
      paddingTop: 20,
      margin: 20,
      fontSize: 50,
    },
    prof: {
      margin: 20,
      fontSize: 25,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);


const Userpage: FC = () => {
  const [user, setUser] = useState<User>();

  const User = useContext(CurrentUserContext);

  const classes = useStyle();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/users/:id`,
    {
      params: {
        user_id: User.userstate?.id
      }
    })
    .then((results) => {
      console.log(results)
      setUser(results.data)
    })
    .catch((data) => {
      console.log(data)
    })
  },[]);


  const changeProf = () => {
    navigate("/changeprof");
  }

  return(
    <Container className={classes.root}>
      <List>
        <ListItem>
        {user &&
          <ListItemAvatar>
              <Avatar src={ user.image  ? user.image : "" } className={classes.large} />
          </ListItemAvatar>
        }
          <ListItemText primary={<h1 className={classes.name}>{user?.name}</h1>}/>
        </ListItem>
      </List>
      
      <Button
        variant="contained"
        color="primary"
        onClick={changeProf}
      >
        編集
      </Button>
      
      <p className={classes.prof}>{user?.profile}</p>
    </Container>
  )
};
export default Userpage;