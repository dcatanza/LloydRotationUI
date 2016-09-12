import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber500, amber700} from 'material-ui/styles/colors';

import Main from '../containers/Main';
import Home from '../components/Home';
import FroshPageContainer from '../containers/FroshPageContainer';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: amber500,
        primary2Color: amber700,
        pickerHeaderColor: amber500,
  },
});


const routes = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={Home} />
                <Route path='/frosh/:id' component={FroshPageContainer} />
            </Route>
        </Router>
    </MuiThemeProvider>
);

export default routes;