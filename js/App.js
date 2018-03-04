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

// gets the current screen from navigation state
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
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
		const currentRouteName = getCurrentRouteName(nav)
		if (currentRouteName === 'Home') return false
    dispatch(NavigationActions.back({ key: null }))
		return true
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
