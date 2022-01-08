import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, useMediaQuery } from '@material-ui/core';

// third-party
import clsx from 'clsx';

// project imports
// import Breadcrumbs from './../../ui-component/extended/Breadcrumbs';
import Header from './Header';
// import Customization from './../Customization';
import navigation from './../../menu-items';
import { drawerWidth } from '../../store/constant';
import { SET_MENU } from './../../store/actions';

// assets
import { IconChevronRight } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        backgroundColor: "rgba(0,0,0,0)"
    },
    appBarWidth: {
        transition: theme.transitions.create('width'),
        backgroundColor: "rgba(0,0,0,0)"
    },
    content: {
        ...theme.typography.mainContent,
        marginTop:'66px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
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
            <AppBar position="fixed" color="inherit" elevation={0} className={false ? classes.appBarWidth : classes.appBar}>
                <Toolbar>
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
