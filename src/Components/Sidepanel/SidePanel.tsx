import React, { FC,  useState,  ChangeEvent } from 'react';
import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import Rooms from "./Rooms";
import Users from './Users';
import Bots from './Bots';
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const SidePanel: FC = () => {
  const [value, setValue] = useState('rooms');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const iconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <>
      {value === "rooms" && <Rooms />}
      {value === "bots" && <Bots/>}
      {value === "users" && <Users/>}
      <Hidden xsDown> 
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Rooms" value="rooms" icon={<ChatIcon/>}/>
          <BottomNavigationAction label="Bot" value="bots" icon={<ChatIcon/>}/>
          <BottomNavigationAction label="Users" value="users" icon={<FaceSharpIcon/>}/>
        </BottomNavigation>
      </Hidden>
      <Hidden smUp>
        <IconButton onClick={(event)=>{iconClick(event);}}>
          <MoreHorizIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          
        >
          <MenuItem  onClick={handleClose}>
            <IconButton onClick={(event)=>handleChange(event,"rooms")}><ChatIcon/></IconButton>
            <IconButton onClick={(event)=>handleChange(event,"bots")}><ChatIcon/></IconButton>
            <IconButton onClick={(event)=>handleChange(event,"users")}><FaceSharpIcon/></IconButton>
          </MenuItem>
        </Menu>
      </Hidden>

    </>
  )
}

export default SidePanel;