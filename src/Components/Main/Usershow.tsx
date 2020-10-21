import React, { FC, useContext, useEffect, useState } from 'react'
import axios from "axios";
import { UserContext } from "../../Provider";
import { makeStyles } from '@material-ui/core/styles';
import { User } from "../../Types";
import '../../styles/Usershow.css';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyle = makeStyles({
  root: {
    marginTop: 20,
    backgroundColor: 'white',
    minHeight: 500,
  },
  name: {
    margin: 20,
    fontSize: 50,
  },
  prof: {
    margin: 20,
    fontSize: 25,
  }
});


const UserShow: FC = () => {
  const [user, setUser] = useState<User>();

  const User = useContext(UserContext);

  const classes = useStyle();

  useEffect(() => {
    axios.get(`http:${process.env.REACT_APP_API_URL}/users/:id`,
    {
      params: {
        user_id: User.user_id
      }
    })
    .then((results) => {
      console.log(results)
      setUser(results.data)
    })
    .catch((data) => {
      console.log(data)
    })
  },[User.user_id]);

  return(
    <div className="usershow">
      <List>
        <ListItem>
        {user &&
          <ListItemAvatar>
            
              <Avatar src={ user.image  ? user.image : "" } />
            
          </ListItemAvatar>
        }
          <ListItemText primary={<h1>{user?.name}</h1>}/>
        </ListItem>
      </List>
      
      <p className={classes.prof}>{user?.profile}</p>

    </div>
  )
};
export default UserShow;