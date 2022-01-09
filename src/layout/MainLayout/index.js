import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, useMediaQuery } from '@material-ui/core';

// third-party
import clsx from 'clsx';

import Header from './Header';

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing:'border-box',
        margin:0,
        padding:0,
        overflow:'hidden'
    },
    toolbar:{
        justifyContent:"space-between",
    },
    appBar: {
        backgroundColor: "rgba(0,0,0,0)",
        padding:"10px",
        boxSizing:"border-box",
        height:"12vh"
    },
    appBarWidth: {
        transition: theme.transitions.create('width'),
        backgroundColor: "rgba(0,0,0,0)",
        padding:"10px",
        boxSizing:"border-box",
        height:"12vh"
    },
    content: {
        ...theme.typography.mainContent,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        // [theme.breakpoints.up('md')]: {
        //     marginLeft: -(drawerWidth - 20),
        //     width: `calc(100% - ${drawerWidth}px)`
        // },
        // [theme.breakpoints.down('md')]: {
        //     marginLeft: '20px',
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     padding: '16px'
        // },
        // [theme.breakpoints.down('sm')]: {
        //     marginLeft: '10px',
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     padding: '16px',
        //     marginRight: '10px'
        // }
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    }
}));

//-----------------------|| MAIN LAYOUT ||-----------------------//

const MainLayout = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* header */}
            <AppBar position="relative" color="inherit" elevation={0} className={false ? classes.appBarWidth : classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Header />
                </Toolbar>
            </AppBar>
            <main
                className={clsx([
                    classes.content,
                    {
                        [classes.contentShift]: false
                    }
                ])}
            >
                <div>{children}</div>
            </main>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
