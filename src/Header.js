import { Container } from "@mui/material";
import React from "react";
import logo from './Checklist-min.jpeg';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Header = () => {
    return(
        <>
        <Grid2 display="flex" alignItems="center" justifyContent="center">
    <img alt='photo' src={logo} height={150} width="auto"/>
    <h1>Note Making App</h1>
        </Grid2>
        </>
    );
}

export default Header;