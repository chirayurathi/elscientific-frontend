import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import Routes from './routes';

// defaultTheme
import theme from './themes';

// project imports
import Locales from './ui-component/Locales';
import NavigationScroll from './layout/NavigationScroll';


//-----------------------|| APP ||-----------------------//

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme()}>
                <CssBaseline />
                {/* RTL layout */}
                {/* <RTLLayout> */}
                <Locales>
                    <NavigationScroll>
                            <Routes />
                            <Snackbar />
                    </NavigationScroll>
                </Locales>
                {/* </RTLLayout> */}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
