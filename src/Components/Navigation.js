 import * as React from 'react';
import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 import Button from '@mui/material/Button';
 import IconButton from '@mui/material/IconButton';
 import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'


 const Navigation = () =>{
  return (
    <Box sx={{FlexGrow: 1 }}>
      <AppBar position="static">
         <Toolbar>
         <IconButton
             size="large"
             edge="start"
           color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
           >
             <MenuIcon />
        </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Siet
             
           </Typography>
           <Button color="inherit"><Link to='/Home'>Home</Link></Button>
           
           <Button color="inherit"><Link to='/contact'>contact</Link></Button>
           <Button color="inherit"><Link to='/todolist'>Todolist</Link></Button>
         </Toolbar>
       </AppBar>
     </Box>
   );
 }
 export default Navigation


// import React from 'react'
// import {Link} from 'react-router-dom'
// const Navigation = () => {
//   return (
    
//     <div>
//       <nav>
//         <ul>
//           <li><Link to='/Home'>Home</Link></li>
//           <li><Link to='/contact'>contact</Link></li>
//           <li><Link to='/todolist'>Todolist</Link></li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navigation