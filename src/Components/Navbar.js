import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "../CssFiles/Navbar.css";
import Input from "./Input";
import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';


export default function MenuAppBar() {
  return (
    <>
      <Box className="box_nav" >
        <AppBar position="fixed" top="4rem"
          style={{ boxShadow: "none", position: "fixed", top: "0", backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", pl: "20px", pr: "20px" }}
          className="box_nav"
        >
          <div className="logo"> <img alt="logo" src="https://gw.alicdn.com/tfs/TB1hVGkvVP7gK0jSZFjXXc5aXXa-365-49.svg" width="250"  /> </div>
          <Grid sm={9} lg={7} className="nv_input">
            <div> <Input /> </div>
          </Grid>
          <Grid lg={3} >
            <div>
              <div style={{ color: "grey", display: "flex", alignItems: "center" }}>
                <IconButton>
                  <PersonIcon style={{ fontSize: "50px" }} />
                </IconButton>
                <div>
                  <Typography>Sign In</Typography>
                  <Typography>Join Free</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "60%" }}>
                  <div>
                    <IconButton style={{ padding: "0px" }}  >
                      <SmsOutlinedIcon style={{ fontSize: "30px" }} />
                    </IconButton>
                    <Typography>Message</Typography>
                  </div>
                  <div>
                    <IconButton style={{padding:"0px"}}>
                      <LocalAtmOutlinedIcon style={{ fontSize: "30px" }} />
                    </IconButton>
                    <Typography>Orders</Typography>
                  </div>
                  <div>
                    <IconButton style={{ padding: "0px" }}  >
                      <ShoppingCartOutlinedIcon style={{ fontSize: "30px" }} />
                    </IconButton>
                    <Typography>Cart</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </AppBar>
      </Box>
    </>
  );
}
