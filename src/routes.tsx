import * as React from 'react';
import { Route, Switch } from 'react-router';

import Main from './containers/Main/Main';
import NotFound from './containers/NotFound/NotFound';

export const PATHS = {
  MAIN: '/',
  ERROR: '/404',
};

/* tslint:disable:jsx-no-lambda */
export const routes: JSX.Element = (
  <Switch>
    <Route exact={ true } path={ PATHS.MAIN } component={ Main } />
    <Route exact={ true } path={ PATHS.ERROR } component={ NotFound } />
    <Route render={ () => <span>Тоже не найдено</span> } />
  </Switch>
);
