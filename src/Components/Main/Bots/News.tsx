import React, { FC, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BotContext } from "../../../Provider";
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
  const [articles, setArticles] = useState<article[]>([]);
  const bot = useContext(BotContext);
  const classes = useStyles();

  useEffect(() => {
    axios.get('http://newsapi.org/v2/top-headlines?country=jp&apikey=19ca5bf0dc3d4d4083598934aeec936b')
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