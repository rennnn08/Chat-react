import React, { useContext, useState, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';
import { CurrentUserContext, UserContext } from "../Provider";

import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router';
import { Box } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ChageProf = () => {
  const currentUser = useContext(CurrentUserContext);
  const classes = useStyle();

  const [name,setName] = useState(currentUser.userstate?.name);
  const [prof,setProf] = useState(currentUser.userstate?.profile);
  const  [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | ArrayBuffer | null>("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3001/users/:id',
    {
      params: {
        user_id: currentUser.userstate?.id
      }
    })
    .then((results) => {
      console.log(results)
      currentUser.setUserState(results.data)
      setName(results.data.name)
      setProf(results.data.profile)
      setLoading(false);
    })
    .catch((data) => {
      console.log(data)
    })
  },[]);

  const handleSubmit = () => {
    axios.patch(`http://localhost:3001/users/${currentUser.userstate?.id}`,
    {
      user: {
        user_id: currentUser.userstate?.id,
        name: name,
        profile: prof,
        image: image,
      }
    })
    .then((response) => {
      if(response.data.status === 'created'){
        navigate(`/userpage/${currentUser.userstate?.id}`);
      }
      else{
        console.log(response.data.errors);
      }
    })
    .catch((error) => {
      console.log(error);
    })

    axios.get("http://localhost:3001/logged_in", { withCredentials: true})
      .then((response) => {
        currentUser.setUserState(response.data.user);
        
        
      }).catch((error) => {
        console.log(error);
      });
    navigate(`/userpage/${currentUser.userstate?.id}`);
  }

  const setimage = (e:any) => {
    if(document.getElementById("canvas")){
    let canvas:any =  document.getElementById("canvas");
    
    if (canvas){
    let ctx = canvas.getContext("2d");
    let maxW = 250;
    let maxH = 250;

    let img = new Image();
    img.onload = () => {
      let iw = img.width;
      let ih = img.height;
      let scale = Math.min(maxW / iw, maxH / ih);
      let iwScaled = iw * scale;
      let ihScaled = ih * scale;
      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
      const resizeData = canvas.toDataURL("image/jpeg", 0.5);
      setImage(resizeData);
    };
    img.src = URL.createObjectURL(e.target.files[0]);
  }}
  };

  
  return (
    <>
    {
      loading ? <></> :
          <Container className={classes.root}>
            <Box p={2}>
              <h1>編集</h1>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  label="名前"
                  fullWidth
                  defaultValue={name}
                  autoFocus
                  name="name"
                  onChange={event => setName(event.target.value)}
                />
                <label>プロフィール画像</label>
                {image &&
                  <img src={typeof image === 'string' ? image : "" } />
                }
                <canvas
                  id="canvas"
                  style={{
                    display: "none"
                  }}
                  width="64"
                  height="64"
                />

                <Button
                  component="label"
                  variant="contained"
                  color="primary"
                >
                  Upload File
                  <input
                    type="file"
                    className="inputFileBtnHide"
                    style={{ display: "none" }}
                    onChange={e => setimage(e)}
                  />
                </Button>
                <TextField
                  variant="outlined"
                  margin="normal"
                  label="Profile"
                  multiline
                  rows={4}
                  fullWidth
                  defaultValue={prof}
                  name="prof"
                  onChange={event => setProf(event.target.value)}
                />
                

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                  >
                    送信
                </Button>
              </form>
            </Box>
          </Container>
    }

    </>
  )
}

export default ChageProf;