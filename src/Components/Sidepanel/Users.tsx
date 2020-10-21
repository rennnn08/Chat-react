import React, { FC, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { User } from 'Types';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import TextField from "@material-ui/core/TextField";
import { CurrentUserContext, MainContext, RoomContext, UserContext } from 'Provider';
import ChatIcon from '@material-ui/icons/Chat';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Hidden from '@material-ui/core/Hidden';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [dense, setDense] = React.useState(false);
  const [errors, setErrors] = useState("");
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const main = useContext(MainContext);
  const user = useContext(UserContext);
  const currentUser = useContext(CurrentUserContext);
  const room = useContext(RoomContext);

  const classes = useStyles();

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/users`,)
    .then((results) => {
      setUsers(results.data)
      console.log(users)
    })
    .catch((data) => {
      console.log(data)
    })
  },[]);

  const hundleSubmit = () => {
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

  const showUserpage = (id:number) => {
    main.setType("UserPage");
    user.setUser_id(id);
  }

  const talkCreate = (opponent_id: number, name: string) => {
    axios.post(`http:${process.env.REACT_APP_API_URL}/toakcreate`,
      {
        room: {
          name: name,
          user_id: currentUser.userstate?.id,
          opponent_id: opponent_id,
        }
      },
      { withCredentials: true}
      ).then(response => {
        main.setType("Chat");
        room.setRoom_id(response.data.room.id);
        
      }).catch(error => {
        console.log("message error", error)
      })
  }

  const iconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TextField  
          fullWidth
          label="名前検索"
          onChange={event => setSearch(event.target.value)}
          helperText={errors}
          required
          inputProps={{
            maxLength: 20,
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              // エンターキー押下時の処理
              e.preventDefault();
              hundleSubmit();
            }
          }}
        />
      <div className={classes.demo}>
        <div className="Rooms">
          <List dense={dense}>
            {users.map((user) => (
              currentUser.userstate?.id !== user.id &&
              <ListItem key={user.id}>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar src={ user.image  ? user.image : "" } />
                  </ListItemAvatar>
                </Hidden>
                <ListItemText
                  primary={<Button className={classes.room_name} onClick={()=>showUserpage(user.id)}>{user.name}</Button>}
                />
                <Hidden smDown>
                  <ListItemSecondaryAction>
                    <Button onClick={()=>talkCreate(user.id,user.name)}>
                      <ChatIcon />
                    </Button>
                  </ListItemSecondaryAction>
                </Hidden>

                {/* ボタン表示 */}
                <Hidden mdUp>
                  <IconButton onClick={(event)=>{iconClick(event);}}>
                    <MoreVertIcon/>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem  onClick={handleClose}>
                      <IconButton onClick={()=>talkCreate(user.id,user.name)}>
                        <ChatIcon />
                      </IconButton>
                    </MenuItem>
                  </Menu>
                </Hidden>
              </ListItem>
              
            ))}
          </List>
        </div>
      </div>
    </>
  )
}

export default Users;