import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import chunkComponentLoader from './utils/chunkComponentLoader';

const AppRouter = () => (
    <Switch>
      <Route path="/" exact component={chunkComponentLoader(() => {
        return import('./containers/grid/grid')
      })} />
      <Redirect from='/*' to='/' />
    </Switch>
)

export default AppRouter