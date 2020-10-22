import React, { FC, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Messages from './Chat/Messages';
import { Message } from '../../Types';
import { CurrentUserContext, RoomContext } from "../../Provider";
import actionCable from 'actioncable';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Invite from './Invite';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../../styles/ChatRoom.css';

type Props = {
  cableApp :actionCable.Cable;
  roomsGet: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
      marginTop: "10px",
    },
  }),
);

const Chat: FC<Props> = ({cableApp, roomsGet}) =>{
  const currentUser = useContext(CurrentUserContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [errors, setErrors] = useState("");
  const [user_ids, setUser_ids] = useState<number[]>([]);
  const [invitation, setInvitation] = useState(false);
  const room = useContext(RoomContext);
  const [room_name, setRoom_name] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const updateMessage = (messages: Message[]) => {
    setMessages(messages)
  }

  const updateUsers = (users: number[]) => {
    setUser_ids(users);
  }

  const getUsers = () => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/getuser_ids`,
    {
      params: {
        room_id: room.room_id
      }
    })
    .then((results) => {
      updateUsers(results.data)
      
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  const setupSubscription = () => {
    cableApp.subscriptions.create({
      channel: 'MessagesChannel',room_id: room.room_id},{
      received: (data) => {
        const scrollArea = document.getElementById("scroll-area");
        updateMessage(data)
        console.log(data)
        if (scrollArea) {
          scrollArea.scrollTop = scrollArea.scrollHeight
        }
        
      }
    })
  }

  useEffect(() => {
    setupSubscription();
  },[room.room_id]);

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/getuser_ids`,
    {
      params: {
        room_id: room.room_id
      }
    })
    .then((results) => {
      updateUsers(results.data)
    })
    .catch((data) =>{
      console.log(data)
    })
  },[room.room_id]);


  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/rooms/${room.room_id}`,
    {
      params: {
        id: room.room_id
      }
    })
    .then((results) => {
      console.log(results)
      setRoom_name(results.data.name);
      getUsers();
    })
    .catch((data) =>{
      console.log(data)
      setRoom_name("");
    })
  },[room.room_id]);

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/messages`,
    {
      params: {
        room_id: room.room_id
      }
    })
    .then((results) => {
      console.log(results)
      setMessages(results.data)
      
      const scrollArea = document.getElementById("scroll-area");
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight
      }
    })
    .catch((data) =>{
      console.log(data)
    })
  },[room.room_id]);

  const hundleSubmit = () => {
    if (message) {
      setErrors("");
      axios.post(`http:${process.env.REACT_APP_API_URL}/messages`,
      {
        message: {
          content: message,
          user_name: currentUser.userstate?.name,
          room_id: room.room_id,
          user_id: currentUser.userstate?.id
        }
      },
      { withCredentials: true}
      ).then(response => {
        if (response.data.status === 'created'){
          setMessage(response.data.message);
          console.log(response.data.message);
        }
      }).catch(error => {
        console.log("message error", error)
      })
    }
    else {
      setErrors("メッセージを入力してください")
    }
  }

  const handleClick = () => {
    if (invitation){
      setInvitation(false);
    }else{
    setInvitation(true);
    }
  }

  const leaveClick = () => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/getuser_ids`,
    {
      params: {
        room_id: room.room_id
      }
    })
    .then((results) => {
      updateUsers(results.data)
    })
    axios.delete(`http:${process.env.REACT_APP_API_URL}/userbelongsrooms/${room.room_id}`,
    {
      params: {
        user_id: currentUser.userstate?.id,
        room_id: room.room_id,
      }
    })
    .then((results) => {
      if (user_ids.length === 1){
        axios.delete(`http:${process.env.REACT_APP_API_URL}/rooms/${room.room_id}`,
        {
          params: {
            id: room.room_id
          }
        })
        .then((results) => {
          console.log(results)
        })
        .catch((data) =>{
          console.log(data);
        })
      }
      if (results.data.status === "deleted"){
        roomsGet();
        room.setRoom_id(null);
      }
      else {
        console.log("leave error")
      }
    })
  }

  const deleteClick = () => {
    if (window.confirm("削除しますか？")){
      axios.delete(`http:${process.env.REACT_APP_API_URL}/rooms/${room.room_id}`,
      {
        params: {
          id: room.room_id
        }
      })
      .then((results) => {
        console.log(results)
        if (results.data.status === "deleted"){
          roomsGet();
          room.setRoom_id(null);
        }
      })
      .catch((data) =>{
        console.log(data);
      })
    }
  }

  const iconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <h1>{room_name}</h1>
        </Grid>
        
        <Grid item xs={9} container justify="flex-end">
          <Hidden smDown>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={handleClick}
            >
              招待
            </Button>

            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              onClick={leaveClick}
            >
              退室
            </Button>

            <Button
              variant="contained"
              className={classes.button}
              color= "secondary"
              onClick={deleteClick}
            >
              ルーム削除
            </Button>
          </Hidden>
          {/* ボタン表示 */}
          <Hidden mdUp>
            <IconButton onClick={(event)=>{iconClick(event);}}>
              <MoreVertIcon/>
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  
                },
              }}
            >
              <MenuItem  onClick={handleClose}>
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  onClick={handleClick}
                >
                  招待
                </Button>

                <Button
                  variant="contained"
                  className={classes.button}
                  color="secondary"
                  onClick={leaveClick}
                >
                  退室
                </Button>

                <Button
                  variant="contained"
                  className={classes.button}
                  color= "secondary"
                  onClick={deleteClick}
                >
                  ルーム削除
                </Button>
              </MenuItem>
            </Menu>
          </Hidden>
        </Grid>
      </Grid>
      <div className='app-main' id={"scroll-area"}>
        {invitation ? <Invite User_ids={user_ids} getUsers={getUsers}/>:<Messages messageData={ messages } />}
      </div> 
      <Grid container>
        
          <TextField  
          onChange={event => setMessage(event.target.value)} 
          label="メッセージ"
          style={{width:"80%"}}
          helperText={errors}
          required
          
          inputProps={{
            maxLength: 250,
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              // エンターキー押下時の処理
              e.preventDefault();
              hundleSubmit();
            }
          }
          }
        />
          <Button 
            variant="contained"
            className={classes.button} 
            onClick={hundleSubmit} 
            color="primary"
            endIcon={<Icon>send</Icon>}
          >
            send
          </Button>
      </Grid>
    </>
  )
}

export default Chat;