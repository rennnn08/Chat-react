import React, { FC, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { User } from "../../Types";
import { Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CurrentUserContext, RoomContext } from 'Provider';

import '../../styles/Invite.css';

type Props = {
  User_ids: number[];
  getUsers: () => void;
  handleClick: ()=> void;
}

const Invite: FC<Props> = ({User_ids,getUsers,handleClick}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const room = useContext(RoomContext);


  const currentUser = useContext(CurrentUserContext);


  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/users`)
    .then((results) => {
      setUsers(results.data)
      console.log(users)
    })
    .catch((data) => {
      console.log(data)
    })
  },[]);

  const user_ids: number[]= [];

  const handleChange = (user_id: number) => {
    user_ids.push(user_id);
  };

  const handleSubmit = () => {
    axios.post(`http:${process.env.REACT_APP_API_URL}/userbelongsrooms`,
    {
      belong: {
        user_id: user_ids,
        room_id: room.room_id,
      }
    },
    { withCredentials: true}
    ).then(response => {
      if(response.data.status === 'created'){
        getUsers();
        room.setChange_flag(true);
        handleClick();
      }
    })
  }; 

  const hundleSearch = () => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/users`,{
      params:{
        search: search
      }
    })
    .then((results) => {
      setUsers(results.data)
      console.log(users)
    })
    .catch((data) => {
      console.log(data)
    })
  }


  return(
    <Box px={2}>
      <TextField
        variant="standard"
        margin="none"
        label="検索"
        onChange={event => setSearch(event.target.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            // エンターキー押下時の処理
            e.preventDefault();
            hundleSearch();
          }
        }
        }
      />
      
        
        <div className="Users">
          <List style={{backgroundColor:'white'}}>
          <Grid container>
            {users.map((user)=>{
              return user.id !== currentUser.userstate?.id && !User_ids.includes(user.id) ? 
                <Grid xs={12} md={3}>
                  <List>
                  <ListItem key={user.id}>  
                    <ListItemAvatar>
                      <Avatar>
                        <FaceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemIcon>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          onChange={() => {handleChange(user.id)}}
                        />
                      }
                      label={user.name}
                      />
                      </ListItemIcon>
                  </ListItem>
                  </List>
                  </Grid>
              : 
              <></>
            })}
            </Grid>
          </List>
        </div>
      
        
      <Button
        color="primary"
        variant="contained"
        onClick={handleSubmit}
      >
        招待
      </Button>
    </Box>
  )
}

export default Invite;