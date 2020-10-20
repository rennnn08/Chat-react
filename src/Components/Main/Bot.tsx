import Qiita from 'Components/Main/Bots/Qiita';
import { BotContext, RoomContext } from 'Provider';
import React, {FC, useContext} from 'react';

const Bot: FC = () => {
  const bot = useContext(BotContext);
  return (
    <>
      {bot.bot_id === 1 && <Qiita/>}
    </>
  )
}

export default Bot;