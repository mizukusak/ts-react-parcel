/**
 * 组件lazyload
 */
import * as React from 'react'
import {ReactComponent} from "../util/reactExt";

interface States {
  Component: ReactComponent| null
}

export default function asyncComponent(getComponent: () => Promise<any>) {
  return class AsyncComponent extends React.Component<{}, States> {
    constructor(props: any) {
      super(props)
      this.state = {
        Component: null
      }
    }

    async componentWillMount() {
      if (!this.state.Component) {
        try {
          const Component: ReactComponent = await getComponent()
          this.setState({
            Component
          })
        } catch (err) {
          console.error(err)
        }
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component { ...this.props} />
      }
      return null
    }
  }
}

