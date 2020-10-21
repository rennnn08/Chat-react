import Qiita from 'Components/Main/Bots/Qiita';
import { BotContext, RoomContext } from 'Provider';
import React, {FC, useContext} from 'react';
import News from './Bots/News';

const Bot: FC = () => {
  const bot = useContext(BotContext);
  return (
    <>
      {bot.bot_id === 1 && <Qiita/>}
      {bot.bot_id === 2 && <News/>}
    </>
  )
}

export default Bot;