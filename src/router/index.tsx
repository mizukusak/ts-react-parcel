import * as React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Error from './../components/Error'
import asyncComponent from './asyncComponent'
const Home = asyncComponent(() => import('./../views/Home').then(mod => mod.default))
const Login = asyncComponent(() => import('./../views/Login').then(mod => mod.default))

let isLogin=false;
const PrivateRoute = ({ component, ...rest }: {component: any, [rest: string]: any}) => {
  const Component = component
  return (
    <Route {...rest} render={props => (
      isLogin ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
    )} />
  )
}

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
)

export default App
