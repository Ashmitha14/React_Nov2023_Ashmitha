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
import { styled, alpha , useTheme } from '@mui/material/styles';
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
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { red } from '@mui/material/colors';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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
const viewStyle = {
  // color:"#2196F3",
  color:"#007bff",
  textDecoration: 'none',
};

const hoverLinkStyle = {
  
  textDecoration: 'underline',
};
const cartStyle = {
  textDecoration:'none',
  color:'white'
};


const MedicalShopHomePage = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
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
                <Badge color="error" component={RouterLink} to="/cart" style={cartStyle}>
                  <ShoppingCartOutlinedIcon/>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge color="error" badgeContent={0}>
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
                <Badge color="error" component={RouterLink} to="/registration" style={cartStyle}>
                <AccountCircle />
                </Badge>
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


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
            {/* <List>
            {[
                { text: 'Find Doctors', icon: <MedicalServicesIcon/> },
                { text: 'Vaccines', icon: <VaccinesRoundedIcon/> },
                { text: 'Local Hospital', icon: <LocalHospitalIcon/> },
              ].map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <ListItemButton>
              <ListItemIcon color="secondary">
              {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}

        </List> */}
            {/* <List>
            {[
                { text: 'Notifications', icon: <NotificationsIcon/> },
                { text: 'Settings', icon: <SettingsIcon/> },
                { text: 'About Us', icon: <InfoIcon/> },
              ].map((text, index) => (
          <ListItem key={text.text} disablePadding>
            <ListItemButton>
              <ListItemIcon color="secondary">
              {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}

        </List> */}
        {/* <ListItem button component={RouterLink} to="/settings">
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem> */}
        <ListItem button component={RouterLink} to="/a">
          <ListItemIcon>
          <MedicalServicesIcon/> 
          </ListItemIcon>
          <ListItemText primary="Find Doctors" />
        </ListItem>
        <ListItem button component={RouterLink} to="/a">
          <ListItemIcon>
          <VaccinesRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary="Vaccines" />
        </ListItem>
        <ListItem button component={RouterLink} to="/a">
          <ListItemIcon>
          <LocalHospitalIcon/> 
          </ListItemIcon>
          <ListItemText primary="Local Hospital" />
        </ListItem>
        <Divider />
        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={RouterLink} to="/a">
          <ListItemIcon>
          <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button component={RouterLink} to="/settings">
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />      
    <div>
    <Container>
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
        <Grid item>
          <Button variant="contained" color="secondary" component={RouterLink} to="/otc">
          {/* <Link to="https://www.apollopharmacy.in/shop-by-category/apollo-otc" style={{textDecoration: 'none',color:'white'}}> */}
            Over-the-counter Medicines
            {/* </Link> */}
          </Button>
        </Grid>
        <Grid item>
          {/* <Button variant="contained" color="secondary" component={RouterLink} to="/prs"> */}
          <Button variant="contained" color="secondary">
          <Link to="https://www.apollopharmacy.in/shop-by-category/apollo-otc" style={{textDecoration: 'none',color:'white'}}>
            Prescription Drugs
            </Link>
          </Button>
        </Grid>
        {/* Add more categories as needed */}
      </Grid>

      <Divider style={{ margin: '20px 0' }} />

      {/* Featured Products */}
      <Typography variant="h4" align="center" gutterBottom >
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
              <Button size="small">
              <Link to="/about-us" style={viewStyle}>
                View Details
              </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 2"
              height="140"
              image="https://img.indiafilings.com/learn/wp-content/uploads/2018/11/12005006/Tamil-Nadu-Drug-License.jpg"
            />
            <CardContent>
              <Typography variant="h6">Tablets</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
              <Link to="/about-us" style={viewStyle}>
                View Details
              </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 3"
              height="140"
              image="https://medqsupplies.co.za/wp-content/uploads/2022/01/coronavirus-covid-prevention-equipment-medical-supplies-virus-outbreak-situation-body-health-care-washing-cleaning-your-hand-177486173.jpg"
            />
            <CardContent>
              <Typography variant="h6">Medical Supplies</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
              <Link to="/about-us" style={viewStyle}>
                View Details
              </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br></br>
      <Typography variant="h4" align="center" gutterBottom>
      Browse medicines & health products
      </Typography>
      <Grid container spacing={3}>
        {/* Add featured product cards here */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 4"
              height="205"
              image="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png"
            />
            <CardActions>
              <Button size="small" color="primary">
              <Link to="/about-us" style={viewStyle}>
                View Details
              </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 5"
              height="205"
              image="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png"
            />
            <CardActions>
              <Button size="small" color="primary">
              <Link to="/about-us" style={viewStyle}>
                View Details
              </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Featured Product 6"
              height="205"
              image="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png"
            />
            <CardActions>
              <Button size="small" color="primary">
              <Link to="/about-us" style={linkStyle}>
              <Link to="/about-us" style={viewStyle}>
                View Details
              </Link>
              </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        </Grid>
      {/* User Authentication and Shopping Cart */}
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item>
          {/* <Button variant="outlined" color="secondary" component={RouterLink} to="/registration"> */}
          <Button variant="contained" color="secondary" component={RouterLink} to="/registration">
            Log In
          </Button>
        </Grid>
        {/* My Cart */}
        <Grid item>
          <Button variant="contained" color="secondary" component={RouterLink} to="/cart">
            My Cart<ShoppingCartTwoToneIcon/>
          </Button>
        </Grid>
      </Grid>
      <br></br>
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
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Follow Us on</h4>
        <InstagramIcon style={{ color: '#e4405f' }}/>&nbsp;
        <FacebookIcon color="primary"/>&nbsp;
        <YouTubeIcon sx={{ color: red[900] }}/>&nbsp;
        <TwitterIcon color="primary"/>
      </div>
    </footer>
    </Container>
    {/* <footer>
      Add your footer content here
      <p>Company | About Us | Careers | Blog | FAQ | Contact Us | Terms and Conditions</p>
    </footer> */}
    </div>
    </Main>
    </Box>
  );
};
export default MedicalShopHomePage;

