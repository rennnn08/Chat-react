import React, { FC, useContext, useState, SyntheticEvent, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import ListItemText from '@material-ui/core/ListItemText';
import { BotContext, MainContext } from 'Provider';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


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

type Bot = {
  id: number,
  name: string,
}

const Bots: FC = () => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");
  const [bots, setBots] = useState<Bot[]>([]);
  
  const main = useContext(MainContext);

  const bot_id = useContext(BotContext);

  const Bots:Bot[] = [{id: 1,name: "Qiita"},{id: 2, name: "News"},{id: 3, name: "Weather"}]

  const hundleSubmit = (e: SyntheticEvent) => {
    setErrors("");
    const bb:Bot[] = [];
    Bots.map((bot)=>{
      if(bot.name.includes(name)){
        bb.push(bot);
      }
    });
    e.preventDefault();
    setBots(bb);
  }

  const apiShow = (id:number) => {
    main.setType("Api");
    bot_id.setBot_id(id);
  }

  const setBot = () => {
    setBots(Bots);
  }

  useEffect(() => {
    setBot();
  },[])

  return(
    <>
      <TextField  
          fullWidth
          label="Bot検索"
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
          <List dense={dense}>
            {bots.map((bot) => (
              <ListItem key={bot.id}>
                <ListItemAvatar>
                  <Avatar>
                    <ChatIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={<Button onClick={()=>apiShow(bot.id)} className={classes.room_name}>{bot.name}</Button>}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </>
  )
}

export default Bots;