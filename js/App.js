import React, { Component } from 'react'
import {
	addNavigationHelpers,
} from 'react-navigation'
import { Provider, connect } from "react-redux"

import store from './store'
import {
	addListener,
	AppNavigator,
} from './navigation'


@connect(state => ({ nav: state.nav }))
class AppWithNavigationState extends Component {
	render() {
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
					addListener,
				})}
			/>
		);
	}
}

export default function App() {
	return (
		<Provider store={store}>
			<AppWithNavigationState />
		</Provider>
	)
}
