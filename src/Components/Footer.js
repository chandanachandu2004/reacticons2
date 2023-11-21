// // import React from 'react'
// // import './Footer.css'
// // const Footer = () => {
// //   return (
// //     <div>
// //     <p className='para'> <center>Footer</center></p>
// //     </div>
// //   )
// // }

// // export default Footer

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Paper from '@mui/material/Paper';
// import Fab from '@mui/material/Fab';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import Avatar from '@mui/material/Avatar';
// import MenuIcon from '@mui/icons-material/Menu';
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';



// const Footer=()=> {
//   return(
//     <React.Fragment>

//       <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
//         <Toolbar>
         
//           <Box sx={{ flexGrow: 1 }} />
//         </Toolbar>
//       </AppBar>
//       </React.Fragment>
//   );

// }

// export default Footer
import React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1976D2',
    color: 'white',
    textAlign: 'center',
  };

  const iconStyle = {
    color: 'white',
    marginRight: '10px',
  };

  return (
    <div style={footerStyle}>
      <IconButton color="inherit" aria-label="Facebook" href="https://www.facebook.com">
        <FacebookIcon style={iconStyle} />
      </IconButton>
      <IconButton color="inherit" aria-label="Twitter" href="https://www.twitter.com">
        <TwitterIcon style={iconStyle} />
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram" href="https://www.instagram.com">
        <InstagramIcon style={iconStyle} />
      </IconButton>
    </div>
  );
}

export default Footer;