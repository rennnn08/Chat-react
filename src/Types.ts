export type Message = {
  content: string;
  user_name: string;
  user_id: number;
  user: User;
}

export type Room = {
  id: number;
  name: string;
  user_id: number;
  users: User[];
}

export type User = {
  user :any
  id: number;
  name: string;
  profile: string;
  image: string;
}

export type User_id = {
  id: number;
  user_id: number;
}

export type CuurentUser = {
  id: number;
  name: string;
  loggedInStatus: boolean;
}