import React, { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { CurrentUserContext } from 'Provider';

import '../../../styles/ViewMessage.css';
import { User } from '../../../Types';

type Props = {
  message: any;
  user: User;
}


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const confirmation = (currerntUser:any,classes:any,message:string, user:User) => {

  if(currerntUser.userstate?.id === user.id){
    return(
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText
            className="align"
            primary={ <h1 className="name">{user.name}</h1> }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                { message }
              </Typography>
            </React.Fragment>
            }
          >
          </ListItemText>
          
          <ListItemAvatar>
            <Avatar
              alt="ME"
              src={ user.image  ? user.image : "" }
            />
          </ListItemAvatar>
        </ListItem>
        <Divider variant="middle" />
      </List>
    );
  }else {
    return(
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Martian"
              src={ user.image  ? user.image : "" }
            />
          </ListItemAvatar>
          <ListItemText
            primary={ <h1 className="name">{user.name}</h1> }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                <p>{ message }</p>
              </Typography>
            </React.Fragment>
            }
          >
          </ListItemText>
        </ListItem>
        <Divider variant="middle" />
      </List>
    );
  }
}

const ViewMessage: FC<Props> = ({message, user}) => {
  const classes = useStyles();
  const currentUser = useContext(CurrentUserContext);

  
  return(
    <>
      {confirmation(currentUser,classes,message,user)}
    </>
  )
  
}

export default ViewMessage;