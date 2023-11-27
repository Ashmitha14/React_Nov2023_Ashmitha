// import React from 'react';
// import { Grid, Paper, Avatar, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Link as RouterLink } from 'react-router-dom';
// import { BoyRounded } from '@mui/icons-material';

// const Login = () => {
//   const containerStyle = {
//     backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/024/574/571/non_2x/blue-antibiotic-pill-in-laboratory-collection-variation-generative-ai-free-photo.jpg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh', // Ensure the background covers the entire viewport
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };
  

//   const paperstyle = { 
//     padding: 20,
//     height: '50vh',
//     width: 400, margin: '100px auto',
//     backgroundColor:'white',
//     // backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/024/574/571/non_2x/blue-antibiotic-pill-in-laboratory-collection-variation-generative-ai-free-photo.jpg")',
//   backgroundSize: 'cover', 
// };
//   const avatarstyle = { background: '#007180' };

//   return (
//     <div style={containerStyle}>
//       <Grid container justifyContent="center">
//         <Paper elevation={10} style={paperstyle}>
//           <Grid align="center">
//             <Avatar style={avatarstyle}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography>SignIn</Typography>
//           </Grid>
//           <TextField margin="normal" label="email/Username" placeholder="Enter here" fullWidth required />
//           <TextField margin="normal" type="password" label="Password" placeholder="Enter Password" fullWidth required />
//           <FormControlLabel control={<Checkbox name="checkedB" color="secondary" />} label="Remember me" />
//           <br />
//           <Button type="submit" color="primary" variant="contained" fullWidth component={RouterLink} to="/home">
//             Log In
//           </Button>
//           <br />
//           <br />
//           <Typography>
//             <RouterLink to="#">Forget password?</RouterLink>
//           </Typography>
          
//         </Paper>
//       </Grid>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/users`, { username, password })
      .then((res) => {
        // Handle the response as needed
        console.log("Response:", res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const containerStyle = {
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/024/574/571/non_2x/blue-antibiotic-pill-in-laboratory-collection-variation-generative-ai-free-photo.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const paperstyle = {
    padding: 20,
    height: '50vh',
    width: 400,
    margin: '100px auto',
    backgroundColor: 'white',
    backgroundSize: 'cover',
  };

  const avatarstyle = { background: '#007180' };

  return (
    <div style={containerStyle}>
      <Grid container justifyContent="center">
        <Paper elevation={10} style={paperstyle}>
          <Grid align="center">
            <Avatar style={avatarstyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography>SignIn</Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
          <TextField
          margin="normal"
          label="Username"
          placeholder="Enter your username"
          fullWidth
          required
          value={username}
          onChange={handleChange}
          />

          <TextField
            margin="normal"
            label="Password"
            placeholder="Enter your password"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
          />

            <FormControlLabel
              control={<Checkbox name="rememberMe" color="secondary" />}
              label="Remember me"
            />
            <br />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              component={RouterLink}
              to="/home"
            >
              Log In
            </Button>
          </form>
          <br />
          <Typography>
            <RouterLink to="#">Forgot password?</RouterLink>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;