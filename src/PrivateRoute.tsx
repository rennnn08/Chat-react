import React, { useContext, useEffect, useState } from 'react';
import { Route, Navigate } from "react-router-dom";
import axios from "axios";
import { CurrentUserContext } from "./Provider";

const Container = ({Component, cableApp, redirectLink, ...props}: any) =>{
  const user = useContext(CurrentUserContext);

  if(user.loginStatus === true) {
    if(user.userstate){
      return <Component cableApp={cableApp} {...props} />
    }
    else {
      return <Navigate to={redirectLink} />;
    }
  }
  else {
    return <Navigate to={redirectLink} />;
  }
};

const PrivateRoute = ({ component: Component, redirectLink, cableApp,path, ...props }: any) => {
  
  const user = useContext(CurrentUserContext);
  const  [loading, setLoading] = useState(true);

  useEffect(() => {
    const userget = async () : Promise<void> => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/logged_in`, { withCredentials: true});
        if (response.data.logged_in && !user.loginStatus){
          user.setLoginStatus(true)
          user.setUserState(response.data.user)
          setLoading(false);
        } else if (!response.data.logged_in && user.loginStatus){
          user.setLoginStatus(false)
          user.setUserState(null)
          setLoading(false);
        }
        else {
          setLoading(false);
        }
      } catch(error) {
        console.log("ログインエラー", error)
        setLoading(false);
      };
    };
    userget();
  },[]);

  return (
    <>
      {loading ? <></> : <Route path={path} 
        element={<Container cableApp={cableApp} redirectLink={redirectLink} Component={Component}/>
        }/>}
    </>
  ) 
}



export default PrivateRoute;