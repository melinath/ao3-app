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


type NavigationRoute = {
	routes: Array<NavigationRoute>,
	index: number,
}


type Props = {
	nav: NavigationRoute,
	dispatch: Dispatch,
}


class AppWithNavigationState extends Component<Props> {
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
	    dispatch(NavigationActions.back({ key: null }))
			return true
    }

		const stackNavigators = nav.routes[0].routes
		if (stackNavigators.some(nav => nav.index !== 0)) {
	    dispatch(NavigationActions.back({ key: null }))
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


const mapStateToProps: mapStateToProps = (state) => ({nav: state.nav})

const Connected = connect(mapStateToProps)(AppWithNavigationState)


export default function App() {
	return (
		<Provider store={store}>
			<Connected />
		</Provider>
	)
}
