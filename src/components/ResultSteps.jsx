import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, ListItemAvatar} from "@mui/material";
import {ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline';

export const ResultSteps = ({steps}) => {
    return (
        <div style={{width: '70%', margin: 'auto', padding: '20px'}}>
            <Typography variant="h4" component='div' marginBottom='1.5rem' marginTop='4rem' align='center'
                        style={{userSelect: 'none'}}>
                <span>Kroky, které můžete podniknout:</span>
            </Typography>
            <List sx={{width: '100%', bgcolor: 'transparent'}}>
                {steps.map(({title, desc}, index) => (
                    <React.Fragment key={index}>
                        <ListItem alignItems="center">
                            <ListItemAvatar>
                                <Avatar>
                                    <ChatBubbleOvalLeftIcon className="icon" fill="transparent" color="#d3d3d3"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{userSelect: "none"}}
                                        component="div"
                                        variant="body2"
                                        fontSize="1.05rem"
                                        color="text.secondary"
                                    >
                                        {title}
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        sx={{textAlign: "justify", userSelect: 'none'}}
                                        component="div"
                                        variant="body2"
                                        fontSize="1rem"
                                        color="text.primary"
                                    >
                                        {desc}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        {index < steps.length - 1 && <Divider/>}
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
};
