import React from "react";
import ReactDOM from 'react-dom';
import Menu from './componets/Menu.js'
import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper'; 
import Header from './componets/Header.js'


//lista de imagenes 



//ReactDOM.render("que voy a renderizar","donde voy a renderizar")

const Miapp=document.getElementById("app");
ReactDOM.render(
<div>
   <div>
      <Grid container spacing={24}>
        <Grid item xs={12} >
          <Paper ><Header/></Paper>
        </Grid>
        </Grid>
  </div>

      <br/>
      <div className="Content">
              <Grid container spacing={24}>
              <Grid item xs={12} sm={12}>
          <Paper ><Menu/></Paper>
        </Grid>
        </Grid>
      </div>
  
</div>
   



 ,Miapp);

