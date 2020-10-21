import React, { FC, useContext, useEffect, useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { Room } from 'Types';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import ListItemText from '@material-ui/core/ListItemText';
import { CurrentUserContext, MainContext, RoomContext } from 'Provider';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PeopleIcon from '@material-ui/icons/People';
import Hidden from '@material-ui/core/Hidden';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import posed from 'react-pose';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import '../../styles/Rooms.css'

const props = {
  visible: {
    opacity: 1,
    originY: 0,
    scaleY: 1
  },
  hidden: {
    opacity: 0,
    scaleY: 0
  }
};

const Dropdown = posed.ul(props);
const StyledDropdown = styled(Dropdown)`
  
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);
  padding-left: 0;
`;

const Item = styled.li`
  list-style: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 14px;
  color: #666;
  padding: 5px 10px;
  cursor: pointer;
  
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    room_name: {
      textTransform: 'none',
    },
  })
)

type flag = {
  flag:boolean,
  id: number,
}


const Rooms: FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");
  const [showmember, setShowmember] = useState<flag>({flag:false,id:0});

  const [room_id, setRoom_id] = useState(0);
  const currentUser = useContext(CurrentUserContext);

  const room = useContext(RoomContext);
  const main = useContext(MainContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/rooms`,
    {
      params: {
        user_id: currentUser.userstate?.id
      }
    })
    .then((results) => {
      setRooms(results.data)
      console.log(rooms)
    })
    .catch((data) => {
      console.log(data)
    })
  },[]);

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}rooms`,
    {
      params: {
        user_id: currentUser.userstate?.id
      }
    })
    .then((results) => {
      setRooms(results.data)
      console.log(results.data)
    })
    .catch((data) => {
      console.log(data)
    })
  },[room.room_id]);

  useEffect(() => {
    room.setChange_flag(false);
    axios.get(`http:${process.env.REACT_APP_API_URL}/rooms`,
    {
      params: {
        user_id: currentUser.userstate?.id
      }
    })
    .then((results) => {
      setRooms(results.data)
      console.log(results.data)
    })
    .catch((data) => {
      console.log(data)
    })
  },[room.change_flag]);


  const hundleSubmit = (e: SyntheticEvent) => {
    setErrors("");
    if (name) {
      axios.post(`http:${process.env.REACT_APP_API_URL}/rooms`,
      {
        room: {
          name: name,
          user_id: currentUser.userstate?.id
        }
      },
      { withCredentials: true}
      ).then(response => {
        if (response.data.status === 'created'){
          axios.get(`http:${process.env.REACT_APP_API_URL}/rooms`,
          {
            params: {
              user_id: currentUser.userstate?.id
            }
          })
          .then((results) => {
            console.log(results)
            setRooms(results.data)
          })
          .catch((data) =>{
            console.log(data)
          })
        }else{
          console.log(response.data.errors);
          setErrors(response.data.errors);
        }
      }).catch(error => {
        console.log("message error", error)
      })
    }
    e.preventDefault();
  }

  const talkShow = (id:number) => {
    main.setType("Chat");
    room.setRoom_id(id);
  }

  const showMember = (id:number) => {

    if (!showmember.flag){
    setShowmember({flag:true,id:id});
    
    }else{
      setShowmember({flag:false,id:0});
    }
  }

  const iconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <>
      <TextField  
          fullWidth
          label="ルーム作成"
          onChange={event => setName(event.target.value)}
          helperText={errors}
          required
          inputProps={{
            maxLength: 20,
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              // エンターキー押下時の処理
              e.preventDefault();
              hundleSubmit(e);
            }
          }}
        />

      <div className={classes.demo}>
        <div className="Rooms">
          <List>
            {rooms.map((room) => (
              <>
                <ListItem key={room.id}>
                  <Hidden smDown>
                    <ListItemAvatar>
                      <Avatar>
                        <ChatIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </Hidden>
                  <ListItemText
                    primary={<Button onClick={()=>talkShow(room.id)} className={classes.room_name}>{room.name}</Button>}
                  />

                  {/* メンバー表示 */}
                  <Hidden smDown>
                    <ListItemSecondaryAction>
                      <Button
                        key={room.id}
                        onClick={()=>showMember(room.id)}
                      >
                        <PeopleIcon/>
                      </Button>
                    </ListItemSecondaryAction>
                  </Hidden>

                  {/* ボタン表示 */}
                  <Hidden mdUp>
                    <IconButton onClick={(event)=>{iconClick(event);setRoom_id(room.id);}}>
                      <MoreVertIcon/>
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      
                    >
                      <MenuItem  onClick={handleClose}>
                        <IconButton
                          key={room.id}
                          onClick={()=>showMember(room_id)}
                        >
                          <PeopleIcon/>
                        </IconButton>
                      </MenuItem>
                    </Menu>
                  </Hidden>

                </ListItem>


                {/* メンバー表示欄 */}
                <>
                  <StyledDropdown pose={showmember.flag ? 'visible' : 'hidden'}>
                    {showmember.flag && showmember.id === room.id ?
                      <>
                      {room.users.map((u) => (
                          <Item>{u.name}</Item>
                      ))}
                      </>
                    :<></> }
                  </StyledDropdown>
                </>
              </>
            ))}
          </List>
        </div>
      </div>
    </>
  )
}

export default Rooms;