import React, { Component } from 'react'
import { BackHandler } from "react-native"
import {
	addNavigationHelpers,
	NavigationActions,
} from 'react-navigation'
import { Provider, connect } from "react-redux"

import store from './store'
import {
	addListener,
	AppNavigator,
} from './navigation'


@connect(state => ({ nav: state.nav }))
class AppWithNavigationState extends Component {
	constructor(props) {
		super(props)

		this.onBackPress = this.onBackPress.bind(this)
	}

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index !== 0) {
	    dispatch(NavigationActions.back())
			return true
    }

		const stackNavigators = nav.routes[0].routes
		if (stackNavigators.some(nav => nav.index !== 0)) {
	    dispatch(NavigationActions.back())
			return true
		}

		return false
  }

	render() {
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
					addListener,
				})}
			/>
		)
	}
}

export default function App() {
	return (
		<Provider store={store}>
			<AppWithNavigationState />
		</Provider>
	)
}
