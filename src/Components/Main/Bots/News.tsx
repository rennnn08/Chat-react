import React, { FC, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BotContext, CurrentUserContext } from "../../../Provider";
import actionCable from 'actioncable';
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
import { User } from '../../../Types';
import '../../../styles/ChatRoom.css';
import '../../../styles/Bots.css';
import ViewMessage from '../Chat/ViewMessage';
import { StringLiteral } from 'typescript';

type Props = {
  cableApp :actionCable.Cable;
}

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
  description: string;
  url: string;
  urlToImage: string;
}

const News: FC = () =>{
  const user = useContext(CurrentUserContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [articles, setArticles] = useState<article[]>([]);
  const [errors, setErrors] = useState("");
  const bot = useContext(BotContext);

  const [flag, setFlag] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    axios.get('http://newsapi.org/v2/top-headlines?' + 'country=jp&' + 'apikey=19ca5bf0dc3d4d4083598934aeec936b')
    .then(response => {
      console.log(response);
      setArticles(response.data.articles);
    })
  },[bot.bot_id])
  

  return (
    <>
      <h1>Newsくん</h1>
      <div className='app-main' id={"scroll-area"}>
        
        
        {articles.map((t)=>(
          <List className={classes.root} key={t.title}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={t.urlToImage}/>
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
    </>
  )
}

export default News;