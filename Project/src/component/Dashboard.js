// APP.js

// import './App.css';
// import React from 'react';
// import MedicalShopHomePage from './component/MedicalShopHomePage';
// import Login from './component/Login';
// import Registration from './component/Registration';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <ul>
//         <li>
//           <Link to="/">Login</Link>
//         </li>
//         <li>
//           <Link to="/Registration">Registration</Link>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="/" element={<Login/>}/>
//         <Route path="/Registration" element={<Registration/>}/>
//       </Routes>
//         {/* <Login/>
//         <Registration/>
//       <MedicalShopHomePage/> */}
//       </BrowserRouter>
//     </div>      
//     );
// }
// export default App;



// import './App.css';
// import React from 'react';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import MedicalShopHomePage from './component/MedicalShopHomePage';
// import Login from './component/Login';
// import Registration from './component/Registration';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       {/* <Login/> */}
//         <ul>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/registration">Registration</Link>
//           </li>
//           <li>
//             <Link to="/m">Home</Link>
//           </li>
//         </ul>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/m" element={<MedicalShopHomePage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




// LOGIN


// import React from 'react'
// import {Grid,Paper,Avatar, TextField,Button,Typography} from '@mui/material'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { blue } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';

// const Login =()=>{
//     const paperstyle={padding:20,height:'50vh',width:400,margin:"100px auto"}
//     const avatarstyle={background:"#007180"}
//     return (
//         <Grid>
//             <Paper elevation={10} style={paperstyle}>
//                 <Grid align='center'>
//                 <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
//                 <Typography>SignIn</Typography>
//                 </Grid>
//                 <TextField margin='normal'  label='email/Username' placeholder='Enter here' fullWidth required />
//                 <TextField margin='normal' type="password" label='Password'  placeholder='Enter Password' fullWidth required/>
//                 <FormControlLabel
//         control={
//           <Checkbox name="checkedB" color="secondary" />
//                }
//               label="Remember me"
//                /><br></br>
//                <Button type="submit" color='primary' variant='contained' fullWidth>Log In</Button><br></br><br></br>
//                <Typography>
//                 <Link href="#">Forget password?</Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }
// export default Login;



// homepage


// src/MedicalShopHomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Divider,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#f0f0f0',
  padding: '5px',
};

const sectionStyle = {
  flex: 1,
  textAlign: 'center',
};

const headingStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#333',
  textDecoration: 'none',
};

const hoverLinkStyle = {
  textDecoration: 'underline',
};


const MedicalShopHomePage = () => {
  return (
    <div>
    <Container>
      {/* App Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              MEDICAL SHOP
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls="primary-search-account-menu-mobile"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Rest of the content */}
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Online Medical Shop
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Your one-stop solution for all your medical needs.
      </Typography>

      {/* Search Bar */}
      <TextField label="Search for products" variant="outlined" fullWidth margin="normal" />

      {/* Product Categories */}
      <Typography variant="h4" align="center" gutterBottom>
        Product Categories
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Add category buttons here */}
        <Grid item>
          <Button variant="contained" color="secondary">
            Over-the-counter Medicines
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Prescription Drugs
          </Button>
        </Grid>
        {/* Add more categories as needed */}
      </Grid>

      <Divider style={{ margin: '20px 0' }} />

      {/* Featured Products */}
      <Typography variant="h4" align="center" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {/* Add featured product cards here */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 1"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8hWel0JkQJr6g7t7YAasmu1AJxJJ6-S7vA&usqp=CAU"
            />
            <CardContent>
              <Typography variant="h6">Syrup</Typography>
              {/* <Typography variant="body2" color="textSecondary">
                Description of the featured product.
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 1"
              height="140"
              image="https://img.indiafilings.com/learn/wp-content/uploads/2018/11/12005006/Tamil-Nadu-Drug-License.jpg"
            />
            <CardContent>
              <Typography variant="h6">Tablets</Typography>
              {/* <Typography variant="body2" color="textSecondary">
                Description of the featured product.
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              // alt="Featured Product 1"
              alt="Syrup"
              height="140"
              image="https://medqsupplies.co.za/wp-content/uploads/2022/01/coronavirus-covid-prevention-equipment-medical-supplies-virus-outbreak-situation-body-health-care-washing-cleaning-your-hand-177486173.jpg"
            />
            <CardContent>
              <Typography variant="h6">Medical Supplies</Typography>
              {/* <Typography variant="body2" color="textSecondary">
                Description of the featured product.
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/* Add more featured products as needed */}
      </Grid>

      {/* User Authentication and Shopping Cart */}
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Log In
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            My Cart (0)
          </Button>
        </Grid>
      </Grid>
      {/* Privacy Policy */}
      {/* <Box mt={4} p={2} bgcolor="grey.200" textAlign="center">
        <Typography variant="body2">
          <a href="/privacy-policy">Privacy Policy</a>
        </Typography>
      </Box>
      <Box mt={4} p={2} bgcolor="grey.200" textAlign="center">
        <Typography variant="body2">
          <a href="/privacy-policy">Company</a>
        </Typography>
      </Box> */}

{/* Footer */}

<footer style={footerStyle}>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Company</h4>
        <Link to="/about-us" style={linkStyle}>About Us</Link>
        <Link to="/careers" style={linkStyle}>Careers</Link>
        <Link to="/blog" style={linkStyle}>Blog</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Our Services</h4>
        <Link to="/featured-categories" style={linkStyle}>Featured Categories</Link>
        <Link to="/top-products" style={linkStyle}>Top Products</Link>
        <Link to="/all-doctors-list" style={linkStyle}>All Doctors List</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Need Help</h4>
        <Link to="/browse-all-medicines" style={linkStyle}>Browse All Medicines</Link>
        <Link to="/browse-all-stores" style={linkStyle}>Browse All Stores</Link>
        <Link to="/FAQ" style={linkStyle}>FAQ</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Policy Info</h4>
        <Link to="/terms-and-conditions" style={linkStyle}>Terms and Conditions</Link>
        <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Customer Support Policy</Link>
      </div>
      {/* Add more sections as needed */}
    </footer>


    </Container>
    {/* <footer>
      Add your footer content here
      <p>Company | About Us | Careers | Blog | FAQ | Contact Us | Terms and Conditions</p>
    </footer> */}
    </div>
  );
};
export default MedicalShopHomePage;
