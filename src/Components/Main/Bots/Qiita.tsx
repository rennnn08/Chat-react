import React, { FC, useState, useContext } from 'react';
import axios from 'axios';
import { CurrentUserContext } from "../../../Provider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../../../styles/ChatRoom.css';
import '../../../styles/Bots.css';
import ViewMessage from '../Chat/ViewMessage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1),
    },
    inline: {
      display: 'inline',
    },
  }),
);

type article = {
  title: string;
  url: string;
}

const Qiita: FC = () =>{
  const user = useContext(CurrentUserContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [articles, setArticles] = useState<article[]>([]);
  const [errors, setErrors] = useState("");

  const [flag, setFlag] = useState(false);

  const classes = useStyles();

  const hundleSubmit = () => {
    if (text) {
      setErrors("");
      setMessage(text);
      axios.get("https://qiita.com/api/v2/items",
      {
        params: {
          "page": "1",
          "per_page": "20",
          "query": text,
        }
      },
      ).then(response => {
        console.log(response.data);
        setFlag(true);
        
        setArticles(response.data);

      }).catch(error => {
        console.log("message error", error)
      })
    }
    else {
      setErrors("メッセージを入力してください")
    }
  }
  

  return (
    <>
      <h1>Qiitaくん</h1>
      <div className='app-main' id={"scroll-area"}>
        {flag && user.userstate && (<ViewMessage message={message} user={user.userstate}/>) }
        
        {articles.map((t)=>(
          <List className={classes.root} key={t.title}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Martian"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5lquvS_JqssPqAlVj1dQhMuzLgtQRUSrEYg&usqp=CAU"
                />
              </ListItemAvatar>
              <ListItemText
                primary={ <h4 className="title">{t.title}</h4> }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                    <a href={t.url}>{t.url}</a>
                  </Typography>
                </React.Fragment>
                }
              >
              </ListItemText>
            </ListItem>
            <Divider variant="middle" />
          </List>
        ))}
      </div>
      <TextField  
        onChange={event => setText(event.target.value)} 
        label="メッセージ"
        style = {{width: "80%"}}
        helperText={errors}
        required
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
        endIcon={<Icon>send</Icon>}>
        send
      </Button>
    </>
  )
}

export default Qiita;