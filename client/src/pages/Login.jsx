import { React, useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import {CameraAlt as CameraAltIcon} from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';

export default function Login() {

    const [isLogin, setisLogin] = useState(true);

    return (
        <Container component={"main"} maxwidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center", }}>

                {isLogin ?
                    (<><Typography variant="h5">Login</Typography>
                        <form style={{ width: "100%", marginTop: "1rem", }}>
                            <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
                            <TextField required fullWidth label="Password" margin="normal" variant="outlined" />
                            <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: "1rem", }}>
                                Login instead
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button fullWidth sx={{padding: "0px !important"}} variant="text" onClick={() => setisLogin(false)} >
                                Sign Up
                            </Button>
                        </form>
                    </>)
                    :
                    (<><Typography variant="h5">Sign Up</Typography>
                        <form style={{ width: "100%", marginTop: "1rem", }}>

                            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                <Avatar sx={{width:"10rem",height:"10rem",objectFit:"contain" }}/>
                                <IconButton sx={{position: "absolute", bottom: "0", right: "0",color:"white",bgcolor:"rgba(0,0,0,0.5)", ":hover":{bgcolor:"rgba(0,0,0,0.7)"}}} component="label">
                                    <>
                                        <CameraAltIcon />
                                        <VisuallyHiddenInput type='file'/> 
                                    </>
                                </IconButton>
                            </Stack>

                            <div>
                                <TextField required fullWidth label="Name" margin="normal" variant="outlined" />
                                <TextField required fullWidth label="Bio" margin="normal" variant="outlined" />
                            </div>
                            <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
                            <TextField required fullWidth label="Password" margin="normal" variant="outlined" />
                            <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: "1rem", }}>
                                Sign Up
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button fullWidth sx={{padding: "0px !important"}} variant="text" onClick={() => setisLogin(true)} >
                                Login instead
                            </Button>
                        </form>
                    </>)
                }

            </Paper>
        </Container>
    )
}
