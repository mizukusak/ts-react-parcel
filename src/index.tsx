import './styles/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { useStrict } from 'mobx'

import App from './router'
import store from './store'
import {ReactComponent} from "./util/reactExt";

useStrict(true)

const render = (Component: ReactComponent) => {
  ReactDOM.render(
    <Provider {...store}>
      <Component />
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}

render(App)

// Hot Module Replacement API
// if (module.hot) { }
