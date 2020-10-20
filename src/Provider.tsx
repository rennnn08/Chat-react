import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { User } from "./Types";

type MaybeUser = User | null;

interface CurrentUserContextValue {
  userstate: MaybeUser
  loginStatus: boolean
  setUserState: Dispatch<SetStateAction<MaybeUser>>
  setLoginStatus: Dispatch<SetStateAction<boolean>>
}

interface RoomContextValue {
  room_id: number | null;
  setRoom_id: Dispatch<SetStateAction<number|null>>
  change_flag: boolean
  setChange_flag: Dispatch<SetStateAction<boolean>>
}

interface MainContextValue {
  type: string;
  setType: Dispatch<SetStateAction<string>>
}

interface UserContextValue {
  user_id: number | null;
  setUser_id: Dispatch<SetStateAction<number|null>>
}

interface BotContextValue {
  bot_id: number | null
  setBot_id: Dispatch<SetStateAction<number | null>>
}

export const CurrentUserContext = createContext<CurrentUserContextValue>((null as any) as CurrentUserContextValue,);
export const RoomContext = createContext<RoomContextValue>((null as any) as RoomContextValue,);
export const MainContext = createContext<MainContextValue>((null as any) as MainContextValue,);
export const UserContext = createContext<UserContextValue>((null as any) as UserContextValue);
export const BotContext = createContext<BotContextValue>((null as any) as BotContextValue);

export const Provider:React.FunctionComponent = props => {
  const [userstate, setUserState] = useState<MaybeUser>(null);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [room_id, setRoom_id] = useState<number|null>(null);
  const [type, setType] = useState<string>("");
  const [user_id, setUser_id] = useState<number|null>(null);
  const [bot_id, setBot_id] = useState<number|null>(null);
  const [change_flag, setChange_flag] = useState<boolean>(false);

  return (
    <MainContext.Provider value={{type, setType}}>
      <CurrentUserContext.Provider value={{userstate, loginStatus,setUserState, setLoginStatus}}>
        <RoomContext.Provider value={{room_id,setRoom_id,change_flag,setChange_flag}}>
          <BotContext.Provider value={{bot_id, setBot_id}}>
            <UserContext.Provider value={{user_id,setUser_id}}>
              {props.children}
            </UserContext.Provider>
          </BotContext.Provider>
        </RoomContext.Provider>
      </CurrentUserContext.Provider>
    </MainContext.Provider>
  )
}

