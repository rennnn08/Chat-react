import React, { FC, useContext, useState } from 'react';
import actionCable from 'actioncable';
import Grid from '@material-ui/core/Grid';
import SidePanel from './Sidepanel/SidePanel';
import axios from 'axios';
import { CurrentUserContext, RoomContext } from 'Provider';
import { Room } from '../Types';
import Main from './Main/Main';

import '../styles/Home.css';

type Props = {
  cableApp :actionCable.Cable;
}


const Home: FC<Props> = ({cableApp}) => {
  const room = useContext(RoomContext);
  const [rooms, setRooms] = useState<Room[]>([]);

  const currentUser = useContext(CurrentUserContext);

  const roomsGet = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/rooms`,
    {
      params: {
        user_id: currentUser.userstate?.id
      }
    })
    .then((results) => {
      setRooms(results.data)
      room.setRoom_id(0);
      console.log(rooms)
    })
    .catch((data) => {
      console.log(data)
    })
  }

  return(
    <div className="main">
    <Grid container spacing={2}>
      <Grid item md={3} xs={4}>
        <SidePanel/>
      </Grid>
      <Grid item md={9} xs={8}>
        <Main cableApp={cableApp} roomsGet={roomsGet}/>
      </Grid>
    </Grid>
    </div>
  );
};

export default Home;