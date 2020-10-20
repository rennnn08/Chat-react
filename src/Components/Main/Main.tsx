import React, { FC, useContext } from 'react';
import { MainContext } from "../../Provider";
import actionCable from 'actioncable';
import Chat from './Chat';
import UserShow from './Usershow';

import '../../styles/ChatRoom.css';

import Bot from './Bot';


type Props = {
  cableApp :actionCable.Cable;
  roomsGet: () => void;
}


const Main: FC<Props> = ({cableApp, roomsGet}) =>{
  const main = useContext(MainContext);

  return (
    <>
      {main.type === 'Chat' && <Chat cableApp={cableApp} roomsGet={roomsGet}/>}
      {main.type === 'Api' && <Bot/>}
      {main.type === 'UserPage' && <UserShow />}
    </>
  )
}

export default Main;