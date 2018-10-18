import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

class Header extends React.Component{
    render(){
       
        return(
            <AppBar position="static">
            <Toolbar>
              <IconButton  color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Mi aplicación 
              </Typography>
          
                <div>
                  <IconButton
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                
                  <Button color="inherit">Documentacion </Button>
                  <Button color="inherit">Aprendizaje </Button>
                  <Button color="inherit">Contactanos  </Button>
                </div>


                  
              
            </Toolbar>
          </AppBar>
        )
    }
}
export default Header; 