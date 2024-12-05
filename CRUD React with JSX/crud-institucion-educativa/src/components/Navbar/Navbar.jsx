import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useStyles } from "../Login/Login";

export default function Navbar() {
const classes = useStyles();

return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
                SERVICIO NACIONAL DE APRENDIZAJE - SENA 
            </Typography>
            <div>
                <Link to="/home" className={classes.link}> 
                    <Button color='inherit'>HOme!!</Button>
                </Link>
                <Link to="/cursos" className={classes.link}>
                    <Button color='inherit'>CURSOS!!</Button>
                </Link>
                <Link to="/usuarios" className={classes.link}>
                    <Button color='inherit'>Usuarios!!</Button>
                </Link>
                <Link to="/masinformacion" className={classes.link}>
                    <Button color='inherit'>Mas Informacion!!</Button>
                </Link>
                <Link to="/Login" className={classes.link}>
                    <Button color='inherit'>LOGIN dv</Button>
                </Link>
            </div>
            </Toolbar>
        </AppBar>
        );
}















