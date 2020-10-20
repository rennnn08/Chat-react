import React, { FC } from 'react';
import ViewMessage from './ViewMessage';
import { Message } from '../../../Types';


type Props = {
  messageData: Message[];
}

const Messages: FC<Props> = ({ messageData = [] }) => (
  <>
    {messageData.map((data) => (
      <ViewMessage user={ data.user} message={ data.content }/>
    ))}
  </>
)

export default Messages;