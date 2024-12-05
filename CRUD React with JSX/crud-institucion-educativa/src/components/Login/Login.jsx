import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Paper, Typography } from "@mui/material";
export const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: "white",
        textDecoration: "none",
        margin: theme.spacing(2),
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundColor: theme.palette.background.default
        background: '#f5f5f5'
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: "center",
    },
    button: {
        marginBottom: theme.spacing(2),
    },
}));

/*const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundColor: theme.palette.background.default
        background: '#f5f5f5'
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: "center",
    },
    button: {
        marginBottom: theme.spacing(2),
    },
}));*/
export default function Login() {
    return <h1>CAREE MONDA</h1>;
    /*return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h5">Iniciar Sesión</Typography>
                <form>
                    <TextField
                        className={classes.input}
                        label="Usuario"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        className={classes.input}
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        ¡ENTRAR!
                    </Button>
                </form>
            </Paper>
        </div>
    )*/
} 

