import * as React from 'react';
import {useMatch, useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {menu} from '../resources/menu.jsx'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    const isHome = useMatch('/');

    const redirectHome = () => {
        if (!isHome)
            navigate('/');
    };

    const toggleDrawer = () =>
        setIsMenuOpen(prevState=> !prevState);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={redirectHome}>
                    PersonALL
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={'right'}
                        open={isMenuOpen}
                        onClose={toggleDrawer}
                    >
                        <List>
                            {menu.map(({menuTitle, menuLink}, index) => (
                                <ListItem key={menuTitle} disablePadding>
                                    <ListItemButton onClick={() => navigate(menuLink)}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={menuTitle} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </Toolbar>
        </AppBar>
    );
}