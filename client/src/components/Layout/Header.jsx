import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { orange } from '../../constants/color';
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleMobile = () => {
        console.log("Mobile");
    };
    const openSearchDialog = () => {
        console.log("Search hai");
    };
    const openNewGroup = () => {
        console.log("openNewGroup");
    };
    const navigateToGroup = () => {
        navigate("/group");
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{ bgcolor: orange, height: "100%" }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" }, }}>Chattu</Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" }, }}><IconButton color="inherit" onClick={handleMobile}><MenuIcon /></IconButton></Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <IconBtn title={"Search"} icon ={<SearchIcon/>} onClick={openSearchDialog}/>

                            <IconBtn title={"New Group"} icon ={<SearchIcon/>} onClick={openSearchDialog}/>

                            <IconBtn title={"Manage Group"} icon ={<SearchIcon/>} onClick={openSearchDialog}/>


                            <Tooltip title="search">
                                <IconButton color="inherit" size="large" onClick={openSearchDialog}>
                                    <SearchIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="New Group">
                                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Manage Group">
                                <IconButton color="inherit" size="large" onClick={navigateToGroup}>
                                    <GroupIcon />
                                </IconButton>
                            </Tooltip>



                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={navigateToGroup}>
                <GroupIcon />
            </IconButton>
        </Tooltip>
    )
}

export default Header;
