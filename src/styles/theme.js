import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fefae0'
        },
        secondary: {
            main: '#588157'
        },
        info: {
            main: '#a3b18a'
        },
        background: {
            paper: '#f6f4f0',
            default: '#f6f4f0'
        }
    },
    typography: {
        h1: {
            fontFamily: "'Ubuntu', monospace",
            cursor: 'default',
            userSelect: 'none',
        },
        h2: {
            fontFamily: "'Ubuntu', monospace",
            cursor: 'default',
            userSelect: 'none',
        },
        h3: {
            fontFamily: "'Ubuntu', monospace",
            cursor: 'default',
            userSelect: 'none',
        },
        h4: {
            fontFamily: "'Ubuntu', monospace",
            cursor: 'default',
            userSelect: 'none',
        },
        h5: {
            fontFamily: "'Ubuntu', monospace",
            cursor: 'default',
            userSelect: 'none',
        },
        h6: {
            fontFamily: "'Ubuntu', monospace",
            cursor: 'default',
            userSelect: 'none',
        },
        subtitle1: {
            cursor: 'default',
            userSelect: 'none',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                sizeLarge: {
                    fontSize: '18px',
                    padding: '10px 24px',
                    height: 'max-content'
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    width: "1.2rem",
                    height: "1.2rem"
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "2.5rem"
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    paddingTop: "1.7rem",
                    paddingBottom: "1.7rem"
                }
            }
        }
    }

});