import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// Import page components
const HomePage = Loadable(lazy(() => import('../views/pages/HomePage')));
const AboutPage = Loadable(lazy(() => import('../views/pages/AboutPage')));
const PricingPage = Loadable(lazy(() => import('../views/pages/PricingPage')));
const ConferencesPage = Loadable(lazy(() => import('../views/pages/ConferencesPage')));
const ContactPage = Loadable(lazy(() => import('../views/pages/ContactPage')));
const LoginPage = Loadable(lazy(() => import('../views/pages/LoginPage')));
const SignupPage = Loadable(lazy(() => import('../views/pages/SignupPage')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route 
        // path={['/']}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    {/* <AuthGuard> */}
                        <Route path="/home" exact component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/pricing" component={PricingPage} />
                        <Route path="/conferences" component={ConferencesPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/signup" component={SignupPage} />
                    {/* </AuthGuard> */}
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
