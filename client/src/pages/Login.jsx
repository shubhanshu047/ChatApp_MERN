import { React, useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validator';

export default function Login() {

    const [isLogin, setisLogin] = useState(true);

    // useInputValidation is a 6pp liberary ka part, and used to apply valitations and make the input types changable in react. to apply validation, just need to give the validator function name in second parameter. this function should return a isValid(bool) and errorMessage(string).

    // useInputValidation() returns me an array of value, error, changeHandler and clear 

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword("");
    const avatar = useFileHandler("single", 1);  // quantity, file max-size in mb

    const handleLogin = (e) => {
        e.preventDefault();
    };
    const handleSignUp = (e) => {
        e.preventDefault();
    };

    return (
        <Container component={"main"} maxwidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center", }}>

                {isLogin ?
                    (<><Typography variant="h5">Login</Typography>
                        <form style={{ width: "100%", marginTop: "1rem", }} onSubmit={handleLogin}>
                            <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
                            <TextField required fullWidth label="Password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
                            <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: "1rem", }}>
                                Login
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button fullWidth sx={{ padding: "0px !important" }} variant="text" onClick={() => setisLogin(false)} >
                                Sign Up Instead
                            </Button>
                        </form>
                    </>)
                    :
                    (<><Typography variant="h5">Sign Up</Typography>
                        <form style={{ width: "100%", marginTop: "1rem", }} onSubmit={handleSignUp}>

                            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} src={avatar.preview} />
                                <IconButton sx={{ position: "absolute", bottom: "0", right: "0", color: "white", bgcolor: "rgba(0,0,0,0.5)", ":hover": { bgcolor: "rgba(0,0,0,0.7)" } }} component="label">
                                    <>
                                        <CameraAltIcon />
                                        <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                    </>
                                </IconButton>
                            </Stack>
                            {
                                avatar.error && (
                                    <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant='caption'>
                                        {avatar.error}
                                    </Typography>
                                )
                            }

                            <div>
                                <TextField required fullWidth label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler} />
                                <TextField required fullWidth label="Bio" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler} />
                            </div>
                            <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
                            {
                                username.error && (
                                    <Typography color="error" variant='caption'>
                                        {username.error}
                                    </Typography>
                                )
                            }

                            <TextField required fullWidth label="Password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
                            {
                                password.error && (
                                    <Typography color="error" variant='caption'>
                                        {password.error}
                                    </Typography>
                                )
                            }
                            <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginTop: "1rem", }}>
                                Sign Up
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button fullWidth sx={{ padding: "0px !important" }} variant="text" onClick={() => setisLogin(true)} >
                                Login instead
                            </Button>
                        </form>
                    </>)
                }

            </Paper>
        </Container>
    )
}
